import type { Config } from "tailwindcss";

// Brand palette extracted from the official Al Mawlid Cooperative logo
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Argan leaf green — main interactive color
        primary: {
          DEFAULT: "#5A8010",
          50: "#f4f9e8",
          100: "#e5f1c5",
          200: "#cce490",
          300: "#aad050",
          400: "#82B820",
          500: "#5A8010",
          600: "#486808",
          700: "#385208",
          800: "#253808",
          900: "#141E05",
          foreground: "#FBF0D0",
        },
        // Argan oil gold — CTA / accent color (from central logo drop)
        honey: {
          DEFAULT: "#C88010",
          50: "#fdf8ea",
          100: "#faefc5",
          200: "#f5d985",
          300: "#efbf3A",
          400: "#E8A020",
          500: "#C88010",
          600: "#A86808",
          700: "#885005",
          800: "#644005",
          900: "#402808",
        },
        // Parchment — warm background (from business card and brand materials)
        cream: {
          DEFAULT: "#FBF0D0",
          50: "#ffffff",
          100: "#FEFCF5",
          200: "#FBF0D0",
          300: "#F5E0A8",
          400: "#EDD080",
          500: "#E0BC58",
        },
        // Warm brown — text and earthen tones (from brand calligraphy)
        earth: {
          DEFAULT: "#4A2C14",
          50: "#fdf6f0",
          100: "#f5e5d5",
          200: "#e8c8a8",
          300: "#d4a878",
          400: "#BC8850",
          500: "#966838",
          600: "#744E28",
          700: "#4A2C14",
          800: "#301C0C",
          900: "#180E06",
        },
        // Logo dark — the circle background (hero, dark sections)
        brand: {
          dark: "#13100A",
          gold: "#E8A020",
          "gold-deep": "#A86808",
          green: "#82B820",
          orange: "#E88030",
          brown: "#4A2C14",
          cream: "#FBF0D0",
        },
        // Semantic CSS-variable tokens
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "Tahoma", "Arial", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        // Logo-accurate gradients
        "gold-gradient": "linear-gradient(135deg, #F5C850 0%, #E8A020 50%, #C88010 100%)",
        "green-gradient": "linear-gradient(135deg, #82B820 0%, #5A8010 60%, #385208 100%)",
        "hero-gradient": "linear-gradient(135deg, #13100A 0%, #1E1A10 40%, #262010 100%)",
        "parchment-gradient": "linear-gradient(135deg, #FBF0D0 0%, #F5E0A8 100%)",
        "brand-gradient": "linear-gradient(to right, #13100A 0%, #1E1A10 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.55s ease-out",
        "slide-in-right": "slideInRight 0.35s ease-out",
        "slide-in-left": "slideInLeft 0.35s ease-out",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(28px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        honey: "0 4px 20px rgba(232, 160, 32, 0.30)",
        "honey-lg": "0 8px 40px rgba(232, 160, 32, 0.35)",
        green: "0 4px 20px rgba(90, 128, 16, 0.25)",
        "green-lg": "0 8px 40px rgba(90, 128, 16, 0.30)",
        brand: "0 4px 20px rgba(19, 16, 10, 0.30)",
        card: "0 2px 12px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
        gold: "0 0 20px rgba(232, 160, 32, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
