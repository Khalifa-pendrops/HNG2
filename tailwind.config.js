/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "640px" },
      },
      colors: {
        navYellow: "rgba(229, 184, 11, 1)",
        textBlck: "rgba(0, 0, 0, 1)",
        footerbg: "rgba(253, 246, 218, 1)",
        footerTxt: "rgba(39, 46, 69, 1)",
        customtxt: "rgba(104, 104, 104, 1)",
        customBorder: "rgba(104, 104, 104, 1)",
        customeBG: "rgba(217, 217, 217, 0.42)",
        customBGLight: "rgba(217, 217, 217, 0.26)",
        horizontalLine: "rgba(144, 144, 144, 1)",
        slider: "rgba(99, 125, 146, 1)",
        bodyBG: "rgba(106, 106, 106, 1)",
        custBG: "rgba(165, 161, 161, 0.3)",
      },
      placeholderSize: {
        pxl: "text-sm",
      },
    },
  },
  plugins: [],
};
