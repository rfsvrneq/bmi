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
        amber: {
          50: "#f9f5ea",
          100: "#ede9da",
          200: "#e1d6c1",
          300: "#bca779",
          400: "#e4b70f",
          500: "#f38b2f",
          600: "#f27e30",
          700: "#ea711f",
          900: "#5e5748",
          950: "#c6ba8b",
        },
        cyan: {
          50: "#c7e1e5",
          100: "#e8f6f9",
          200: "#c7e1e5",
          300: "#76c6ce",
          400: "#29a5bb",
          500: "#9ad2d6",
          600: "#8bbfc1",
          700: "#b4d5d8",
        },
        blue: {
          400: "#3e86c7",
        },
        green: {
          300: "#b5c96b",
          400: "#8db228",
        },
        purple: {
          400: "#a45d97",
          500: "#826baa",
          600: "#94ab6c",
        },
        red: {
          200: "#f47171",
          300: "#ed6969",
          400: "#ef6060",
          500: "#e95b54",
          600: "#dd4545",
          700: "#d52b1e",
        },
        pink: {
          400: "#e27dc3",
        },
        orange: {
          300: "#fca768",
          400: "#f38b2f ",
          500: "#ebb32f",
        },
        gary: {
          700: "#343a55",
          800: "#040404",
        },
      },
      screens: {
        xxs: "375px",
        xs: "410px",
      },
      borderWidth: {
        1: "1px",
        3: "3px",
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', '"Microsoft JhengHei"'],
        // serif: ['"Noto Serif TC"', '"Microsoft JhengHei"'],
        // garamond: ['"EB Garamond"', '"Noto Serif TC"'],
      },
    },
  },
  plugins: [],
};
