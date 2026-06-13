import { useCallback, useEffect, useMemo, useState } from 'react'
import { collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { COACH_STATUS, COACH_STATUS_META } from '../config'

const FILTERS = [
  { key: 'pending', label: '待審核' },
  { key: 'approved', label: '教練' },
  { key: 'suspended', label: '已停權' },
  { key: 'rejected', label: '未通過' },
  { key: 'all', label: '全部' },
]

function fmtDate(ts) {
  if (!ts?.seconds) return '—'
  const d = new Date(ts.seconds * 1000)
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(
    d.getDate(),
  ).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(
    d.getMinutes(),
  ).padStart(2, '0')}`
}

// 系統管理員專用：審核教練申請（核准 / 拒絕 / 停權 / 恢復）。
export default function CoachReview() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [busyId, setBusyId] = useState(null)
  const [filter, setFilter] = useState('pending')

  const loadUsers = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const snap = await getDocs(collection(db, 'users'))
      const list = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        // 只關心有申請紀錄 / 已是教練的人，過濾掉純一般使用者，畫面才不會被洗版。
        .filter((u) => (u.coach_status || 'none') !== 'none')
        .sort(
          (a, b) =>
            (b.applied_at?.seconds ?? 0) - (a.applied_at?.seconds ?? 0),
        )
      setUsers(list)
    } catch (err) {
      console.error(err)
      setError('載入失敗，請確認你是系統管理員，且 firestore.rules 已發佈。')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadUsers()
  }, [loadUsers])

  const setStatus = async (u, status, note) => {
    setBusyId(u.id)
    try {
      const patch = { coach_status: status, reviewed_at: serverTimestamp() }
      if (note !== undefined) patch.review_note = note
      await updateDoc(doc(db, 'users', u.id), patch)
      setUsers((prev) =>
        prev.map((x) =>
          x.id === u.id ? { ...x, coach_status: status, review_note: note ?? x.review_note } : x,
        ),
      )
    } catch (err) {
      console.error(err)
      alert('更新失敗，請稍後再試。')
    } finally {
      setBusyId(null)
    }
  }

  const reject = (u) => {
    const note = window.prompt('拒絕原因（選填，會顯示給申請者）：', '') ?? ''
    setStatus(u, COACH_STATUS.REJECTED, note)
  }
  const suspend = (u) => {
    if (!window.confirm(`確定要停權教練「${u.display_name || u.email}」嗎？`)) return
    const note = window.prompt('停權原因（選填，會顯示給對方）：', '') ?? ''
    setStatus(u, COACH_STATUS.SUSPENDED, note)
  }

  const pendingCount = useMemo(
    () => users.filter((u) => u.coach_status === COACH_STATUS.PENDING).length,
    [users],
  )

  const visible = useMemo(
    () =>
      filter === 'all'
        ? users
        : users.filter((u) => u.coach_status === filter),
    [users, filter],
  )

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={
                'rounded-full px-3 py-1.5 text-xs font-semibold transition ' +
                (filter === f.key
                  ? 'bg-brand-600 text-white'
                  : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50')
              }
            >
              {f.label}
              {f.key === 'pending' && pendingCount > 0 && (
                <span className="ml-1 rounded-full bg-rose-500 px-1.5 text-[10px] text-white">
                  {pendingCount}
                </span>
              )}
            </button>
          ))}
        </div>
        <button
          onClick={loadUsers}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          重新整理
        </button>
      </div>

      {loading ? (
        <div className="flex h-32 items-center justify-center text-slate-400">
          載入中…
        </div>
      ) : error ? (
        <div className="rounded-xl bg-rose-50 px-4 py-6 text-center text-sm text-rose-700">
          {error}
        </div>
      ) : visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-10 text-center text-slate-500">
          {filter === 'pending'
            ? '目前沒有待審核的教練申請。'
            : '這個條件下沒有資料。'}
        </div>
      ) : (
        <div className="space-y-3">
          {visible.map((u) => {
            const meta = COACH_STATUS_META[u.coach_status] || COACH_STATUS_META.none
            const busy = busyId === u.id
            return (
              <div
                key={u.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">
                        {u.display_name || '（未填姓名）'}
                      </span>
                      <span
                        className={
                          'rounded-full px-2 py-0.5 text-[11px] font-semibold ' +
                          meta.cls
                        }
                      >
                        {meta.label}
                      </span>
                    </div>
                    <div className="mt-0.5 text-xs text-slate-400">{u.email}</div>
                    {u.apply_reason && (
                      <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
                        {u.apply_reason}
                      </p>
                    )}
                    {u.applied_at && (
                      <div className="mt-1 text-[11px] text-slate-400">
                        申請時間：{fmtDate(u.applied_at)}
                      </div>
                    )}
                  </div>

                  <div className="flex shrink-0 flex-wrap gap-2">
                    {u.coach_status === COACH_STATUS.PENDING && (
                      <>
                        <button
                          onClick={() =>
                            setStatus(u, COACH_STATUS.APPROVED, '')
                          }
                          disabled={busy}
                          className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
                        >
                          核准
                        </button>
                        <button
                          onClick={() => reject(u)}
                          disabled={busy}
                          className="rounded-lg border border-rose-200 bg-white px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 disabled:opacity-50"
                        >
                          拒絕
                        </button>
                      </>
                    )}
                    {u.coach_status === COACH_STATUS.APPROVED && (
                      <button
                        onClick={() => suspend(u)}
                        disabled={busy}
                        className="rounded-lg border border-rose-200 bg-white px-3 py-1.5 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 disabled:opacity-50"
                      >
                        停權
                      </button>
                    )}
                    {(u.coach_status === COACH_STATUS.SUSPENDED ||
                      u.coach_status === COACH_STATUS.REJECTED) && (
                      <button
                        onClick={() => setStatus(u, COACH_STATUS.APPROVED, '')}
                        disabled={busy}
                        className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
                      >
                        {u.coach_status === COACH_STATUS.SUSPENDED
                          ? '恢復教練'
                          : '改為核准'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
