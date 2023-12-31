import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        orangeStroke: "#C26666",
      },
      fontFamily: {
        san: ["sans-serif"],
      },
      backgroundColor: {
        black: "black",
      },
      borderWidth: {
        4: "4px",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
        marquee3: "marquee3 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { color: "#C266C2" },
          "50%": { color: "#C2C266" },
          "100%": { color: "#C26666" },
        },
        marquee2: {
          "0%": { color: "#C2C266" },
          "50%": { color: "#C26666" },
          "100%": { color: "#C266C2" },
        },
        marquee3: {
          "0%": { color: "#C26666" },
          "50%": { color: "#C266C2" },
          "100%": { color: "#C2C266" },
        },
      },
    },
  },
  variants: {},
  plugins: [],
} satisfies Config;
