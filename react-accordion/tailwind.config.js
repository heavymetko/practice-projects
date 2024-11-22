/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        xxs: '18rem',
      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        grayPurple: 'hsl(292, 16%, 49%)',
      },
    },
  },
  plugins: [],
};
