/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(-25deg)" },
          "40%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(-25deg)" },
          "80%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "octo-arm": "wave 500ms ease-in-out infinite",
        "octo-arm-mobile": "wave 560ms ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        scaleIn: "scaleIn 0.5s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 10px 20px rgba(0,0,0,.7)",
        glow: "0 0 20px rgba(233, 213, 161, 0.5)",
        "glow-lg": "0 0 40px rgba(233, 213, 161, 0.6)",
        "dark-glow": "0 0 20px rgba(145, 145, 145, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
    fontFamily: {
      sans: ["Inter", "Raleway", "sans-serif"],
      serif: ["Poppins", "Raleway", "serif"],
      display: ["Poppins", "sans-serif"],
    },
    colors: {
      white: "#fff",
      black: "#000",
      yellow: "#e9d5a1",
      "gray-dark": "#353239",
      body: "#212529",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
  },
  plugins: [],
};
