import { useCallback, useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { COURSES_CACHE_KEY, clearCache } from '../utils/cache'

const EMPTY_FORM = {
  title: '',
  coach: '',
  location: '',
  time: '',
  price: '',
  max_capacity: '',
}

export default function CourseManager() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [form, setForm] = useState(EMPTY_FORM)
  const [editingId, setEditingId] = useState(null) // null = 新增模式
  const [saving, setSaving] = useState(false)
  const [busyId, setBusyId] = useState(null)
  const [formError, setFormError] = useState('')

  const loadCourses = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const snap = await getDocs(collection(db, 'courses'))
      const list = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (a.title || '').localeCompare(b.title || '', 'zh-Hant'))
      setCourses(list)
    } catch (err) {
      console.error(err)
      setError('載入課程失敗，請稍後再試。')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadCourses()
  }, [loadCourses])

  const setField = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const resetForm = () => {
    setForm(EMPTY_FORM)
    setEditingId(null)
    setFormError('')
  }

  const startEdit = (course) => {
    setEditingId(course.id)
    setFormError('')
    setForm({
      title: course.title ?? '',
      coach: course.coach ?? '',
      location: course.location ?? '',
      time: course.time ?? '',
      price: String(course.price ?? ''),
      max_capacity: String(course.max_capacity ?? ''),
    })
    // 捲到表單方便編輯
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setFormError('')

    const title = form.title.trim()
    const price = Number(form.price)
    const maxCap = Number(form.max_capacity)
    if (!title) return setFormError('請輸入課程名稱。')
    if (!Number.isFinite(price) || price < 0)
      return setFormError('學費請填 0 以上的數字。')
    if (!Number.isInteger(maxCap) || maxCap <= 0)
      return setFormError('名額上限請填大於 0 的整數。')

    // 編輯時：名額上限不可低於目前已報名人數，避免出現「-N 個名額」。
    if (editingId) {
      const cur = courses.find((c) => c.id === editingId)
      const taken = cur?.current_registrations ?? 0
      if (maxCap < taken)
        return setFormError(`名額上限不可小於目前已報名人數（${taken} 人）。`)
    }

    const payload = {
      title,
      coach: form.coach.trim(),
      location: form.location.trim(),
      time: form.time.trim(),
      price,
      max_capacity: maxCap,
    }

    setSaving(true)
    try {
      if (editingId) {
        await updateDoc(doc(db, 'courses', editingId), payload)
      } else {
        // 新課程已報名人數從 0 開始（Firestore 規則也會強制檢查）。
        await addDoc(collection(db, 'courses'), {
          ...payload,
          current_registrations: 0,
        })
      }
      clearCache(COURSES_CACHE_KEY) // 讓自己的首頁下次抓到最新課程
      resetForm()
      await loadCourses()
    } catch (err) {
      console.error(err)
      setFormError('儲存失敗，請確認你在管理員白名單內，且 Firestore 規則已更新。')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (course) => {
    const taken = course.current_registrations ?? 0
    const warn =
      taken > 0
        ? `「${course.title}」目前已有 ${taken} 人報名，刪除後這些報名紀錄會變成孤兒（學員的個人專區仍看得到）。\n\n確定要刪除嗎？`
        : `確定要刪除「${course.title}」嗎？`
    if (!window.confirm(warn)) return

    setBusyId(course.id)
    try {
      await deleteDoc(doc(db, 'courses', course.id))
      clearCache(COURSES_CACHE_KEY)
      if (editingId === course.id) resetForm()
      setCourses((prev) => prev.filter((c) => c.id !== course.id))
    } catch (err) {
      console.error(err)
      alert('刪除失敗，請稍後再試。')
    } finally {
      setBusyId(null)
    }
  }

  return (
    <div>
      {/* 新增 / 編輯表單 */}
      <form
        onSubmit={handleSave}
        className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
      >
        <h3 className="text-base font-bold text-slate-800">
          {editingId ? '編輯課程' : '新增課程'}
        </h3>
        <p className="mt-0.5 text-xs text-slate-400">
          {editingId
            ? '修改後按「儲存變更」即可更新。'
            : '填寫課程資訊後按「新增課程」，學員首頁立刻就能報名。'}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="課程名稱" required>
            <input
              value={form.title}
              onChange={(e) => setField('title', e.target.value)}
              placeholder="週六初階班"
              className={inputCls}
            />
          </Field>
          <Field label="教練">
            <input
              value={form.coach}
              onChange={(e) => setField('coach', e.target.value)}
              placeholder="林教練"
              className={inputCls}
            />
          </Field>
          <Field label="地點">
            <input
              value={form.location}
              onChange={(e) => setField('location', e.target.value)}
              placeholder="中正運動中心 3 樓"
              className={inputCls}
            />
          </Field>
          <Field label="時間">
            <input
              value={form.time}
              onChange={(e) => setField('time', e.target.value)}
              placeholder="每週六 09:00–11:00"
              className={inputCls}
            />
          </Field>
          <Field label="學費 (NT$)" required>
            <input
              type="number"
              min="0"
              value={form.price}
              onChange={(e) => setField('price', e.target.value)}
              placeholder="1200"
              className={inputCls}
            />
          </Field>
          <Field label="名額上限" required>
            <input
              type="number"
              min="1"
              value={form.max_capacity}
              onChange={(e) => setField('max_capacity', e.target.value)}
              placeholder="12"
              className={inputCls}
            />
          </Field>
        </div>

        {formError && (
          <div className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
            {formError}
          </div>
        )}

        <div className="mt-4 flex gap-2">
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-60"
          >
            {saving ? '儲存中…' : editingId ? '儲存變更' : '新增課程'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              取消編輯
            </button>
          )}
        </div>
      </form>

      {/* 課程清單 */}
      {loading ? (
        <div className="flex h-32 items-center justify-center text-slate-400">
          載入課程中…
        </div>
      ) : error ? (
        <div className="rounded-xl bg-rose-50 px-4 py-6 text-center text-sm text-rose-700">
          {error}
        </div>
      ) : courses.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-slate-500">
          還沒有任何課程，用上面的表單新增第一堂吧！
        </div>
      ) : (
        <div className="space-y-3">
          {courses.map((c) => {
            const taken = c.current_registrations ?? 0
            const max = c.max_capacity ?? 0
            return (
              <div
                key={c.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="min-w-0">
                  <div className="font-bold text-slate-800">{c.title}</div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    {[c.coach, c.time, c.location].filter(Boolean).join(' · ') ||
                      '—'}
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    NT$ {Number(c.price ?? 0).toLocaleString()}　·　報名 {taken}/
                    {max}
                  </div>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => startEdit(c)}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                  >
                    編輯
                  </button>
                  <button
                    onClick={() => handleDelete(c)}
                    disabled={busyId === c.id}
                    className="rounded-lg border border-rose-200 bg-white px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 disabled:opacity-50"
                  >
                    刪除
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

const inputCls =
  'w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-600">
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </span>
      {children}
    </label>
  )
}
