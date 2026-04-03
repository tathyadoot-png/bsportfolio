import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E46B2E", // Saffron
          light: "#ff8c52",
          dark: "#c6531d",
        },
        secondary: "#064E3B", // Deep Emerald (For Text/Titles)
        accent: {
          DEFAULT: "#047857", // Emerald Green
          light: "#10B981",
          dark: "#065F46",
        },
        gold: "#D4AF37",
        text: {
          DEFAULT: "#1E293B",
          muted: "#64748B",
        },
        bg: {
          DEFAULT: "#FFFFFF",
          soft: "#F8FAFC",
        },
        border: "#F1F5F9",
      },
      fontFamily: {
        heading: ['"Gotu"', 'sans-serif'], 
        gotu: ['"Gotu"', 'sans-serif'],
        playpen: ['"Playpen Sans Deva"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
        asar: ['"Asar"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        'premium': "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
        'glass': "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        'bento': "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        'inner-soft': "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        'emerald-glow': "0 10px 30px -10px rgba(4, 120, 87, 0.3)",
      },
      backgroundImage: {
        'saffron-gradient': "linear-gradient(135deg, #E46B2E 0%, #FF8C52 100%)",
        'emerald-gradient': "linear-gradient(135deg, #047857 0%, #10B981 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;