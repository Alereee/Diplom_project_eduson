import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.kinopoisk.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        movie: resolve(__dirname, 'movie/index.html'),
        movie_list: resolve(__dirname, 'movie_list/index.html'),
        series_list: resolve(__dirname, 'series_list/index.html'),
      },
    },
  },
});