import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        garamond: ["Cormorant Garamond", "Georgia", "serif"],
        michroma: ["Michroma", "Orbitron", "sans-serif"],
      },
      animation: {
        "slide-down": "slide-down 0.6s ease-in-out",
        "slide-up": "slide-up 0.6s ease-in-out",
        "pulse-fast": "pulse 3s linear infinite",
        train: "move-train 5s linear infinite",
        marquee: "marquee 35s linear infinite",
      },
      keyframes: {
        "move-train": {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(2000%)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      colors: {
        background: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        foreground: "var(--fg)",
        "text-2": "var(--fg-2)",
        "text-3": "var(--fg-3)",
        // Legacy aliases kept so existing Tailwind classes compile unchanged
        "main-background-grey": "#070707",
        "main-app-teal": "#f97316",
        "main-app-purple": "#e91e8c",
      },
    },
  },
  plugins: [],
} satisfies Config;
