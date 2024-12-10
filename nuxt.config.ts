export default defineNuxtConfig({
  // ตั้งค่า CSS
  css: ['@/assets/css/tailwind.css'],
  
  // ตั้งค่าการใช้ PostCSS และ Tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
