/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding:'2rem',
    },

    extend: {
      colors: {
        backdrop: "#fffffe",
        primary: "#6246ea",
        secondary: "#d1d1e9",
        tertiary: "#e45858",
        headline: "#2b2c34",
        paragraph: "#2b2c34",
        stroke: "#2b2c34",
      },

      screens: {
        '2xl': '1320px' ,
      },

      animation:{
        'spin-slow': 'spin 3s linear infinite',
        'bounce-fast': 'bounce 0.9s linear infinite',
      }
    },
  },
  plugins: [],
};
