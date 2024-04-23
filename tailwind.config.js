/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        Red: "hsl(0, 100%, 68%)",
        VeryDarkBlue: "hsl(230, 29%, 20%)",
        DarkGrayishBlue: "hsl(230, 11%, 40%)",
        GrayishBlue: "hsl(231, 7%, 65%)",
        LightGrayishBlue: "hsl(207, 33%, 95%)",
      },
    },
  },

  plugins: [],
};
