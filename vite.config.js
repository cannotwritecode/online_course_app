import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(new URL('.', import.meta.url).pathname, 'src'),
    },
  },
  css: {
    postcss: path.resolve(
      new URL('.', import.meta.url).pathname,
      'postcss.config.js'
    ),
  },
})
