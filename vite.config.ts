import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: "./"' ensures assets are loaded correctly on shared hosting (cPanel)
  base: './',
  define: {
    // Safely handles the API key variable so the build doesn't crash if it's missing locally
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ""),
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY || ""),
  },
});