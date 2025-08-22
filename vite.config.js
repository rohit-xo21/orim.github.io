import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/orim.github.io',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
