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
        navbg: '#1D1D1D'
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(to right, #238795 0%, #ECD400 100%)'
      }
    },
  },
  plugins: [],
}
