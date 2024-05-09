module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#c8c8c8", 900: "#1b1b1b", "900_01": "#191919", "800_7f": "#4848487f", "900_02": "#1a1a1a" },
        white: { A700_01: "#ffffff", A700: "#fcfdff", A700_99: "#ffffff99" },
        black: { 900: "#000000" },
        blue_gray: { 300: "#86beaa", 400: "#8d8d8d", 900: "#2b2b2b", "400_01": "#858a99", "300_01": "#85bda9" },
      },
      boxShadow: {
        xs: "0px 0px 60px 30px #00000007",
        sm: "0px 0px 14px 0px #0000001e",
        md: "0px 0px 6px 0px #00000019",
      },
      fontFamily: { poppins: "Poppins", manrope: "Manrope", roboto: "Roboto" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
