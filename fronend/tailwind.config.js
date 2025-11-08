import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['all'], // 👈 allows Replit and any other host
    host: true,            // 👈 needed for external access (Replit preview)
    port: 5173             // optional: specify port if needed
  }
})
