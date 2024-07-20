/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
}

