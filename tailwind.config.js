/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "thick-line": "inset 0 -1px 0 0 rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
