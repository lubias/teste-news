import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Projeto_3/',  // Substitua 'Projeto_3' pelo nome exato do seu repositório
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  server: {
    port: 5173,
    host: true
  }
})