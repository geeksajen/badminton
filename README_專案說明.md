# 羽球課程線上報名系統

以 **$0 成本**打造、可直接上線的羽球課程報名 SPA。
前端部署於 **GitHub Pages**，後端使用 **Firebase Spark（免費方案）**。

> 📖 不懂程式？請直接看 **[DEPLOY.md](./DEPLOY.md)**，裡面有給教練的白話上線步驟。

## 技術棧
- React 18 + Vite 5（SPA，使用 `HashRouter` 避免 GitHub Pages 重新整理 404）
- Tailwind CSS 3
- Firebase v10（Authentication：Email/密碼；Firestore）
- gh-pages 一鍵部署

## 快速開始
```bash
npm install
cp .env.example .env.local   # 填入 Firebase 金鑰（Windows 用：copy .env.example .env.local）
npm run seed                 # 一鍵建立 courses/registrations 集合與範例課程（需 serviceAccountKey.json）
npm run dev                  # 本機開發
npm run build                # 打包
npm run deploy               # 部署到 GitHub Pages
```

> `npm run seed` 使用 firebase-admin + 服務帳戶金鑰（`serviceAccountKey.json`，已 gitignore）寫入資料，
> **防呆**：課程已存在即跳過，不覆蓋既有名額；不需放寬安全規則，課程仍維持後台/腳本專屬寫入。
> 課程清單可在 [scripts/seed.mjs](./scripts/seed.mjs) 的 `COURSES` 編輯。

## 省 Firestore 額度的設計（對應規格需求）
- 課程列表：**LocalStorage 暫存 1 小時** + **單次 `getDocs`**（非 `onSnapshot`）。
- 報名/取消後主動清除暫存，確保名額顯示最新。
- 只在使用者**按下報名的當下**，於 `runTransaction` 中讀取並確認剩餘名額（原子操作，防超賣）。
- 所有抓資料的 `useEffect` 都用 `useCallback` 穩定依賴，杜絕無窮迴圈狂讀額度。
- 個人專區用 `where(user_id == 我)` + client 端排序，避免建立複合索引。

## 資料結構
- `courses`：`title, coach, location, time, price, max_capacity, current_registrations`
- `registrations`（文件 ID = `{uid}_{courseId}`）：
  `registration_id, user_id, user_name, user_email, course_id, course_title, status, payment_notified, created_at`
  - `status`：`pending`（待繳費）/ `confirmed`（已確認，由教練在後台設定）/ `cancelled`（已取消）

## 安全規則
見 **[firestore.rules](./firestore.rules)**：課程人人可讀、前端僅能改 `current_registrations`；
報名紀錄只有本人能讀寫，文件 ID 強制綁定本人 uid。

## 專案結構
```
src/
  firebase/config.js        # Firebase 初始化（讀取 .env.local）
  contexts/AuthContext.jsx  # 登入狀態（onAuthStateChanged 只訂閱一次）
  components/
    Navbar.jsx
    CourseCard.jsx
    ProtectedRoute.jsx      # 個人專區守門
  pages/
    Home.jsx                # 課程列表 + 暫存 + 報名交易
    Login.jsx               # 登入/註冊切換
    Dashboard.jsx           # 我的報名 + 通知匯款 / 取消
  utils/cache.js            # LocalStorage 暫存工具
```
