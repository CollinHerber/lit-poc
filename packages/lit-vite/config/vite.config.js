// vite.config.js
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  exclude: ['**/*.stories.tsx'],
  build: {
    rollupOptions: {
      treeshake: true,
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/index-chunk.js',
        assetFileNames: 'assets/[name].[ext]',
      },
    }
  }
});
