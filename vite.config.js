import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my_projects/', // Replace with your repo name
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});