import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: '/resume-2.0/',

  plugins: [
    vue(),
    ...(!isProduction ? [vueDevTools()] : []),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@scss': fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/image', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@scss/variables" as *;
        `,
      },
    },
  },

  build: {
    minify: 'oxc',
    cssMinify: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
  },
})
