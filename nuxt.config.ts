// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@sidebase/nuxt-auth",
  ],
  auth: {
    origin: process.env.AUTH_ORIGIN,
    enableGlobalAppMiddleware: true,
  },
  devtools: { enabled: false },
  googleFonts: {
    families: {
      "Imperial Script": {
        wght: [300, 400, 500, 600, 700],
      },
      "Azeret Mono": {
        wght: [300, 400, 500, 600, 700],
      },
      Gaegu: {
        wght: [300, 400, 500, 600, 700],
      },
    },
  },
});
