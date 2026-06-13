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

# 三種角色與權限模型
| 能力 | 一般使用者 | 教練 | 系統管理員 |
|---|:--:|:--:|:--:|
| 瀏覽 / 報名課程 | ✅ | ✅ | ✅ |
| 申請 / 管理教練申請 | ✅ | — | — |
| 課程管理（新增/編輯/刪除） | — | ✅ | ✅ |
| 報名管理（確認收款/退回） | — | ✅ | ✅ |
| 教練審核（核准/拒絕/停權） | — | — | ✅ |

# Firestore 資料庫結構設計
1. **`users`（使用者身分表）集合**：
   - 文件 ID：Firebase Auth 的 `uid`。
   - 欄位：email (string), display_name (string), coach_status (string，可選：'none' 一般使用者、'pending' 待審核、'approved' 已核准教練、'rejected' 申請未通過、'suspended' 已停權), apply_reason (string，申請理由), applied_at (timestamp), reviewed_at (timestamp), review_note (string，管理員備註), created_at (timestamp)。
   - 登入時 AuthContext 自動建立（初始 coach_status='none'）。學員只能在 none↔pending 之間切換，無法自行升級為 approved（只有系統管理員能核准）。

2. **`courses`（課程主表）集合**：
   - 文件 ID：自動生成（例如：`course_001`）
   - 欄位：title (string), coach (string), location (string), time (string), price (number), max_capacity (number), current_registrations (number)。
   - 教練 / 系統管理員在後台網頁直接 CRUD，或用 seed 腳本初始化。

3. **`registrations`（報名紀錄表）集合**：
   - 文件 ID：格式固定為 `userId_courseId`（例如：`user123_course001`）。這樣一來，前端只要直接查詢該 ID 的文件是否存在（只需 1 次讀取），就能判斷該用戶是否報名過這堂課，不需撈取整張表。
   - 欄位：registration_id (string), user_id (string), user_name (string), user_email (string), course_id (string), course_title (string), status (string，可選：'pending' 待繳費、'confirmed' 已確認、'cancelled' 已取消), payment_notified (boolean，學員是否已按「通知已匯款」), created_at (timestamp)。
   - 取消報名是把 status 改成 `cancelled`（保留紀錄、不刪除）；之後可再次報名，系統會把同一份文件重新啟用回 `pending`。
   - Firestore 規則確保學員只能改自己的報名（status 只能改為 pending/cancelled），無法自行設為 confirmed（只有教練/管理員能核准）。

# 必要功能與網頁畫面
1. **導覽列（Navbar）**：顯示系統名稱、首頁連結、個人專區連結（登入後顯示），以及登入/登出按鈕。
2. **首頁（課程列表）**：
   - 從 Firestore 抓取課程（需包含上述的 LocalStorage 暫存邏輯）。
   - 用乾淨的卡片樣式呈現課程資訊（名稱、教練、時間、學費、剩餘名額）。
   - 每堂課都有「我要報名」按鈕。若用戶未登入，點擊後導向登入頁；若名額已滿，則禁用（disable）該按鈕。
3. **登入 / 註冊頁**：
   - 乾淨簡單的表單，使用 Firebase Authentication（Email/密碼）功能。
   - 使用 Google 登入的功能。
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

# 🧑‍🏫 系統管理員與教練設定方式

**系統管理員（根帳號，Email 白名單）：**
1. 把管理員 Email 填入 **`src/config.js`** 的 `SYSTEM_ADMIN_EMAILS` 陣列。
2. 把**同一個 Email** 填入 **`firestore.rules`** 的 `isSystemAdmin()` 函式內（兩處必須完全一致）。
3. 重新 `npm run deploy` 部署前端；並到 Firebase Console → Firestore → 規則，貼上最新 `firestore.rules` 後**發佈**。
4. 用該 Email 登入，導覽列會顯示「系統管理員」徽章，教練後台會出現「教練審核」分頁。

**教練（動態身分，由系統管理員核准）：**
1. 一般使用者在個人專區點「申請成為教練」，填寫理由後送出。
2. 系統管理員在教練後台 → 教練審核，看到該申請（待審核會有紅點計數），按「核准」。
3. 該教練重新整理個人專區 → 卡片變「你已是教練 ✓」，導覽列出現「教練後台」，可管理課程/報名。
4. 系統管理員可隨時按「停權」停止該教練的權限。

# 🚀 部署上線步驟（完成專案實作後請務必提供）

完成專案實作之後，請寫出「如何部署到 GitHub Pages 及 Firebase」的具體步驟。請假設操作者是不熟悉工程的人，每一步都要寫得非常白話、附上要點選的按鈕與輸入的指令，並包含以下內容：

1. **Firebase 後端設定**：
   - 如何在 Firebase 官網建立一個免費（Spark Plan）專案。
   - 如何開啟 Authentication 的「Email/密碼」登入方式、Google 登入。
   - 如何建立 Firestore Database，並建立 `users`、`courses`、`registrations` 三個集合。
   - 如何在 Firebase 取得專案的設定金鑰（apiKey 等），並填入 `.env.local`。
   - 提供一份安全的 Firestore 安全規則（Security Rules），實作三角色權限模型。**規則內容以專案根目錄的 `firestore.rules` 為準**，每次更新後都要到 Firebase Console → Firestore → 規則重新貼上並發佈（包括新增 `users` 集合時）。
   - **設定系統管理員與教練**：見上方「🧑‍🏫 系統管理員與教練設定方式」。
2. **GitHub Pages 前端部署**：
   - 如何在 GitHub 建立一個新的儲存庫（Repository）並上傳程式碼。
   - 需要安裝/設定哪些套件（例如 `gh-pages`）、`vite.config.js` 的 `base` 設定該怎麼填。
   - 完整的部署指令（例如 `npm run build` 與 `npm run deploy`）。
   - 如何在 GitHub 設定中開啟 Pages，以及部署完成後「報名網址」會長什麼樣子、要去哪裡找到它。
3. **上線後檢查**：列出一份簡單的檢查清單，讓確認網站可以正常開啟、能註冊、能報名、且不會超出免費額度。