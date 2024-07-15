/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "atmos-light": "#E7ECEF",
        "atmos-dark": "#000B11",
        "atmos-blue": {
          100: "#2247FF",
          200: "#1B38C7",
        },
        "atmos-gray": {
          100: "#DAE2E7",
          200: "#C2CFD6",
          300: "#7894A5",
          400: "#628193",
          500: "#212B31",
        },
      },
    },
  },
  plugins: [],
};
