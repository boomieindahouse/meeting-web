export default defineNuxtConfig({
  components: true,

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/styles.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['swiper'], // การทรานส์ไพล์ Swiper หากจำเป็น
  },

  ssr: false,
  modules: ['nuxt-swiper'],
  compatibilityDate: '2024-12-13',
})