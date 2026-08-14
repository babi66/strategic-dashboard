import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server', // or 'hybrid' depending on your setup
  adapter: vercel(),
  vite: {
    ssr: {
      noExternal: ['firebase-admin', 'jwks-rsa'],
    },
  },
});