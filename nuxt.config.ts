// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    buildAssetsDir: '/static/',
  },
  devtools: { enabled: true },
  devServer: {
    port: 11345,
  }
})