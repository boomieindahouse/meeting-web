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
})
