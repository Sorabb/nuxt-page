// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {
    buildAssetsDir: '/static/',
  },
  experimental: {
    payloadExtraction: false,
  },
  devtools: { enabled: true },
  ssr: false,
  modules: ['@element-plus/nuxt'],
  devServer: {
    port: 11345,
  }
})