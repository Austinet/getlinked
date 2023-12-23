/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#140D27",
        secondary: "#D434FE",
        grey: "rgba(255, 255, 255, 0.18)",
      },
      backgroundColor: {
        primary: "#140D27"
      },
      borderColor:  {
        primary: "#140D27",
        secondary: "#D434FE",
        grey: "rgba(255, 255, 255, 0.18)",
      },
    },
  },
  plugins: [],
}