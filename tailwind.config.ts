import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        "light-blue": "#0078f8",
        "dark-blue": "#002752",
        "darker-blue": "#001a36",
        "light-black": "#181717",
        "button-light-blue": "#93C9FE",
        "button-blue": "#0074d9",
      },
      borderRadius: {
        "25": "25%",
      },
    },
  },
  plugins: [],
};
export default config;
