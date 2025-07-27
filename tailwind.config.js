/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          200: "#E27659",
        },
        green: {
          100: "#c5f9ef",
          200: "#5faf74",
          300: "#d5ebd5",
          700: "#2c5e59",
          800: "#547f5e",
          900: "#3d4b4b",
        },
        gray: {
          800: "#444138",
        },
      },
      screens: {
        xs: "430px",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Microsoft JhengHei"'],
        serif: ['"Noto Serif TC"', '"Microsoft JhengHei"'],
        garamond: ['"EB Garamond"', '"Noto Serif TC"'],
      },
    },
  },
  plugins: [],
};
