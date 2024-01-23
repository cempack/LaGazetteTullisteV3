// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    'nuxt-simple-robots'
  ],
  site: {
    url: 'https://v3.journal.elliotmoreau.fr',
  }
})
