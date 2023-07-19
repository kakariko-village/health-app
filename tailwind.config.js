/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          500: "#414141",
          600: "#2E2E2E",
        },
        gray: {
          400: "#777777",
        },
        primary: {
          300: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
        },
        secondary: {
          300: "#8FE9D0"
        }
      },
    },
  },
  plugins: [],
})
