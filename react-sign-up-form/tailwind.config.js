/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('src/assets/bg-intro-mobile.png')",
        'desktop-bg': "url('src/assets/bg-intro-desktop.png')",
      },
      colors: {
        'bg-red': 'hsl(0, 100%, 74%)',
        'btn-blue': 'hsl(248, 32%, 49%)',
        'btn-green': 'hsl(154, 59%, 51%)',
        'btn-hover-green': 'hsl(154, 59%, 70%)',
        'dark-blue': 'hsl(249, 10%, 26%)',
        'grayish-blue': 'hsl(246, 25%, 77%)',
      },
      fontFamily: {
        'work-sans': ['Work Sans, serif'],
      },
      boxShadow: {
        sharp: '0 6px 0 rgba(0, 0, 0, 0.25)',
        'sharp-green': '0 4px 0 hsl(154, 59%, 45%)',
        'sharp-light-green': '0 4px 0 hsl(154, 59%, 65%)',
      },
      fontSize: {
        xxs: '0.575rem',
      },
    },
  },
  plugins: [],
};
