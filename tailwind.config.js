/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors: {
        primary: '#50BA87',
        yellow: '#FFB703',
        background:'#EFF6E0',
        cardColor:'#D7E2BE',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        headingFont: ['Gloock', 'serif'],
        fontRegular: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
