import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const processEnv = (globalThis as any).process?.env as Record<string, string | undefined> | undefined
const repoName = processEnv?.GITHUB_REPOSITORY?.split('/')?.[1] || processEnv?.VITE_GITHUB_REPO || ''
const base = repoName && repoName.indexOf('.github.io') === -1 ? `/${repoName}/` : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
