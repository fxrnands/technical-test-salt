/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: "#7879F1",
          grey: "#3E334E",
        },
        secondary: {
          purple: "#AFA2C3",
        },
      },
    },
  },
  plugins: [],
};
