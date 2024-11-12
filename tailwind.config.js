/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import * as twct from "@tailwindcss/typography";
import autoprefixer from "autoprefixer";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [twct, daisyui],
  daisyui: {
    themes: ["light", "dark", "retro", "cyberpunk", "valentine", "aqua"],
  },
};
