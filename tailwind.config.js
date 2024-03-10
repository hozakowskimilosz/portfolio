/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        primary: {
          DEFAULT: "#5c2cad",
          light: "#743ece",
          dark: "#462284",
        },
        secondary: {
          DEFAULT: "#ad2c3c",
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontStyle: {
        italic: "italic",
      },
    },
  },
  plugins: [],
};
