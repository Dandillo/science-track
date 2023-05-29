/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        login: "1fr 2fr",
        game: "1fr 1fr 1fr",
      },
      colors: {
        orangeColor: "#fb7a30",
        orangeBGColor: "#ffb379",
        darkWhiteColor: "#D9D9D9",
        redColor: "#FF0000",
        grayColor: "#727272",
        lightGrayColor: "#BDBDBD",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        "semi-bold": 600,
      },
    },
  },
  plugins: [],
};
