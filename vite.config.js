import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/teste-news/',  // Nome correto do repositório GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
})