import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures assets are loaded with relative paths on GitHub Pages
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
});
