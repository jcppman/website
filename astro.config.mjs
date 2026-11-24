import { defineConfig, envField } from 'astro/config';

const measurementId = envField.string({
  context: 'server',
  access: 'public',
  optional: true,
});

export default defineConfig({
  site: 'https://chriest.me',
  env: {
    schema: {
      PUBLIC_GTAG_ID: measurementId,
      NUXT_PUBLIC_GTAG_ID: measurementId,
    },
  },
});
