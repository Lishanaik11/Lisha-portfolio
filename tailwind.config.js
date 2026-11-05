
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Times New Roman"', "serif"],
        sans: ["Arial", "sans-serif"],
      },
      colors: {
        dark: "#101010",
        accent: "#b45cff",
      },
    },
  },
  plugins: [],
};
