/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
const { Colors } = require("./src/constants/Colors");

=======
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        ...Colors,
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        caros: ['"Caros Bold"', "sans-serif"],
=======
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "caros-bold": ["FONTSPRING DEMO - Caros Bold", "sans-serif"],
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
      },
      fontSize: {
        "20px": "20px",
      },
    },
  },
  plugins: [
    function ({ addBase, addUtilities }) {
      addBase({
        body: {
<<<<<<< HEAD
          backgroundColor: Colors.primary,
        },
      });

=======
          backgroundColor: "#ebeaea",
        },
      });
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
      const newUtilities = {
        "@media (min-width: 1238px) and (max-width: 1319px)": {
          ".tailer-card": {
            width: "450px !important",
          },
        },
        "@media (min-width: 1138px) and (max-width: 1237px)": {
          ".tailer-card": {
            width: "365px !important",
            height: "235px !important",
          },
        },
<<<<<<< HEAD
        "@media (min-width: 1024px) and (max-width: 1137px)": {
=======
        "@media (min-width: 1024px) and (max-width: 1237px)": {
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
          ".tailer-card": {
            width: "365px !important",
            height: "235px !important",
          },
          ".shrink-div": {
            width: "90% !important",
          },
        },
        "@media (min-width: 100px) and (max-width: 330px)": {
          ".gerner-link": {
            fontSize: "14px !important",
            padding: "3px 9px",
          },
        },
        ".hide-scroll-bar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".hide-scroll-bar::-webkit-scrollbar": {
          display: "none",
        },
<<<<<<< HEAD
        ".truncate-multiline": {
          display: "-webkit-box",
          "-webkit-line-clamp": "5",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "text-overflow": "ellipsis",
        },
      };

=======
      };
>>>>>>> 2dab8c151b39f5185b3a5450fc8e6feedb708355
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
