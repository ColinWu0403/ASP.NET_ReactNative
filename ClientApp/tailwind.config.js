/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/css");
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#146c94",
        secondary: "#19a7ce",
        tertiary: "#14151e",
        ivory: "#f6f1f1",
      },
      screens: {
        xs: "390px",
        sm: "430px",
        md: "890px",
      },
      fontSize: {
        "2xs": "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem", // Custom font size 7xl
        "8xl": "6rem", // Custom font size 8xl
        "9xl": "8rem", // Custom font size 9xl
        "10xl": "10rem", // Custom font size 10xl
        "50xl": "50rem", // Custom font size 10xl
      },
    },
  },
  plugins: [nativewind],
}

