import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E5503A",
          "red-dark": "#C03A28",
          "red-deep": "#8E2818",
        },
        cream: {
          DEFAULT: "#F5E8D0",
          warm: "#EFDFC2",
        },
        yellow: {
          brand: "#F5C842",
          deep: "#E8A820",
        },
        dark: "#1A0E08",
        brown: "#2A150A",
        "warm-bg": "#FBF1DC",
        "text-body": "#2C1810",
        "text-muted": "#7A6050",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
        italic: ['"Cormorant Garamond"', "serif"],
        sans: ['"DM Sans"', "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "ken-burns": "kenBurns 12s ease-out forwards",
        "hero-up": "heroUp 1.2s ease forwards",
        "logo-in": "logoIn 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "letterbox-top": "lbIn 1.2s 0.3s cubic-bezier(0.5,0,0.3,1) forwards",
        "letterbox-bottom": "lbInBot 1.2s 0.3s cubic-bezier(0.5,0,0.3,1) forwards",
        "cue-drop": "cueDrop 2.2s infinite",
        "pulse-dot": "pulseDot 2s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1.02)" },
        },
        heroUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        logoIn: {
          from: { opacity: "0", transform: "scale(0.7)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        lbIn: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        lbInBot: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        cueDrop: {
          "0%, 100%": { transform: "scaleY(0.3)", opacity: "0.3" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
        pulseDot: {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 0 0 rgba(74,222,128,0.5)",
          },
          "50%": {
            opacity: "0.85",
            boxShadow: "0 0 0 8px rgba(74,222,128,0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
