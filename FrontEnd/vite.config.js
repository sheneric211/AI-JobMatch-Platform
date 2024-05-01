import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3006
  },
  build: {
    rollupOptions: {
      external: ['netlify-identity-widget', 'react-toastify'], // Added 'react-toastify' here
    },
  },
});