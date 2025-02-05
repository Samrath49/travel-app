// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  pages: true,
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxtjs/supabase",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
  ],
  runtimeConfig: {
    public: {
      DEMO_USER_EMAIL: process.env.DEMO_USER_EMAIL,
      DEMO_USER_PASSWORD: process.env.DEMO_USER_PASSWORD,
      GOOGLE_PLACES_KEY: process.env.GOOGLE_PLACES_KEY,
      GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    },
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/"],
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Volkhov:ital,wght@0,400;0,700;1,400;1,700&display=swap",
        },
      ],
    },
  },
});
