import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: import.meta.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
})