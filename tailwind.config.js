/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '360px',
      'Planshet': '1024px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}

