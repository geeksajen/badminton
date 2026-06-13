import { useCallback, useEffect, useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../contexts/AuthContext'
import CourseManager from '../components/CourseManager'
import CoachReview from '../components/CoachReview'

const STATUS_META = {
  pending: { label: '待繳費', cls: 'bg-amber-100 text-amber-700' },
  confirmed: { label: '已確認', cls: 'bg-brand-100 text-brand-700' },
  cancelled: { label: '已取消', cls: 'bg-slate-200 text-slate-500' },
}

const FILTERS = [
  { key: 'active', label: '進行中' },
  { key: 'pending', label: '待繳費' },
  { key: 'confirmed', label: '已確認' },
  { key: 'cancelled', label: '已取消' },
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

const STATUS_LABEL = { pending: '待繳費', confirmed: '已確認', cancelled: '已取消' }

// 把一個欄位值安全地包成 CSV（處理逗號、引號、換行）。
function csvCell(v) {
  const s = String(v ?? '')
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

// 依目前篩選結果產生 CSV 並觸發下載（純前端，不需後端）。
function exportCsv(rows) {
  const header = ['姓名', 'Email', '課程', '狀態', '已通知匯款', '報名時間']
  const lines = rows.map((r) =>
    [
      r.user_name,
      r.user_email,
      r.course_title,
      STATUS_LABEL[r.status] || r.status,
      r.payment_notified ? '是' : '否',
      fmtDate(r.created_at),
    ]
      .map(csvCell)
      .join(','),
  )
  // 加 BOM 讓 Excel 正確辨識 UTF-8 中文。
  const blob = new Blob(['﻿' + [header.join(','), ...lines].join('\r\n')], {
    type: 'text/csv;charset=utf-8;',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  const today = new Date().toISOString().slice(0, 10)
  a.href = url
  a.download = `報名名單_${today}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export default function Admin() {
  const { loading: authLoading, profileLoading, isStaff, isSystemAdmin } = useAuth()
  const [regs, setRegs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [busyId, setBusyId] = useState(null)
  const [filter, setFilter] = useState('active')
  const [search, setSearch] = useState('')
  const [tab, setTab] = useState('regs') // 'regs' | 'courses' | 'review'

  // 教練一次撈出全部報名紀錄（教練 / 系統管理員專用，受 Firestore Rules isStaff() 保護）。
  // 過濾掉系統初始化用的 _bootstrap 文件。依賴 isStaff，身分變動才重抓。
  const loadAll = useCallback(async () => {
    if (!isStaff) return
    setLoading(true)
    setError('')
    try {
      const snap = await getDocs(collection(db, 'registrations'))
      const list = snap.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .filter((r) => r.user_id !== '__system__' && r.id !== '_bootstrap')
        .sort(
          (a, b) => (b.created_at?.seconds ?? 0) - (a.created_at?.seconds ?? 0),
        )
      setRegs(list)
    } catch (err) {
      console.error(err)
      setError('載入報名資料失敗，請確認你是教練 / 系統管理員，且 Firestore 規則已更新。')
    } finally {
      setLoading(false)
    }
  }, [isStaff])

  useEffect(() => {
    loadAll()
  }, [loadAll])

  const setStatus = async (reg, status) => {
    setBusyId(reg.id)
    try {
      await updateDoc(doc(db, 'registrations', reg.id), { status })
      setRegs((prev) =>
        prev.map((r) => (r.id === reg.id ? { ...r, status } : r)),
      )
    } catch (err) {
      console.error(err)
      alert('更新失敗，請稍後再試。')
    } finally {
      setBusyId(null)
    }
  }

  // 統計：總報名（不含取消）、待繳費、已確認、預估收款。
  const stats = useMemo(() => {
    const active = regs.filter((r) => r.status !== 'cancelled')
    return {
      total: active.length,
      pending: active.filter((r) => r.status === 'pending').length,
      confirmed: active.filter((r) => r.status === 'confirmed').length,
      cancelled: regs.filter((r) => r.status === 'cancelled').length,
      paidNotified: active.filter(
        (r) => r.status === 'pending' && r.payment_notified,
      ).length,
    }
  }, [regs])

  // 套用篩選器 + 搜尋（課程名 / 姓名 / Email）。
  const visible = useMemo(() => {
    const kw = search.trim().toLowerCase()
    return regs.filter((r) => {
      if (filter === 'active' && r.status === 'cancelled') return false
      if (filter !== 'active' && filter !== 'all' && r.status !== filter)
        return false
      if (!kw) return true
      return (
        (r.course_title || '').toLowerCase().includes(kw) ||
        (r.user_name || '').toLowerCase().includes(kw) ||
        (r.user_email || '').toLowerCase().includes(kw)
      )
    })
  }, [regs, filter, search])

  // 等驗證狀態與角色都載入完，再決定是否放行（避免一進來就誤判導走）。
  if (authLoading || profileLoading) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        載入中…
      </div>
    )
  }
  // 非教練 / 系統管理員直接導回首頁（前端擋一層，資料庫規則再擋一層）。
  if (!isStaff) return <Navigate to="/" replace />

  return (
    <div>
      <div className="mb-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-white">
          🧑‍🏫 教練後台
        </div>
        <h1 className="mt-2 text-2xl font-bold text-slate-800">
          {tab === 'regs' ? '報名管理' : tab === 'courses' ? '課程管理' : '教練審核'}
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          {tab === 'regs'
            ? '確認學員繳費狀態、掌握各課程報名概況。'
            : tab === 'courses'
              ? '新增、編輯或刪除課程，學員首頁即時同步。'
              : '審核教練申請，可核准、拒絕或停權。（僅系統管理員）'}
        </p>
      </div>

      {/* 分頁切換（教練審核僅系統管理員可見） */}
      <div className="mb-5 inline-flex rounded-xl bg-slate-100 p-1">
        {[
          { key: 'regs', label: '報名管理' },
          { key: 'courses', label: '課程管理' },
          ...(isSystemAdmin ? [{ key: 'review', label: '教練審核' }] : []),
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={
              'rounded-lg px-4 py-1.5 text-sm font-semibold transition ' +
              (tab === t.key
                ? 'bg-white text-slate-800 shadow-sm'
                : 'text-slate-500 hover:text-slate-700')
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'courses' ? (
        <CourseManager />
      ) : tab === 'review' ? (
        <CoachReview />
      ) : (
        <>
      {/* 統計卡片 */}
      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="有效報名" value={stats.total} tone="slate" />
        <StatCard
          label="待繳費"
          value={stats.pending}
          tone="amber"
          hint={stats.paidNotified ? `${stats.paidNotified} 筆已通知匯款` : ''}
        />
        <StatCard label="已確認" value={stats.confirmed} tone="brand" />
        <StatCard label="已取消" value={stats.cancelled} tone="rose" />
      </div>

      {/* 篩選 + 搜尋 + 重新整理 */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜尋課程 / 姓名 / Email"
            className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 sm:w-56"
          />
          <button
            onClick={() => exportCsv(visible)}
            disabled={visible.length === 0}
            title="把目前篩選結果匯出成 CSV"
            className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50"
          >
            匯出 CSV
          </button>
          <button
            onClick={loadAll}
            className="shrink-0 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-50"
          >
            重新整理
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex h-48 items-center justify-center text-slate-400">
          載入報名資料中…
        </div>
      ) : error ? (
        <div className="rounded-xl bg-rose-50 px-4 py-6 text-center text-sm text-rose-700">
          {error}
        </div>
      ) : visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-slate-500">
          這個條件下沒有報名資料。
        </div>
      ) : (
        <>
          {/* 桌機：表格 */}
          <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white sm:block">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3 font-semibold">學員</th>
                  <th className="px-4 py-3 font-semibold">課程</th>
                  <th className="px-4 py-3 font-semibold">報名時間</th>
                  <th className="px-4 py-3 font-semibold">狀態</th>
                  <th className="px-4 py-3 text-right font-semibold">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {visible.map((reg) => (
                  <tr key={reg.id} className="hover:bg-slate-50/60">
                    <td className="px-4 py-3">
                      <div className="font-medium text-slate-800">
                        {reg.user_name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {reg.user_email}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      {reg.course_title}
                    </td>
                    <td className="px-4 py-3 text-xs text-slate-500">
                      {fmtDate(reg.created_at)}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge reg={reg} />
                    </td>
                    <td className="px-4 py-3">
                      <RowActions
                        reg={reg}
                        busy={busyId === reg.id}
                        onSet={setStatus}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 手機：卡片 */}
          <div className="space-y-3 sm:hidden">
            {visible.map((reg) => (
              <div
                key={reg.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-slate-800">
                      {reg.user_name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {reg.user_email}
                    </div>
                  </div>
                  <StatusBadge reg={reg} />
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {reg.course_title}
                </div>
                <div className="mt-0.5 text-xs text-slate-400">
                  {fmtDate(reg.created_at)}
                </div>
                <div className="mt-3">
                  <RowActions
                    reg={reg}
                    busy={busyId === reg.id}
                    onSet={setStatus}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
        </>
      )}
    </div>
  )
}

function StatCard({ label, value, tone, hint }) {
  const tones = {
    slate: 'text-slate-800',
    amber: 'text-amber-600',
    brand: 'text-brand-600',
    rose: 'text-rose-500',
  }
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-medium text-slate-400">{label}</div>
      <div className={'mt-1 text-2xl font-bold ' + (tones[tone] || tones.slate)}>
        {value}
      </div>
      {hint && <div className="mt-0.5 text-[11px] text-sky-600">{hint}</div>}
    </div>
  )
}

function StatusBadge({ reg }) {
  const meta = STATUS_META[reg.status] || STATUS_META.pending
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span
        className={'rounded-full px-2.5 py-1 text-xs font-semibold ' + meta.cls}
      >
        {meta.label}
      </span>
      {reg.payment_notified && reg.status === 'pending' && (
        <span className="rounded-full bg-sky-100 px-2 py-1 text-[11px] font-semibold text-sky-700">
          已通知匯款
        </span>
      )}
    </div>
  )
}

function RowActions({ reg, busy, onSet }) {
  if (reg.status === 'cancelled') {
    return <span className="text-xs text-slate-400">—</span>
  }
  return (
    <div className="flex flex-wrap justify-end gap-2">
      {reg.status === 'pending' ? (
        <button
          onClick={() => onSet(reg, 'confirmed')}
          disabled={busy}
          className="rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
        >
          確認收款
        </button>
      ) : (
        <button
          onClick={() => onSet(reg, 'pending')}
          disabled={busy}
          className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
        >
          退回待繳費
        </button>
      )}
    </div>
  )
}
