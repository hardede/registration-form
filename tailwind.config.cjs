/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg_register: "url('./assets/bg-register.png')",
        uploadPhoto: "url('./assets/UploadPhoto.svg')",
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
