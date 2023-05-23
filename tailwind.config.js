/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        login: "1fr 2fr",
      },
      colors: {
        orangeColor: "#fb7a30",
        darkWhiteColor: "#D9D9D9",
        redColor: "#FF0000",
        grayColor: "#727272",
        lightGrayColor: "#BDBDBD"
      },
    },
  },
  plugins: [],
};
