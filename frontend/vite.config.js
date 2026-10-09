import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],

  base: '/resume-2.0/',

  resolve: {
    alias: {
      '@': fileURLToPath(
          new URL('./src', import.meta.url)
      ),

      '@scss': fileURLToPath(
          new URL('./src/assets/scss', import.meta.url)
      ),

      '@img': fileURLToPath(
          new URL('./src/assets/image', import.meta.url)
      )
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@scss/variables" as *;
        `
      }
    }
  }
})
