/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        login: "2fr 2fr 900px",
        game: "2fr 2fr 2fr",
        results: "auto 3fr auto auto auto",
      },
      colors: {
        orangeColor: "#fb7a30",
        orangeLighterColor: "#FF9100",
        orangeBGColor: "#ffb379",
        orangeLightBGColor: "#FFCC9EE0",
        darkWhiteColor: "#D9D9D9",
        redColor: "#FF0000",
        grayColor: "#727272",
        darkGrayColor: "#4E4E4E",
        textGrayBrown: "#5C5C5C",
        lightGrayColor: "#BDBDBD",
        lightGrayTransparentColor: "#E7E7E7",
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
        adminWaiting:
          "8px 8px 10px rgba(0, 0, 0, 0.05), -8px -8px 10px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
