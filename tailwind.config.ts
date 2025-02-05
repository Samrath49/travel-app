import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        volkhov: ["Volkhov", "serif"],
      },
      colors: {
        primary: "#FA7435",
        "bg-main": "#FEFCFB",
        "bg-special": "#FDFCFA",
        "bg-alt": "#F7F8FC",
        "star-yellow": "rgb(245, 245, 19)",
        "gray-light": "rgba(151, 151, 147, 0.616)",
        "gray-medium": "rgb(202, 200, 200)",
      },
      spacing: {
        22: "5.5rem",
        25: "6.25rem",
        30: "7.5rem",
        "100": "100px",
      },
      borderRadius: {
        "1.5vh": "1.5vh",
      },
      boxShadow: {
        floating: "0px 2px 80px 2px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "card-signup": "url('../img/Vector4857.png')",
        "card-exciting": "url('../img/Vector4857.png')",
        "card-worth": "url('../img/Vector4856.png')",
      },
      padding: {
        section: "5rem",
        "section-sm": "2rem",
      },
      height: {
        "card-icon": "50px",
        "lead-dot": "100px",
        "side-dot": "50px",
        arrow: "40px",
      },
      width: {
        "card-icon": "50px",
        "btn-login": "155px",
        "btn-signup": "155px",
        "btn-discover": "180px",
        "overlay-container": "300px",
      },
    },
  },
} satisfies Config;
