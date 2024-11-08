// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif']
      },
      backgroundImage: {
        'back': "url('/src/assets/bg.png')",
      }
    },
  },
  plugins: [],
};