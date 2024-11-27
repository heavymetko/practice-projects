/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        softRed: 'hsl(0, 93%, 68%)',
        darkGrayishRed: 'hsl(0, 6%, 24%)',
        desturatedRed: 'hsl(0, 36%, 70%)',
        desturatedRedLight: 'hsl(0, 36%, 80%)',
      },
    },
    fontFamily: {
      josefinSans: ['Josefin Sans', 'sans-serif'],
    },
    letterSpacing: {
      xlwide: '0.3em',
    },
    backgroundImage: {
      'gradient-light-pink':
        'linear-gradient(135deg, hsl(0, 90%, 86%), hsl(0, 74%, 74%))',
      'hover-pink':
        'linear-gradient(135deg, hsl(0, 0%, 90%), hsl(0, 100%, 90%))',
    },
  },
  plugins: [],
};
