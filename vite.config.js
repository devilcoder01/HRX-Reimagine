import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Hrx-Website/', // Ensure this matches your repository name
  plugins: [react()],
});
