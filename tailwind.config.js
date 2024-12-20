module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        gold: '#DEC07B',
        secondbg: '#2F2F2F',
        primarybg: '#252525',
        navbg: '#1D1D1D',
        turqoise: '#228897',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #238795 0%, #ECD400 100%)',
        'gradients-text': 'linear-gradient(to right, #238795 30%, #ECD400 100%)',
        'grad-text': 'linear-gradient(to right, #50B4C2 40%, #ECD400 70%)'
      }
    },
  },
  plugins: [],
}
