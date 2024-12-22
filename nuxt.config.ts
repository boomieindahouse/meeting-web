export default defineNuxtConfig({
  components: true,

  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/styles.css',
    'slick-carousel/slick/slick.css', // เพิ่มการโหลด CSS ของ Slick
    'slick-carousel/slick/slick-theme.css', // เพิ่มการโหลด Theme ของ Slick
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['swiper', 'slick-carousel'], // การทรานส์ไพล์ Slick Carousel
  },

  ssr: false,
  modules: ['nuxt-swiper'],

  plugins: [
    '~/plugins/lenis.js',
  ],
  
  compatibilityDate: '2024-12-13',
})
