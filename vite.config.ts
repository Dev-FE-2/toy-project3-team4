import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylelint from 'vite-plugin-stylelint';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), stylelint({})],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
    ],
  },
});
