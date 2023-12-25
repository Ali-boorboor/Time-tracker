/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "my-font": ["my-font"],
    },
    backgroundImage: {
      "bg-ellipsis": "url('../../images/svg-img/icon-ellipsis.svg')",
      "bg-exercise": "url('../../images/svg-img/icon-exercise.svg')",
      "bg-play": "url('../../images/svg-img/icon-play.svg')",
      "bg-self-care": "url('../../images/svg-img/icon-self-care.svg')",
      "bg-social": "url('../../images/svg-img/icon-social.svg')",
      "bg-study": "url('../../images/svg-img/icon-study.svg')",
      "bg-work": "url('../../images/svg-img/icon-work.svg')",
    },
    colors: {
      purple: "#6f76c8",
      white: "#fff",
    },
    backgroundColor: {
      purple: {
        300: "#5847eb",
        500: "#7536d3",
      },
      yellow: "#f1c65b",
      green: "#4acf81",
      orange: "#ff8c66",
      pink: "#ff5c7c",
      blue: {
        400: "#56c2e6",
        700: "#1c1f4a",
        900: "#0f1424",
      },
    },
    extend: {},
  },
  plugins: [],
};