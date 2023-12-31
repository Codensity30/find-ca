/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0076CE",
      },
      screens: {
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
