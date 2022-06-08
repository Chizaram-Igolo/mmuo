module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./public/**/*.html"], //add this line
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["WorkSans", "sans-serif"],
        WorkSans_Medium: ["WorkSans_Medium", "sans-serif"],
        WorkSans_SemiBold: ["WorkSans_SemiBold", "sans-serif"],
        WorkSans_Bold: ["WorkSans_Bold", "sans-serif"],
        WorkSans_ExtraBold: ["WorkSans_ExtraBold", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
