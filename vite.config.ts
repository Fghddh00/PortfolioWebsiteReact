import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  plugins: [require('@vitejs/plugin-react')],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
  build: {
    outDir: 'build',
    assetsDir: 'static',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        aboutMe: path.resolve(__dirname, 'AboutMe.tsx'),
      },
    },
  },
});