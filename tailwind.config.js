/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./utils/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1440px"
    },
    extend: {
      fontFamily: {
        GMVDINPro: ["var(--GMVDINPro-font)", , "ui-serif", "Georgia"]
      },
      fontSize: {
        body: [
          "1rem",
          {
            lineHeight: "1.5rem"
          }
        ]
      },
      colors: {
        black: {
          DEFAULT: "#000000",
          50: "#E6E6E6",
          100: "#010101",
          200: "#A9A7A7"
        },
        white: {
          DEFAULT: "#FFFFFF",
          50: "#EFF2F7"
        },
        primary: {
          DEFAULT: "#69433B",
          50: "#b77a50",
          100: "#f9f1e8",
          200: "#e9c6a6",
          300: "#7811FF"
        },
        yellow: {
          DEFAULT: "#FFCB2B"
        }
      },
      zIndex: {
        "-1": "-1",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        75: "75",
        100: "100",
        1000: "1000",
        1001: "1001",
        1002: "1002",
        auto: "auto"
      }
    }
  },
  plugins: []
};
