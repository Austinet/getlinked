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
        darkPurple: "#150E28",
        grey: "rgba(255, 255, 255, 0.18)",
      },
      backgroundColor: {
        primary: "#140D27",
        darkPurple: "#150E28",
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