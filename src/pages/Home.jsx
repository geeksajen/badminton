import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  serverTimestamp,
  where,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../contexts/AuthContext'
import {
  COURSES_CACHE_KEY,
  clearCache,
  myRegsCacheKey,
  readCache,
  writeCache,
} from '../utils/cache'
import CourseCard from '../components/CourseCard'

export default function Home() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [fromCache, setFromCache] = useState(false)
  const [registeringId, setRegisteringId] = useState(null)
  const [toast, setToast] = useState(null) // { type, msg }
  const [search, setSearch] = useState('')
  const [onlyAvailable, setOnlyAvailable] = useState(false)
  const [registeredIds, setRegisteredIds] = useState([]) // 我已報名（有效）的 course_id

  // 抓課程列表：優先用 LocalStorage 暫存（1 小時），過期才向 Firestore 單次讀取。
  // forceRefresh = true 時略過暫存（例如使用者按「重新整理」按鈕）。
  const loadCourses = useCallback(async (forceRefresh = false) => {
    setLoading(true)
    setError('')

    if (!forceRefresh) {
      const cached = readCache(COURSES_CACHE_KEY)
      if (cached) {
        setCourses(cached)
        setFromCache(true)
        setLoading(false)
        return
      }
    }

    try {
      const snapshot = await getDocs(collection(db, 'courses'))
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      setCourses(list)
      setFromCache(false)
      writeCache(COURSES_CACHE_KEY, list)
    } catch (err) {
      console.error(err)
      setError('載入課程失敗，請確認網路或 Firebase 設定。')
    } finally {
      setLoading(false)
    }
  }, [])

  // 依賴 loadCourses（已用 useCallback 穩定），只會在掛載時跑一次，不會無窮迴圈。
  useEffect(() => {
    loadCourses(false)
  }, [loadCourses])

  // 載入「我已報名（未取消）的課程 id」，用來在首頁標示哪些課已報名。
  // 比照課程列表：先讀 1 小時的 localStorage 快取，過期才向 Firestore 查一次，
  // 查詢量很小（只撈自己的報名）。依賴 user?.uid，登入者變動才重抓。
  const loadMyRegs = useCallback(async (forceRefresh = false) => {
    if (!user) {
      setRegisteredIds([])
      return
    }
    const cacheKey = myRegsCacheKey(user.uid)
    if (!forceRefresh) {
      const cached = readCache(cacheKey)
      if (cached) {
        setRegisteredIds(cached)
        return
      }
    }
    try {
      const q = query(
        collection(db, 'registrations'),
        where('user_id', '==', user.uid),
      )
      const snap = await getDocs(q)
      const ids = snap.docs
        .map((d) => d.data())
        .filter((r) => r.status !== 'cancelled')
        .map((r) => r.course_id)
      setRegisteredIds(ids)
      writeCache(cacheKey, ids)
    } catch (err) {
      // 失敗不擋畫面，最壞情況就是按鈕沒標示「已報名」，報名時 transaction 仍會把關。
      console.error(err)
    }
  }, [user])

  useEffect(() => {
    loadMyRegs(false)
  }, [loadMyRegs])

  // 課程篩選：關鍵字（課名/教練/地點）+「只看尚有名額」。純前端，不額外讀 Firestore。
  const visibleCourses = useMemo(() => {
    const kw = search.trim().toLowerCase()
    return courses.filter((c) => {
      if (onlyAvailable) {
        const remaining =
          (c.max_capacity ?? 0) - (c.current_registrations ?? 0)
        if (remaining <= 0) return false
      }
      if (!kw) return true
      return (
        (c.title || '').toLowerCase().includes(kw) ||
        (c.coach || '').toLowerCase().includes(kw) ||
        (c.location || '').toLowerCase().includes(kw)
      )
    })
  }, [courses, search, onlyAvailable])

  const showToast = (type, msg) => {
    setToast({ type, msg })
    setTimeout(() => setToast(null), 3500)
  }

  const handleRegister = async (course) => {
    // 未登入 → 導向登入頁
    if (!user) {
      navigate('/login', { state: { from: { pathname: '/' } } })
      return
    }

    // 已報名（有效）→ 不重複報名，直接帶去個人專區查看 / 管理。
    if (registeredIds.includes(course.id)) {
      navigate('/dashboard')
      return
    }

    const regId = `${user.uid}_${course.id}`
    setRegisteringId(course.id)

    try {
      // 只有在按下報名的這一刻，才在交易中讀取「課程」與「報名紀錄」文件，
      // 確認名額與是否重複報名；用 transaction 保證原子性，避免超賣。
      await runTransaction(db, async (tx) => {
        const courseRef = doc(db, 'courses', course.id)
        const regRef = doc(db, 'registrations', regId)

        const [courseSnap, regSnap] = await Promise.all([
          tx.get(courseRef),
          tx.get(regRef),
        ])

        if (!courseSnap.exists()) {
          throw new Error('COURSE_NOT_FOUND')
        }

        const data = courseSnap.data()
        const current = data.current_registrations ?? 0
        const max = data.max_capacity ?? 0

        // 報名紀錄已存在：若仍有效就是重複報名；若先前已取消，則「重新啟用」。
        if (regSnap.exists() && regSnap.data().status !== 'cancelled') {
          throw new Error('ALREADY_REGISTERED')
        }
        if (current >= max) {
          throw new Error('FULL')
        }

        if (regSnap.exists()) {
          // 重新啟用先前取消的報名（文件已存在，用 update 而非 set）。
          tx.update(regRef, {
            status: 'pending',
            payment_notified: false,
            created_at: serverTimestamp(),
          })
        } else {
          tx.set(regRef, {
            registration_id: regId,
            user_id: user.uid,
            user_name: user.displayName || user.email,
            user_email: user.email,
            course_id: course.id,
            course_title: data.title || course.title || '',
            status: 'pending',
            payment_notified: false,
            created_at: serverTimestamp(),
          })
        }

        tx.update(courseRef, { current_registrations: current + 1 })
      })

      // 報名成功：本地更新名額與「已報名」清單 + 清掉暫存（下次進首頁會抓到最新數字）。
      setCourses((prev) =>
        prev.map((c) =>
          c.id === course.id
            ? { ...c, current_registrations: (c.current_registrations ?? 0) + 1 }
            : c,
        ),
      )
      setRegisteredIds((prev) =>
        prev.includes(course.id) ? prev : [...prev, course.id],
      )
      clearCache(COURSES_CACHE_KEY)
      clearCache(myRegsCacheKey(user.uid))
      showToast('success', `已報名「${course.title}」，請至個人專區完成繳費！`)
    } catch (err) {
      if (err.message === 'ALREADY_REGISTERED') {
        // 本地狀態落後（例如在別處報名過）→ 補進清單，按鈕立即變「已報名」。
        setRegisteredIds((prev) =>
          prev.includes(course.id) ? prev : [...prev, course.id],
        )
        clearCache(myRegsCacheKey(user.uid))
        showToast('error', '你已經報名過這堂課了，請至個人專區查看。')
      } else if (err.message === 'FULL') {
        showToast('error', '抱歉，這堂課剛剛已額滿。')
        clearCache(COURSES_CACHE_KEY)
        loadCourses(true)
      } else if (err.message === 'COURSE_NOT_FOUND') {
        showToast('error', '找不到這堂課程，可能已被移除。')
      } else {
        console.error(err)
        showToast('error', '報名失敗，請稍後再試。')
      }
    } finally {
      setRegisteringId(null)
    }
  }

  const totalRemaining = courses.reduce(
    (sum, c) =>
      sum + Math.max(0, (c.max_capacity ?? 0) - (c.current_registrations ?? 0)),
    0,
  )

  return (
    <div>
      {/* Hero 橫幅 */}
      <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-emerald-500 px-6 py-8 text-white shadow-sm sm:px-10 sm:py-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
          🏸 線上即時報名
        </div>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
          找到適合你的羽球課程
        </h1>
        <p className="mt-2 max-w-xl text-sm text-white/90">
          初階到進階一站搞定，登入後即可線上報名、追蹤繳費狀態。
          {courses.length > 0 && (
            <span className="ml-1 font-semibold">
              目前 {courses.length} 堂課、尚有 {totalRemaining} 個名額。
            </span>
          )}
        </p>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">課程列表</h2>
          <p className="mt-0.5 text-sm text-slate-500">
            選擇喜歡的課程，登入後即可線上報名。
            {fromCache && (
              <span className="ml-1 text-slate-400">（顯示暫存資料）</span>
            )}
          </p>
        </div>
        <button
          onClick={() => loadCourses(true)}
          className="shrink-0 self-start rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 sm:self-auto"
        >
          重新整理
        </button>
      </div>

      {/* 搜尋 + 篩選（純前端，不額外消耗 Firestore 讀取） */}
      {courses.length > 0 && (
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜尋課程名稱、教練或地點…"
            className="w-full rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
          <label className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-600">
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
              className="h-4 w-4 accent-brand-600"
            />
            只看尚有名額
          </label>
        </div>
      )}

      {toast && (
        <div
          className={
            'mb-4 rounded-xl px-4 py-3 text-sm font-medium ' +
            (toast.type === 'success'
              ? 'bg-brand-50 text-brand-700'
              : 'bg-rose-50 text-rose-700')
          }
        >
          {toast.msg}
        </div>
      )}

      {loading ? (
        <div className="flex h-48 items-center justify-center text-slate-400">
          載入課程中…
        </div>
      ) : error ? (
        <div className="rounded-xl bg-rose-50 px-4 py-6 text-center text-sm text-rose-700">
          {error}
        </div>
      ) : courses.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-slate-500">
          目前還沒有課程。教練可至 Firebase 後台的 <code>courses</code> 集合新增課程。
        </div>
      ) : visibleCourses.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-slate-500">
          找不到符合條件的課程，試試其他關鍵字或取消篩選。
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onRegister={handleRegister}
              registering={registeringId === course.id}
              registered={registeredIds.includes(course.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
