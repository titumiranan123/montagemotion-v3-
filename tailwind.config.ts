import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#E27447",
        secondary: "#FFEFEA",

        // Shades of Primary
        primaryLight: "#E84A4E",
        primaryDark: "#B12B2F",

        // Shades of Secondary
        secondaryLight: "#5CA467",
        secondaryDark: "#3A7C44",

        // Text Colors
        textPrimary: "#DA3338",
        textSecondary: "#4B9555",
        textMuted: "#6B7280",

        // Border Colors
        borderPrimary: "#DA3338",
        borderSecondary: "#4B9555",
        borderMuted: "#D1D5DB",

        // Shadows
        shadowPrimary: "rgba(218, 51, 56, 0.4)",
        shadowSecondary: "rgba(75, 149, 85, 0.4)",
      },
      boxShadow: {
        primary:
          "0 4px 6px -1px rgba(218, 51, 56, 0.1), 0 2px 4px -1px rgba(218, 51, 56, 0.06)",
        secondary:
          "0 4px 6px -1px rgba(75, 149, 85, 0.1), 0 2px 4px -1px rgba(75, 149, 85, 0.06)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
