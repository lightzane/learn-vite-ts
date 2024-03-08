import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4200,
  },
  base: '',
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        format: 'umd',
      },
    },
  },
});
