import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Fixed port so this project never collides with the other Vite apps on this machine
  // (they use 5173–5175). strictPort: fail loudly instead of drifting onto another port.
  server: {
    port: 5190,
    strictPort: true,
  },
  preview: {
    port: 5191,
    strictPort: true,
  },
})
