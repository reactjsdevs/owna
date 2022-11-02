const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Comfortaa", "sans-serif"],
      body: ["Rubik", "sans-serif"],
    },
    extend: {
      colors: {
        mainColor: {
          ...colors.pink,
          DEFAULT: colors.pink[600],
          50: "#FFF5FB",
        },
      },
      zIndex: {
        1: "1",
        2: "2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
