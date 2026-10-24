import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync } from 'node:fs'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-assets',
      closeBundle() {
        cpSync('assets', 'dist/assets', { recursive: true })
      },
    },
  ],
})