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
        boxBg: "rgba(255, 255, 255, 0.03)"
      },
      borderColor:  {
        primary: "#140D27",
        secondary: "#D434FE",
        grey: "rgba(255, 255, 255, 0.18)",
      },
      boxShadow: {
        bgBox: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }
    },
  },
  plugins: [],
}