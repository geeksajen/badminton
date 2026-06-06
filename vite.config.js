import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base 設為相對路徑 './'，搭配 HashRouter，
// 不論部署到 GitHub Pages 的哪個 repo 子路徑都不會跑版。
export default defineConfig({
  plugins: [react()],
  base: './',
})
