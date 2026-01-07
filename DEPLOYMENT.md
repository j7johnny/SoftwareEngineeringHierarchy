# GitHub Pages 部署指南

本指南將説明您如何將此 React + D3.js 項目部署到 GitHub Pages。

## 前提條件

- Node.js 和 npm 已安裝
- 一個 GitHub 倉庫（已初始化）
- Git 已配置

## 部署步驟

### 1. 本地構建測試

首先，確保項目能在本地成功構建：

```bash
npm install
npm run build
npm run preview
```

在瀏覽器中訪問 `http://localhost:4173` 驗證構建輸出。

### 2. 推送代碼到 GitHub

```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### 3. GitHub 倉庫設置

進入你的倉庫的 **Settings** 頁面：

1. 左側菜單選擇 **Pages**
2. 在 **Source** 部分，選擇 **Deploy from a branch**
3. 選擇分支為 **main**，目錄為 **/(root)**（或如果你想要特定目錄，選擇 **/docs**）
4. 點擊 **Save**

### 4. 部署選項

#### 選項 A：使用 GitHub Actions（推薦）

1. 在倉庫根目錄創建文件夾：`.github/workflows/`
2. 創建文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: yourdomainname.com  # 可選：如果使用自定義域名
```

3. 推送此工作流文件：

```bash
git add .github/
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

4. 推送後，GitHub Actions 會自動構建並部署到 `gh-pages` 分支

#### 選項 B：手動部署到 gh-pages 分支

1. 首先，確保本地構建成功：

```bash
npm run build
```

2. 創建並切換到 `gh-pages` 分支：

```bash
git checkout --orphan gh-pages
```

3. 清除所有文件並只保留 dist 內容：

```bash
git rm -rf .
cp -r dist/* .
```

4. 提交並推送：

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push -u origin gh-pages
```

5. 回到 main 分支：

```bash
git checkout main
```

6. 在 GitHub 倉庫 Settings → Pages 中，將 Source 設置為 `gh-pages` 分支

### 5. 驗證部署

- 倉庫 Settings → Pages 頁面會顯示你的網站 URL
- URL 格式通常為：`https://yourusername.github.io/Gemini-/`
- 等待幾秒鐘後訪問此 URL

## 常見問題

### 問題：頁面顯示 404 或資源無法加載

**原因**：Vite 配置中的 `base` 路徑不正確

**解決方案**：
- 確認 `vite.config.ts` 中的 `base` 設置為 `/Gemini-/`（與你的倉庫名稱匹配）
- 重新構建：`npm run build`
- 清除瀏覽器緩存

### 問題：圖表不顯示或樣式異常

**原因**：可能是 CSS 導入或路徑問題

**解決方案**：
- 檢查瀏覽器開發者工具的 Console 和 Network 標籤
- 驗證 `base` 路徑配置
- 清除緩存並硬刷新（Ctrl+Shift+R）

### 問題：GitHub Actions 部署失敗

**解決方案**：
1. 檢查 Actions 標籤下的構建日誌
2. 確保 `deploy.yml` 中的工作流語法正確
3. 驗證倉庫有足夠的權限

## 環境變量（Gemini API Key）

如果項目需要 Gemini API Key（根據 `vite.config.ts` 配置），在部署時：

1. **本地開發**：
   - 創建 `.env.local` 文件
   - 添加：`VITE_GEMINI_API_KEY=your_api_key_here`
   - `.env.local` 已在 `.gitignore` 中，不會被提交

2. **GitHub Pages 部署**：
   - 如果不需要運行時 API 調用，可以忽略
   - 如果需要，在 GitHub Actions 中設置環境變量：

```yaml
      - name: Build
        run: npm run build
        env:
          VITE_GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
```

3. 在 GitHub 倉庫 Settings → Secrets and variables → Actions 中添加你的 API Key

## 自定義域名（可選）

如果要使用自定義域名：

1. 在倉庫根目錄創建 `public/CNAME` 文件，內容為你的域名
2. 配置你的域名 DNS 指向 GitHub Pages
3. 在 GitHub 倉庫 Settings → Pages 中驗證域名

## 開發工作流

```bash
# 開發模式
npm run dev

# 構建生產版本
npm run build

# 本地預覽構建結果
npm run preview

# 部署到 GitHub Pages
npm run deploy  # 這只是運行 build，實際部署由 GitHub Actions 或手動完成
```

## 部署後的下一步

1. 驗證應用功能正常
2. 在 GitHub 倉庫創建一個 README.md，說明項目
3. 定期更新代碼並推送到 GitHub

## 有用的鏈接

- [Vite 官方文檔 - 部署](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Pages 文檔](https://docs.github.com/en/pages)
- [GitHub Actions 文檔](https://docs.github.com/en/actions)

---

**祝部署順利！** 如有任何問題，請檢查浏覽器控制台和 GitHub Actions 日誌。
