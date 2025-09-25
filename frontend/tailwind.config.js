/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "ui-sans-serif", "system-ui"],
      },
      colors: {
        googleBlue: "#4285F4",
        googleRed: "#DB4437",
        googleYellow: "#F4B400",
        googleGreen: "#0F9D58",
      },
    },
  },
  plugins: [],
};

