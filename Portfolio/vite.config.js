import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/', // GitHub Pages will serve from root since repo is username.github.io
  build: {
    outDir: '../dist', // Build to root dist folder
  }
})
