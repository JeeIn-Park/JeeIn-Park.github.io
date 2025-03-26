import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // use "/" for user site like jeein-park.github.io
  plugins: [react()],
});
