import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/theme/theme.scss";`,
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths()
  ],
});
