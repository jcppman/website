import { defineConfig, envField, sharpImageService } from 'astro/config';

const measurementId = envField.string({
  context: 'server',
  access: 'public',
  optional: true,
});

export default defineConfig({
  site: 'https://chriest.me',
  image: {
    service: sharpImageService({
      avif: { quality: 50, effort: 4 },
      webp: { quality: 76 },
    }),
  },
  env: {
    schema: {
      PUBLIC_GTAG_ID: measurementId,
      NUXT_PUBLIC_GTAG_ID: measurementId,
    },
  },
});
