import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  collection,
  doc,
  getDocs,
  query,
  runTransaction,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../contexts/AuthContext'
import { COURSES_CACHE_KEY, clearCache } from '../utils/cache'

const STATUS_META = {
  pending: { label: '待繳費', cls: 'bg-amber-100 text-amber-700' },
  confirmed: { label: '已確認', cls: 'bg-brand-100 text-brand-700' },
  cancelled: { label: '已取消', cls: 'bg-slate-200 text-slate-500' },
}

export default function Dashboard() {
  const { user } = useAuth()
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [busyId, setBusyId] = useState(null)

  // 查詢「我的」報名紀錄：用 where(user_id == 我) 一次撈出，client 端排序，
  // 避免需要建立 Firestore 複合索引。依賴 user.uid，登入者變動才重抓，不會無窮迴圈。
  const loadMyRegistrations = useCallback(async () => {
    if (!user) return
    setLoading(true)
    setError('')
    try {
      const q = query(
        collection(db, 'registrations'),
        where('user_id', '==', user.uid),
      )
      const snap = await getDocs(q)
      const list = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (b.created_at?.seconds ?? 0) - (a.created_at?.seconds ?? 0))
      setRegistrations(list)
    } catch (err) {
      console.error(err)
      setError('載入報名紀錄失敗，請稍後再試。')
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    loadMyRegistrations()
  }, [loadMyRegistrations])

  const handleNotifyPaid = async (reg) => {
    setBusyId(reg.id)
    try {
      await updateDoc(doc(db, 'registrations', reg.id), {
        payment_notified: true,
      })
      setRegistrations((prev) =>
        prev.map((r) =>
          r.id === reg.id ? { ...r, payment_notified: true } : r,
        ),
      )
    } catch (err) {
      console.error(err)
      alert('操作失敗，請稍後再試。')
    } finally {
      setBusyId(null)
    }
  }

  const handleCancel = async (reg) => {
    if (!window.confirm(`確定要取消「${reg.course_title}」的報名嗎？`)) return
    setBusyId(reg.id)
    try {
      // 用交易把報名標記為取消，同時把課程的已報名人數 -1（釋出名額）。
      await runTransaction(db, async (tx) => {
        const regRef = doc(db, 'registrations', reg.id)
        const courseRef = doc(db, 'courses', reg.course_id)

        const [regSnap, courseSnap] = await Promise.all([
          tx.get(regRef),
          tx.get(courseRef),
        ])

        if (!regSnap.exists() || regSnap.data().status === 'cancelled') {
          throw new Error('ALREADY_CANCELLED')
        }

        tx.update(regRef, { status: 'cancelled', payment_notified: false })

        if (courseSnap.exists()) {
          const current = courseSnap.data().current_registrations ?? 0
          tx.update(courseRef, {
            current_registrations: Math.max(0, current - 1),
          })
        }
      })

      setRegistrations((prev) =>
        prev.map((r) =>
          r.id === reg.id
            ? { ...r, status: 'cancelled', payment_notified: false }
            : r,
        ),
      )
      // 名額有變動，清掉首頁課程暫存，下次進首頁會看到最新名額。
      clearCache(COURSES_CACHE_KEY)
    } catch (err) {
      if (err.message === 'ALREADY_CANCELLED') {
        await loadMyRegistrations()
      } else {
        console.error(err)
        alert('取消失敗，請稍後再試。')
      }
    } finally {
      setBusyId(null)
    }
  }

  // 個人統計摘要：進行中（待繳費+已確認）、待繳費、已確認。
  const summary = useMemo(() => {
    const active = registrations.filter((r) => r.status !== 'cancelled')
    return {
      active: active.length,
      pending: active.filter((r) => r.status === 'pending').length,
      confirmed: active.filter((r) => r.status === 'confirmed').length,
    }
  }, [registrations])

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-slate-800">個人專區</h1>
        <p className="mt-1 text-sm text-slate-500">
          嗨，{user?.displayName || user?.email}！這裡是你報名的所有課程。
        </p>
      </div>

      {!loading && !error && registrations.length > 0 && (
        <div className="mb-5 grid grid-cols-3 gap-3">
          <SummaryChip label="進行中" value={summary.active} tone="slate" />
          <SummaryChip label="待繳費" value={summary.pending} tone="amber" />
          <SummaryChip label="已確認" value={summary.confirmed} tone="brand" />
        </div>
      )}

      {loading ? (
        <div className="flex h-48 items-center justify-center text-slate-400">
          載入中…
        </div>
      ) : error ? (
        <div className="rounded-xl bg-rose-50 px-4 py-6 text-center text-sm text-rose-700">
          {error}
        </div>
      ) : registrations.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-slate-500">
          你還沒有報名任何課程，快回首頁挑一堂吧！
        </div>
      ) : (
        <div className="space-y-3">
          {registrations.map((reg) => {
            const meta = STATUS_META[reg.status] || STATUS_META.pending
            const isCancelled = reg.status === 'cancelled'
            const isConfirmed = reg.status === 'confirmed'
            const busy = busyId === reg.id
            return (
              <div
                key={reg.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {reg.course_title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-400">
                      報名人：{reg.user_name}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        'rounded-full px-2.5 py-1 text-xs font-semibold ' +
                        meta.cls
                      }
                    >
                      {meta.label}
                    </span>
                    {reg.payment_notified && !isCancelled && !isConfirmed && (
                      <span className="rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
                        已通知匯款
                      </span>
                    )}
                  </div>
                </div>

                {!isCancelled && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {!isConfirmed && (
                      <button
                        onClick={() => handleNotifyPaid(reg)}
                        disabled={busy || reg.payment_notified}
                        className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
                      >
                        {reg.payment_notified ? '已通知匯款' : '通知已匯款'}
                      </button>
                    )}
                    <button
                      onClick={() => handleCancel(reg)}
                      disabled={busy}
                      className="rounded-xl border border-rose-200 bg-white px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50 disabled:opacity-50"
                    >
                      取消報名
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function SummaryChip({ label, value, tone }) {
  const tones = {
    slate: 'text-slate-800',
    amber: 'text-amber-600',
    brand: 'text-brand-600',
  }
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <div className={'text-2xl font-bold ' + (tones[tone] || tones.slate)}>
        {value}
      </div>
      <div className="mt-0.5 text-xs font-medium text-slate-400">{label}</div>
    </div>
  )
}
