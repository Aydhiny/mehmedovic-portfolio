import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-down": "slide-down 0.6s ease-in-out",
        "slide-up": "slide-up 0.6s ease-in-out",
        "pulse-fast": "pulse 3s linear infinite",
        "gradient-shift": "gradientShift 5s infinite alternate",
        train: "move-train 5s linear infinite",
      },
      keyframes: {
        "move-train": {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(2000%)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      backgroundImage: {
        "site-pattern": "url('/src/images/pattern.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-background-grey": "#242424",
        "main-app-teal": "#01FEE1",
        "main-app-purple": "#9000FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
