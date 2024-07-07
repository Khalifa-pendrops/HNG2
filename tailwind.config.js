/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navYellow: "rgba(229, 184, 11, 1)",
        textBlck: "rgba(0, 0, 0, 1)",
      },
      placeholderSize: {
        "pxl": "text-xl"
      }
    },
  },
  plugins: [],
};
