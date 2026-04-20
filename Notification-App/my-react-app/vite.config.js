import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  envPrefix: 'VITE_',
   base: '/Registration-form-with-Google/',
  plugins: [react()],
})
