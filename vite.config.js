import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/teste-news/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  server: {
    port: 5173,
    host: true
  },
  // Garantir que CSS seja processado corretamente
  css: {
    preprocessorOptions: {}
  }
})