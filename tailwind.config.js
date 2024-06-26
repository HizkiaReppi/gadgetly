import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      sm: "430px",
      // => @media (min-width: 430px) { ... }
      md: "960px",
      // => @media (min-width: 960px) { ... }
      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        secondary: {
          50: "#f6f6ff",
          100: "#ecedff",
          200: "#d9dcff",
          300: "#c6caff",
          400: "#b3b9ff",
          500: "#a0a7ff",
          600: "#8086cc",
          700: "#606499",
          800: "#404366",
          900: "#202133",
        },
        tertiary: {
          50: "#f6fffe",
          100: "#ecfffe",
          200: "#d9fffc",
          300: "#c6fffb",
          400: "#b3fff9",
          500: "#a0fff8",
          600: "#80ccc6",
          700: "#609995",
          800: "#406663",
          900: "#203332",
        },
        black: "#202322",
        white: "#FDFFF7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [flowbite],
};
