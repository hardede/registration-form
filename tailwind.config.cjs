/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-register": "url('./src/assets/bg-register.png')",
        uploadPhoto: "url('./src/assets/UploadPhoto.svg')",
      },
      fontFamily: {
        "tt-medium": ["TT-medium"],
        "tt-regular": ["TT-regular"],
        "tt-light": ["TT-light"],
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
