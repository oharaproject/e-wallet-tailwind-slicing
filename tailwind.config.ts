import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      animation: {
        "slide-top": "slide-top .5s cubic-bezier(.57,.14,0,1.07) both",
        "slide-bottom": "slide-bottom 1s cubic-bezier(.57,.14,0,1.07) both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            "-webkit-transform": "translateY(100%)",
            transform: "translateY(100%)",
          },
          "100%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)",
          },
        },
        "slide-bottom": {
          "0%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)",
          },
          "100%": {
            "-webkit-transform": "translateY(100%)",
            transform: "translateY(100%)",
          },
        },
      },
      fontSize: {
        "icon-sm": "20px",
        "icon-md": "24px",
        "icon-lg": "28px",
        "icon-xl": "32px",
      },
      colors: {
        brands: {
          "dark-green": "#118871",
          "light-green": "#15AB8E",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        brand: ["Red Rose", "serif"],
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["material-symbols"]),
    }),
  ],
} satisfies Config;
