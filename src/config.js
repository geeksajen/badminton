// ──────────────────────────────────────────────────────────────
// 全站設定（前端公開常數）與角色定義
// ──────────────────────────────────────────────────────────────

// 系統管理員的 Email 白名單（最高權限，不可被申請 / 停權）。
// 用這些 Email 登入就是「系統管理員」，可審核 / 核准 / 停權教練。
//
// ⚠️ 這份名單必須和 firestore.rules 裡 isSystemAdmin() 的 Email 完全一致。
export const SYSTEM_ADMIN_EMAILS = [
  'geeks.ajen@gmail.com',
]

// 是不是「系統管理員」（依 Email 判定，與資料庫無關）。
export function isSystemAdmin(user) {
  if (!user?.email) return false
  return SYSTEM_ADMIN_EMAILS.includes(user.email.toLowerCase())
}

// ── 教練申請狀態 ──────────────────────────────────────────────
// none      尚未申請（一般使用者）
// pending   已送出申請，等待系統管理員審核
// approved  已核准 → 即為「教練」
// rejected  申請遭拒（可重新申請）
// suspended 教練資格被停權（可重新申請）
export const COACH_STATUS = {
  NONE: 'none',
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  SUSPENDED: 'suspended',
}

export const COACH_STATUS_META = {
  none: { label: '一般使用者', cls: 'bg-slate-100 text-slate-600' },
  pending: { label: '審核中', cls: 'bg-amber-100 text-amber-700' },
  approved: { label: '教練', cls: 'bg-brand-100 text-brand-700' },
  rejected: { label: '未通過', cls: 'bg-rose-100 text-rose-700' },
  suspended: { label: '已停權', cls: 'bg-slate-200 text-slate-500' },
}

// 由「使用者 + 其 profile」推算顯示用的角色標籤。
export function roleLabel(user, profile) {
  if (isSystemAdmin(user)) return '系統管理員'
  if (profile?.coach_status === COACH_STATUS.APPROVED) return '教練'
  return '一般使用者'
}
