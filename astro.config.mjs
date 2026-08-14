import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  vite: {
    ssr: {
      external: ['firebase-admin'],
      noExternal: ['jwks-rsa', 'jose'],
    },
  },
});