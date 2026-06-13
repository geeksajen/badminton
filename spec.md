# 角色定位
你是一位精通 React (Vite)、Tailwind CSS 和 Firebase v9+ 的資深全端工程師。你非常擅長在嚴格的「$0 預算限制」下，打造出效能優化、可直接上線（Production-ready）的網頁應用程式。

# 開發目標
建立一個「羽球課程線上報名系統」。此系統必須具備完整功能、安全性，並準備好部署至 GitHub Pages（前端）且成功連接 Firebase Spark Plan（後端/資料庫）。

# 嚴格限制（$0 成本與額度防護）
1. **靜態託管**：前端必須是使用 Vite 建立的 React 單頁應用程式（SPA），並能部署到 GitHub Pages。必要時請使用 HashRouter 以防止重新整理網頁時出現 404 錯誤。
2. **無雲端函式**：絕對不可使用 Firebase Cloud Functions 或任何付費功能。所有商業邏輯必須完全在前端透過 Firebase SDK 處理。
3. **Firestore 額度最佳化（至關重要）**：必須極大化利用每天 5 萬次的免費讀取額度。
   - 針對「課程列表」實作 LocalStorage 暫存機制。將課程資料暫存 1 小時，避免使用者在重新整理網頁或切換頁面時，重複向 Firestore 發送讀取請求。
   - 課程列表不要使用即時監聽（onSnapshot），請使用單次讀取（getDocs）。
   - 只有當使用者真正按下「我要報名」的那一刻，才去讀取並確認當下的剩餘名額。
4. **防範無窮迴圈**：確保所有負責從 Firestore 抓取資料的 useEffect 都有正確設定依賴陣列（Dependency Array），絕對要防止因程式碼寫錯產生的無窮迴圈而燒光當天免費額度。

# 必要功能與網頁畫面
1. **導覽列（Navbar）**：顯示系統名稱、首頁連結、個人專區連結（登入後顯示），以及登入/登出按鈕。
2. **首頁（課程列表）**：
   - 從 Firestore 抓取課程（需包含上述的 LocalStorage 暫存邏輯）。
   - 用乾淨的卡片樣式呈現課程資訊（名稱、教練、時間、學費、剩餘名額）。
   - 每堂課都有「我要報名」按鈕。若用戶未登入，點擊後導向登入頁；若名額已滿，則禁用（disable）該按鈕。
3. **登入 / 註冊頁**：
   - 乾淨簡單的表單，使用 Firebase Authentication（Email/密碼）| Google 登入功能。
   - 可流暢地在「登入」與「註冊」切換。
4. **個人專區（Dashboard）**：
   - 僅限已登入的會員進入。
   - 顯示該會員目前報名的所有課程列表與目前的審核狀態（例如：待繳費 / 已確認）。
   - 包含一個簡單的操作按鈕（例如：「通知已匯款」或「取消報名」），點擊後會直接更新該筆報名文件的狀態欄位。
   - 頂部顯示報名統計摘要（進行中 / 待繳費 / 已確認）。
5. **教練後台（Admin / 教練專區，`/admin`）**：
   - 僅限「管理員 Email 白名單」內的帳號可進入。採**前後端雙重把關**：前端 `src/config.js` 的 `ADMIN_EMAILS` 控制畫面，Firestore Rules 的 `isAdmin()` 以 `request.auth.token.email` 控制資料庫權限（純 Spark 免費方案，不需 Cloud Functions）。兩份名單必須一致。
   - **報名管理分頁**：一覽所有學員報名，可依狀態（進行中 / 待繳費 / 已確認 / 已取消）篩選與關鍵字搜尋；「確認收款 / 退回待繳費」一鍵更新狀態；上方統計卡片；「匯出 CSV」把目前篩選結果輸出成 UTF-8(BOM) 檔，Excel 可直接開。
   - **課程管理分頁**：直接在網頁新增 / 編輯 / 刪除課程，無需再進 Firebase 後台或跑 seed 腳本；含驗證（學費 ≥ 0、名額為正整數、編輯時名額上限不可低於目前已報名人數）。

# 額外實作的增強功能（在基本需求之上）
- **首頁**：Hero 橫幅、課程搜尋（課名 / 教練 / 地點）與「只看尚有名額」篩選（純前端，不額外讀 Firestore）、報名進度條、已報名課程按鈕顯示「✓ 已報名 · 查看」並導向個人專區。
- **重新報名**：取消後的課程可再次報名（交易偵測既有文件為 cancelled 時改用 update 重新啟用，名額同步 +1）。
- **安全性強化**：學員只能把自己報名的 `status` 改為 `pending` / `cancelled`，**無法自行設為 `confirmed`**（只有教練能確認收款）；建立報名時強制 `status='pending'`、`payment_notified=false`；`user_id` / `course_id` 不可竄改。

# 🚀 部署上線步驟（完成專案實作後請務必提供）

完成專案實作之後，請寫出「如何部署到 GitHub Pages 及 Firebase」的具體步驟。請假我是不懂系統開發的路人，每一步都要寫得非常白話、附上要點選的按鈕與輸入的指令，並包含以下內容：

1. **Firebase 後端設定**：
   - 如何在 Firebase 官網建立一個免費（Spark Plan）專案。
   - 如何開啟 Authentication 的「Email/密碼」登入方式。
   - 如何建立 Firestore Database，並建立 `courses`、`registrations` 兩個集合。
   - 如何在 Firebase 取得專案的設定金鑰（apiKey 等），並填入 `.env.local`。
   - 提供一份安全的 Firestore 安全規則（Security Rules），確保只有登入者能報名、且只能修改自己的報名資料。**規則內容以專案根目錄的 `firestore.rules` 為準**，每次更新後都要到 Firebase Console → Firestore → 規則重新貼上並發佈。
   - **設定教練（管理員）**：把教練的登入 Email 同時填入 `src/config.js` 的 `ADMIN_EMAILS` 與 `firestore.rules` 的 `isAdmin()`，兩處需一致；改完要重新 `npm run deploy` 並重新發佈規則。
2. **GitHub Pages 前端部署**：
   - 如何在 GitHub 建立一個新的儲存庫（Repository）並上傳程式碼。
   - 需要安裝/設定哪些套件（例如 `gh-pages`）、`vite.config.js` 的 `base` 設定該怎麼填。
   - 完整的部署指令（例如 `npm run build` 與 `npm run deploy`）。
   - 如何在 GitHub 設定中開啟 Pages，以及部署完成後「報名網址」會長什麼樣子、要去哪裡找到它。
3. **上線後檢查**：列出一份簡單的檢查清單，確認網站可以正常開啟、能註冊、能報名、且不會超出免費額度。