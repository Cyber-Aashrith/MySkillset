/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        slab: ['var(--font-roboto-slab)'],
        merriweather: ['var(--font-merriweather)'],
        sans: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [],
}
