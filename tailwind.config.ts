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
        "primary": "#2B586B",
        "secondary": "#375C71",
        "accent": "#BA69D7",
        "neutral": "#EBEBEB",
        "base": "rgba(55, 92, 113, 0.15)",
        "overlay": "rgba(0, 0, 0, 0.7)"
      },
      maxHeight: {
        "550": "550px",
        "600": "600px",
        "850": "850px"
      },
      maxWidth: {
        "550": "550px",
        "600": "600px",
        "800": "800px"
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
