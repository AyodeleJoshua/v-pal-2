import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  base: '/v-pal-2/',
  optimizeDeps: {
    exclude: ['js-big-decimal'],
  },
});
