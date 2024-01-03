module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        light_blue: { 200: "#86d1fe", 900: "#0d619e", "900_75": "#0d619e75" },
        red: { 200: "#ff9292" },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_19": "#00000019" },
        gray: {
          100: "#eef2fc",
          200: "#e6e7e8",
          300: "#e3e3e3",
          400: "#c0c5c8",
          500: "#959595",
          700: "#696969",
          900: "#242424",
          "900_a3": "#202020a3",
          "500_01": "#aaacad",
          "500_02": "#949494",
          "900_02": "#121212",
          "900_03": "#202020",
          "900_01": "#282828",
          "300_01": "#e5e5e5",
          "100_01": "#f4f4f4",
        },
        indigo: { 800: "#223795", "800_01": "#233595" },
        blue_gray: { 100: "#d0d0d0", 400: "#8c8c8c" },
        blue: { 50: "#e1e9ff", 700: "#2186d0" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { mohave: "Mohave", inter: "Inter", lato: "Lato" },
      backgroundImage: {
        gradient: "linear-gradient(168deg ,#0d619e,#223795,#233595)",
      },
      boxShadow: {
        bs1: "0px 4px  18px 0px #0000003f",
        bs: "9px 12px  20px 0px #0000003f",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
};
