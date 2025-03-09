import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Correct config (without tailwindcss)
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
})
