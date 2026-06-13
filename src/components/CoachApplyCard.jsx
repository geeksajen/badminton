import { useState } from 'react'
import { Link } from 'react-router-dom'
import { doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../contexts/AuthContext'
import { COACH_STATUS } from '../config'

// 「成為教練」卡片：放在個人專區，依使用者目前的 coach_status 顯示不同內容。
// 系統管理員不顯示此卡片（他們本來就是最高權限）。
export default function CoachApplyCard() {
  const { user, profile, isSystemAdmin, refreshProfile } = useAuth()
  const [reason, setReason] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  if (isSystemAdmin) return null // 系統管理員不需要申請
  if (!user) return null

  const status = profile?.coach_status || COACH_STATUS.NONE

  // 送出 / 撤回申請：只動 users/{uid} 自己的文件，受 Firestore 規則保護
  // （學員只能在 none ↔ pending 之間切換，無法自我核准成 approved）。
  const submitApply = async () => {
    setBusy(true)
    setError('')
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        coach_status: COACH_STATUS.PENDING,
        apply_reason: reason.trim(),
        applied_at: serverTimestamp(),
      })
      await refreshProfile()
      setShowForm(false)
      setReason('')
    } catch (err) {
      console.error(err)
      setError('送出失敗，請確認 firestore.rules 已發佈後再試。')
    } finally {
      setBusy(false)
    }
  }

  const withdraw = async () => {
    setBusy(true)
    setError('')
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        coach_status: COACH_STATUS.NONE,
      })
      await refreshProfile()
    } catch (err) {
      console.error(err)
      setError('操作失敗，請稍後再試。')
    } finally {
      setBusy(false)
    }
  }

  // ── approved：已是教練 ──
  if (status === COACH_STATUS.APPROVED) {
    return (
      <Card tone="brand">
        <Header
          icon="🎉"
          title="你已經是教練了！"
          desc="可以前往教練後台管理課程與報名。"
        />
        <Link
          to="/admin"
          className="mt-3 inline-block rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          前往教練後台
        </Link>
      </Card>
    )
  }

  // ── pending：審核中 ──
  if (status === COACH_STATUS.PENDING) {
    return (
      <Card tone="amber">
        <Header
          icon="⏳"
          title="教練申請審核中"
          desc="已送出申請，請等待系統管理員審核。核准後即可使用教練後台。"
        />
        {error && <ErrorText>{error}</ErrorText>}
        <button
          onClick={withdraw}
          disabled={busy}
          className="mt-3 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
        >
          撤回申請
        </button>
      </Card>
    )
  }

  // ── none / rejected / suspended：可（重新）申請 ──
  const isRejected = status === COACH_STATUS.REJECTED
  const isSuspended = status === COACH_STATUS.SUSPENDED

  return (
    <Card tone="slate">
      <Header
        icon="🧑‍🏫"
        title={
          isSuspended
            ? '教練資格已停權'
            : isRejected
              ? '教練申請未通過'
              : '想成為教練嗎？'
        }
        desc={
          isSuspended
            ? '你的教練資格已被系統管理員停權，如有疑問請聯繫管理員，或重新提出申請。'
            : isRejected
              ? '你先前的申請未通過，可以補充說明後重新申請。'
              : '成為教練後可建立課程、管理學員報名與確認收款。送出申請後由系統管理員審核。'
        }
      />
      {profile?.review_note && (isRejected || isSuspended) && (
        <p className="mt-2 rounded-lg bg-white/70 px-3 py-2 text-xs text-slate-500">
          管理員備註：{profile.review_note}
        </p>
      )}
      {error && <ErrorText>{error}</ErrorText>}

      {showForm ? (
        <div className="mt-3">
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            placeholder="簡單說明你的教學經驗 / 專長 / 聯絡方式（選填，幫助管理員審核）"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
          />
          <div className="mt-2 flex gap-2">
            <button
              onClick={submitApply}
              disabled={busy}
              className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:opacity-50"
            >
              {busy ? '送出中…' : '送出申請'}
            </button>
            <button
              onClick={() => {
                setShowForm(false)
                setError('')
              }}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              取消
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="mt-3 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          {isRejected || isSuspended ? '重新申請成為教練' : '申請成為教練'}
        </button>
      )}
    </Card>
  )
}

const TONES = {
  brand: 'border-brand-200 bg-brand-50',
  amber: 'border-amber-200 bg-amber-50',
  slate: 'border-slate-200 bg-slate-50',
}

function Card({ tone, children }) {
  return (
    <div className={'mb-5 rounded-2xl border p-5 ' + (TONES[tone] || TONES.slate)}>
      {children}
    </div>
  )
}

function Header({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="mt-0.5 text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  )
}

function ErrorText({ children }) {
  return (
    <p className="mt-2 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
      {children}
    </p>
  )
}
