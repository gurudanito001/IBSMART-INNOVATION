import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        "primary": "#1E242F",
        "primary2": "rgba(30, 36, 47, 0.8)",
        "secondary": "#A91D3A",
        "app-peach": "rgba(249,186,168,255)",
        "app-yellow": "rgba(224,191,58,255)",
        "app-orange": "rgba(253,108,71,255)",
        "app-dullYellow": "rgba(204,175,131,255)",
        "overlay": "rgba(0,0,0,0.8)",
        /* "accent": "#c1246b",
        "neutral": "#ffffff9e", */
        "base": "#EEEEEE",
      },
      maxHeight: {
        "650": "650px",
        "800": "800px"
      },
      margin: {
        "45vw": "45vw",
        "46vw": "46vw",
        "46.5vw": "46.5vw",
        "47vw": "47vw",
        "48vw": "48vw",
        "49vw": "49vw",
        "49.4vw": "49.4vw",
        "50vw": "50vw"
      }
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "corporate",],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
