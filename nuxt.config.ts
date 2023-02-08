// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    },
    jwtSignSecret: 'CHANGE_KEY_WITH_ENV'
  },
  typescript: {
    typeCheck: true
  }
})
