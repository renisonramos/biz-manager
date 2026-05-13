/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'biz-red': '#E63946',
        'biz-dark': '#1D3557',
        'biz-bg': '#F1FAEE'
      }
    },
  },
  plugins: [],
}