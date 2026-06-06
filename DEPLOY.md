# 🏸 羽球課程報名系統 — 教練上線手冊（白話版）

這份文件假設你**完全不懂程式**。請照著順序一步一步做，遇到要「點按鈕」或「打指令」的地方都會明確寫出來。

全程**免費**（Firebase Spark 免費方案 + GitHub Pages），不用綁信用卡也能用。

---

## 名詞先看一眼（不用背）

- **Firebase**：Google 提供的免費後台，幫我們存「會員帳號」和「課程 / 報名資料」。
- **GitHub**：放網站程式碼的地方，順便幫我們免費把網站掛上線（GitHub Pages）。
- **指令**：在電腦的「終端機」裡打的文字。Windows 請開「**PowerShell**」或「**命令提示字元**」，Mac 請開「**終端機 Terminal**」。

> 💡 每打完一行指令，要按一下 **Enter** 它才會執行。

---

# 步驟一：建立 Firebase 後端

### 1-1 建立免費專案
1. 打開網站 👉 https://console.firebase.google.com/
2. 用你的 Google 帳號登入。
3. 點 **「建立專案 / Add project」**。
4. 專案名稱隨便取（例如 `badminton`），按 **繼續**。
5. 「Google Analytics」這頁可以**關掉**（不需要），一直按 **繼續 / 建立專案**。
6. 等它跑完，按 **繼續** 進入專案。

### 1-2 開啟 Email/密碼 登入
1. 左邊選單找到 **「建構 Build」→「Authentication」**，點進去按 **「開始使用 Get started」**。
2. 在「登入方式 Sign-in method」清單中，點 **「電子郵件/密碼 Email/Password」**。
3. 把第一個開關打開（**啟用 Enable**），按 **儲存 Save**。
   （第二個「電子郵件連結」不用開。）

### 1-3 建立資料庫 Firestore
1. 左邊選單點 **「建構 Build」→「Firestore Database」**，按 **「建立資料庫 Create database」**。
2. 模式選 **「以正式版模式啟動 Start in production mode」**，按 **下一步**。
3. 位置（Location）選離台灣近的，例如 **`asia-east1`** 或 **`asia-northeast1`**，按 **啟用 Enable**。
4. 等它建立完成。

### 1-4 建立兩個集合與第一筆課程
> 集合（collection）= 一個資料夾；文件（document）= 一筆資料。

**建立 `courses`（課程表）：**
1. 在 Firestore 畫面點 **「+ 開始集合 Start collection」**。
2. 集合 ID 填 `courses`，按 **下一步**。
3. 文件 ID 按右邊的 **「自動 ID Auto-ID」**。
4. 一個一個加入下面這些欄位（Field / 型別 Type / 值 Value）：

   | 欄位名稱 | 型別 | 範例值 |
   |---|---|---|
   | `title` | string | 週六初階班 |
   | `coach` | string | 林教練 |
   | `location` | string | 中正運動中心 3 樓 |
   | `time` | string | 每週六 09:00–11:00 |
   | `price` | number | 1200 |
   | `max_capacity` | number | 12 |
   | `current_registrations` | number | 0 |

   > ⚠️ `price`、`max_capacity`、`current_registrations` 型別一定要選 **number**，
   > 而且 `current_registrations` 一開始固定填 **0**。
5. 按 **儲存 Save**。之後要新增課程，就在 `courses` 上按 **「+ 新增文件 Add document」** 重複 3～5 即可。

**建立 `registrations`（報名表）：**
- 這個集合會由系統在使用者報名時**自動建立**，你**不用手動建**。
- （如果你想先讓它出現：點 **+ 開始集合**，ID 填 `registrations`，隨便建一筆再刪掉也行，但通常不需要。）

### 1-5 拿到「金鑰」填進程式
1. 點左上角 **齒輪 ⚙️ → 專案設定 Project settings**。
2. 往下滑到 **「你的應用程式 Your apps」**，點 **`</>`（網頁 Web）** 那個圖示。
3. 取個暱稱（例如 `badminton-web`），**不要**勾「Firebase Hosting」，按 **註冊應用程式**。
4. 它會給你一段 `firebaseConfig`，長得像這樣：
   ```js
   const firebaseConfig = {
     apiKey: "AIzaSyXXXX...",
     authDomain: "badminton-xxxx.firebaseapp.com",
     projectId: "badminton-xxxx",
     storageBucket: "badminton-xxxx.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234:web:abcd..."
   };
   ```
5. 打開專案資料夾裡的 **`.env.local`** 檔案，把右邊的值一一對應填進去（**不要**保留引號）：
   ```
   VITE_FIREBASE_API_KEY=AIzaSyXXXX...
   VITE_FIREBASE_AUTH_DOMAIN=badminton-xxxx.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=badminton-xxxx
   VITE_FIREBASE_STORAGE_BUCKET=badminton-xxxx.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=1234567890
   VITE_FIREBASE_APP_ID=1:1234:web:abcd...
   ```
   存檔。

### 1-6 貼上安全規則（很重要！）
這一步確保「只有登入的人能報名，而且只能改自己的資料」。
1. 回到 **Firestore Database**，點上方分頁 **「規則 Rules」**。
2. 把整個內容**全部刪掉**，改貼上專案裡 **`firestore.rules`** 檔案的全部內容
   （或直接複製下面這段）：
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /courses/{courseId} {
         allow read: if true;
         allow create, delete: if false;
         allow update: if request.auth != null
           && request.resource.data.diff(resource.data).affectedKeys().hasOnly(['current_registrations'])
           && request.resource.data.current_registrations is int
           && request.resource.data.current_registrations >= 0;
       }
       match /registrations/{regId} {
         allow read: if request.auth != null
           && resource.data.user_id == request.auth.uid;
         allow create: if request.auth != null
           && request.resource.data.user_id == request.auth.uid
           && regId == request.auth.uid + '_' + request.resource.data.course_id;
         allow update: if request.auth != null
           && resource.data.user_id == request.auth.uid
           && request.resource.data.user_id == request.auth.uid;
         allow delete: if false;
       }
     }
   }
   ```
3. 按 **「發布 Publish」**。

---

# 步驟二：先在自己電腦上測試（可選但建議）

在專案資料夾打開終端機，依序打：
```bash
npm install
npm run dev
```
它會給你一個網址（通常是 `http://localhost:5173/`），用瀏覽器打開，試著：
- 註冊一個帳號 → 登入
- 在首頁看到課程 → 按「我要報名」
- 進「個人專區」看到報名紀錄

沒問題就按 `Ctrl + C` 停掉，往下走部署。

---

# 步驟三：部署到 GitHub Pages（讓全世界打得開）

### 3-1 建立 GitHub 儲存庫並上傳程式碼
1. 註冊 / 登入 👉 https://github.com/
2. 右上角 **「+」→ New repository**。
3. Repository name 填一個英文名字，例如 **`badminton`**（記住它，等下會用到）。
4. 設成 **Public**，**不要**勾任何 README，按 **Create repository**。
5. 回到電腦終端機，在專案資料夾依序打（把 `你的帳號` 換成你的 GitHub 帳號）：
   ```bash
   git init
   git add .
   git commit -m "羽球報名系統"
   git branch -M main
   git remote add origin https://github.com/你的帳號/badminton.git
   git push -u origin main
   ```
   > 若要求登入，照畫面指示用瀏覽器授權即可。
   > 放心：`.env.local`（你的金鑰）已被設定**不會**上傳。

### 3-2 一行指令部署
專案已經幫你裝好 `gh-pages` 套件，也設定好了。直接打：
```bash
npm run deploy
```
這行會自動做兩件事：先 `build`（打包網站），再把成品丟到 GitHub。
跑完看到 `Published` 就成功了。

> 📌 本專案 `vite.config.js` 的 `base` 已設成相對路徑 `'./'`，
> 所以**不論你的 repo 叫什麼名字都不用改**，這也是為什麼要用 HashRouter（網址會帶 `#`）。

### 3-3 打開 GitHub Pages 開關
1. 回到 GitHub 你的 repo 頁面，點上方 **Settings**。
2. 左邊選單點 **Pages**。
3. 「Build and deployment」的 **Source** 選 **Deploy from a branch**。
4. Branch 選 **`gh-pages`**、資料夾選 **`/ (root)`**，按 **Save**。
5. 等 1～2 分鐘，重新整理這個 Pages 頁面，最上方就會出現你的網址：

   ```
   https://你的帳號.github.io/badminton/
   ```
   這就是要給學員報名的網址！（可以分享到 LINE 群組）

### 3-4 以後要更新網站
改完東西、或新增課程程式後，只要再打一次：
```bash
npm run deploy
```
即可更新線上版本。（純粹新增課程資料的話，在 Firebase 後台加就好，不用重新部署。）

---

# 步驟四：上線後檢查清單 ✅

請用手機或另一台電腦打開報名網址，逐項確認：

- [ ] 網址打得開，看得到課程卡片。
- [ ] 點右上「登入」→「立即註冊」，能成功建立帳號並自動登入。
- [ ] 登出後再用同帳號登入，能成功。
- [ ] 首頁按「我要報名」→ 出現「已報名」訊息；該課剩餘名額 **-1**。
- [ ] 同一堂課再按一次報名 → 會擋下並提示「已經報名過」。
- [ ] 把某課的 `current_registrations` 在後台改到等於 `max_capacity`，
      首頁該課按鈕變成 **「名額已滿」且不能點**。
- [ ] 進「個人專區」看得到自己報名的課與狀態（待繳費）。
- [ ] 按「通知已匯款」→ 出現「已通知匯款」標籤。
- [ ] 按「取消報名」→ 狀態變「已取消」，回首頁該課名額 **+1**。
- [ ] 用 B 帳號登入，**看不到** A 帳號的報名（資料隔離正常）。

### 教練日常怎麼用？
- **新增課程**：Firebase → Firestore → `courses` → 新增文件（記得 `current_registrations` 填 0）。
- **確認某人繳費**：在 `registrations` 找到那筆（文件 ID 是 `會員ID_課程ID`），
  把 `status` 從 `pending` 改成 `confirmed`，學員的個人專區就會顯示「已確認」。
- **看誰報名了哪堂**：直接在 `registrations` 集合瀏覽即可。

---

# 額度安心說明（為什麼不會爆錢）

Firebase 免費方案每天有 **5 萬次讀取**。本系統已做這些省額度設計：
- 課程列表用 **LocalStorage 暫存 1 小時**，重新整理 / 切頁不會重複讀取。
- 課程列表用**單次讀取**（不是即時監聽），不會持續消耗。
- 只有真的**按下「我要報名」那一刻**才去讀名額。
- 所有抓資料的程式都鎖好了依賴，**不會**有無窮迴圈狂讀。

以一般社團規模（每天幾十～幾百人次瀏覽）來說，**完全用不到免費額度的零頭**，放心使用 🎉
