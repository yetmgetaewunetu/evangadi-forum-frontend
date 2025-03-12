/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./bg.jpg')",
        footer: "linear-gradient(0deg,#3B455A,#3B455A)",
      },
      height: {
        "slide-height": "64vh",
      },
    },
  },
  plugins: [],
};
