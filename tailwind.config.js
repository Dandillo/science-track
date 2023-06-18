/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        login: "2fr 2fr 900px",
        game: "2fr 2fr 2fr",
      },
      colors: {
        orangeColor: "#fb7a30",
        orangeBGColor: "#ffb379",
        darkWhiteColor: "#D9D9D9",
        redColor: "#FF0000",
        grayColor: "#727272",
        darkGrayColor: "#4E4E4E",
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
      dropShadow: {
        imgShadow: "14px 14px 50px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
