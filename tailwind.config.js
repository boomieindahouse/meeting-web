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
      colors: {
        gold: '#DEC07B',
        primarybg: '#2F2F2F',
        secondbg: '#252525',
        navbg: '#1D1D1D',
        turqoise: '#228897',
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #238795 0%, #ECD400 100%)',
        'grad-text': 'linear-gradient(to right, #50B4C2 40%, #ECD400 70%)'
      }
    },
  },
  plugins: [],
}
