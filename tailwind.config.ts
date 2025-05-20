import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#0ed138",
      },
    },
  },
  plugins: [],
};

export default config;
