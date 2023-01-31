/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        512: "32rem",
        22: "5.375rem",
      },
      width: {
        22: "5.375rem",
      },
    },
  },
  plugins: [],
}
