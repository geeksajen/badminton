// 一鍵建立 / 初始化 Firestore 資料的種子腳本。
//
// 用途：自動建立 `courses`（含範例課程）與 `registrations` 集合，
//      讓你不用在 Firebase 後台一個一個欄位手動敲。
//
// 防呆設計：
//   - 課程用「固定文件 ID」判斷是否已存在；已存在就「跳過」，
//     不會重複建立，也「不會覆蓋」已經有人報名的名額（current_registrations）。
//   - registrations 會放一筆無害的 `_bootstrap` 文件讓集合出現，
//     它的 user_id 是 '__system__'，永遠不會出現在任何學員的個人專區。
//
// 執行方式：先放好 serviceAccountKey.json（見 DEPLOY.md 步驟 1-4），再執行：
//   npm run seed

import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore, FieldValue } from 'firebase-admin/firestore'

const __dirname = dirname(fileURLToPath(import.meta.url))
const keyPath = join(__dirname, '..', 'serviceAccountKey.json')

// ──────────────────────────────────────────────────────────────
// 👉 想改課程內容，直接編輯下面這個清單，存檔後重新 `npm run seed` 即可。
//    id 請保持唯一（英文/數字），它就是 Firestore 的文件 ID。
//    price / max_capacity 請填數字；current_registrations 由系統自動設為 0。
// ──────────────────────────────────────────────────────────────
const COURSES = [
  {
    id: 'course_001',
    title: '週六初階班',
    coach: '林教練',
    location: '中正運動中心 3 樓',
    time: '每週六 09:00–11:00',
    price: 1200,
    max_capacity: 12,
  },
  {
    id: 'course_002',
    title: '週日進階班',
    coach: '陳教練',
    location: '大安運動中心 羽球場 A',
    time: '每週日 14:00–16:00',
    price: 1500,
    max_capacity: 10,
  },
  {
    id: 'course_003',
    title: '平日夜間體驗班',
    coach: '王教練',
    location: '松山運動中心 2 樓',
    time: '每週三 19:00–21:00',
    price: 800,
    max_capacity: 16,
  },
]

function loadServiceAccount() {
  try {
    return JSON.parse(readFileSync(keyPath, 'utf8'))
  } catch {
    console.error('\n❌ 找不到或無法讀取 serviceAccountKey.json')
    console.error('   請依 DEPLOY.md 步驟 1-4：Firebase 後台 → 專案設定 →')
    console.error('   服務帳戶 Service accounts → 產生新的私密金鑰，')
    console.error('   並把下載的檔案改名為 serviceAccountKey.json 放到專案根目錄。\n')
    process.exit(1)
  }
}

async function main() {
  const serviceAccount = loadServiceAccount()
  initializeApp({ credential: cert(serviceAccount) })
  const db = getFirestore()

  console.log(`\n🏸 連線到專案：${serviceAccount.project_id}\n`)

  // ── 建立 / 確認課程 ──
  let created = 0
  let skipped = 0
  for (const course of COURSES) {
    const { id, ...data } = course
    const ref = db.collection('courses').doc(id)
    const snap = await ref.get()
    if (snap.exists) {
      skipped++
      console.log(`⏭️  已存在，跳過：${id}（${data.title}）`)
      continue
    }
    await ref.set({
      ...data,
      price: Number(data.price) || 0,
      max_capacity: Number(data.max_capacity) || 0,
      current_registrations: 0, // 新課程一律從 0 開始
    })
    created++
    console.log(`✅ 已建立課程：${id}（${data.title}）`)
  }

  // ── 確認 registrations 集合存在（放一筆系統用、學員看不到的文件）──
  const bootRef = db.collection('registrations').doc('_bootstrap')
  const bootSnap = await bootRef.get()
  if (!bootSnap.exists) {
    await bootRef.set({
      registration_id: '_bootstrap',
      user_id: '__system__', // 不屬於任何真實會員，永遠不會被學員查到
      user_name: 'system',
      user_email: '',
      course_id: '',
      course_title: '',
      status: 'cancelled',
      payment_notified: false,
      created_at: FieldValue.serverTimestamp(),
      note: '此為系統初始化文件，可保留不刪。',
    })
    console.log('✅ 已初始化 registrations 集合')
  } else {
    console.log('⏭️  registrations 集合已存在，跳過')
  }

  console.log(
    `\n🎉 完成！新建 ${created} 堂課，跳過 ${skipped} 堂（已存在）。\n` +
      '   現在可以執行 npm run dev 看課程，或 npm run deploy 上線。\n',
  )
  process.exit(0)
}

main().catch((err) => {
  console.error('\n❌ 種子腳本執行失敗：', err.message)
  process.exit(1)
})
