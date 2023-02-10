// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css', '@/assets/style/login.css'],
  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:8080/api1'
    },
    jwtSignSecret: 'CHANGE_KEY_WITH_ENV'
  },
  typescript: {
    typeCheck: true
  }
});
