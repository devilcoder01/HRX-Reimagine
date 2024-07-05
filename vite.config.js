import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Hrx/', // Ensure this matches your repository name
  plugins: [react()],
});
