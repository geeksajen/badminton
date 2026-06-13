// ──────────────────────────────────────────────────────────────
// 全站設定（前端公開常數）
// ──────────────────────────────────────────────────────────────

// 教練 / 管理員的 Email 白名單。
// 用這些 Email 登入（Google 或 Email/密碼皆可）就會自動取得「教練後台」權限，
// 可以看到所有學員的報名、確認收款。
//
// ⚠️ 這份名單必須和 firestore.rules 裡 isAdmin() 的 Email 完全一致，
//    否則前端看得到按鈕，但實際寫入會被資料庫規則擋下。
export const ADMIN_EMAILS = [
  'geeks.ajen@gmail.com',
]

// 判斷某位登入者是不是教練 / 管理員。
export function isAdmin(user) {
  if (!user?.email) return false
  return ADMIN_EMAILS.includes(user.email.toLowerCase())
}
