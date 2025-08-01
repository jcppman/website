// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxt/scripts',
    'nuxt-gtag'
  ],
  css:[
    '~/assets/css/vars.css',
    '~/assets/css/main.css',
  ],

  app: { layoutTransition: { name: 'layout' }
  },
  routeRules: {
    '/': { ssr: false, prerender: true },
    '/contact': { ssr: false, prerender: true },
    '/portfolio/*': { ssr: false, prerender: true },
    '/fake_contact': { ssr: true, prerender: true },
  },
  nitro: {
    preset: process.env.NETLIFY ? 'netlify_edge' : undefined
  },
  gtag: {},
});
