module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        teko: ["Teko", "sans-serif"],
      },
      colors: {
        hero: "#222222",
        "section-light": "#242424",
        primary: {
          DEFAULT: "#42DC99",
          50: "#FFFFFF",
          100: "#EEFCF6",
          200: "#C3F4DF",
          300: "#98ECC7",
          400: "#6DE4B0",
          500: "#42DC99",
          600: "#25C680",
          700: "#1D9B64",
          800: "#157048",
          900: "#0D452D",
        },
      },
      gridTemplateColumns: {
        "fill-36": "repeat(auto-fill, minmax(18rem, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
