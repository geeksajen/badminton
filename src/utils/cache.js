// LocalStorage 暫存工具：把課程列表存 1 小時，
// 避免使用者重新整理 / 切換頁面時重複向 Firestore 讀取，節省免費額度。

const ONE_HOUR_MS = 60 * 60 * 1000

export function readCache(key, maxAgeMs = ONE_HOUR_MS) {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const { timestamp, data } = JSON.parse(raw)
    if (!timestamp || Date.now() - timestamp > maxAgeMs) {
      localStorage.removeItem(key)
      return null
    }
    return data
  } catch {
    return null
  }
}

export function writeCache(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data }))
  } catch {
    // 容量滿或隱私模式時忽略，不影響功能
  }
}

export function clearCache(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    /* noop */
  }
}

export const COURSES_CACHE_KEY = 'badminton_courses_cache_v1'

// 「我報名過哪些課」的快取 key（每位使用者一份）。
// 讓首頁能標示已報名的課程，又不必每次進首頁都查 Firestore。
export function myRegsCacheKey(uid) {
  return `badminton_my_regs_cache_v1_${uid}`
}
