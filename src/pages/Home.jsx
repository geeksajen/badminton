import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  collection,
  doc,
  getDocs,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../contexts/AuthContext'
import {
  COURSES_CACHE_KEY,
  clearCache,
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
        if (regSnap.exists()) {
          throw new Error('ALREADY_REGISTERED')
        }

        const data = courseSnap.data()
        const current = data.current_registrations ?? 0
        const max = data.max_capacity ?? 0
        if (current >= max) {
          throw new Error('FULL')
        }

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

        tx.update(courseRef, { current_registrations: current + 1 })
      })

      // 報名成功：本地更新名額 + 清掉暫存（下次進首頁會抓到最新數字）。
      setCourses((prev) =>
        prev.map((c) =>
          c.id === course.id
            ? { ...c, current_registrations: (c.current_registrations ?? 0) + 1 }
            : c,
        ),
      )
      clearCache(COURSES_CACHE_KEY)
      showToast('success', `已報名「${course.title}」，請至個人專區完成繳費！`)
    } catch (err) {
      if (err.message === 'ALREADY_REGISTERED') {
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

  return (
    <div>
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">課程列表</h1>
          <p className="mt-1 text-sm text-slate-500">
            選擇喜歡的課程，登入後即可線上報名。
            {fromCache && (
              <span className="ml-1 text-slate-400">（顯示暫存資料）</span>
            )}
          </p>
        </div>
        <button
          onClick={() => loadCourses(true)}
          className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          重新整理
        </button>
      </div>

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
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onRegister={handleRegister}
              registering={registeringId === course.id}
            />
          ))}
        </div>
      )}
    </div>
  )
}
