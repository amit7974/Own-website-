var _a, _b, _c;
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var processEnv = (_a = globalThis.process) === null || _a === void 0 ? void 0 : _a.env;
var repoName = ((_c = (_b = processEnv === null || processEnv === void 0 ? void 0 : processEnv.GITHUB_REPOSITORY) === null || _b === void 0 ? void 0 : _b.split('/')) === null || _c === void 0 ? void 0 : _c[1]) || (processEnv === null || processEnv === void 0 ? void 0 : processEnv.VITE_GITHUB_REPO) || '';
var base = repoName && repoName.indexOf('.github.io') === -1 ? "/".concat(repoName, "/") : '/';
// https://vitejs.dev/config/
export default defineConfig({
    base: base,
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
});
