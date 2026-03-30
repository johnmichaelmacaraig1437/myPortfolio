import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/api': {
      target: 'https://localhost:7122', // <--- Set this to 7122
        secure: false,
        changeOrigin: true
      }
    },
    port: 5173, // Optional: Forces the frontend to always use this port
  }
})