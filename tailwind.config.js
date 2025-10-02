/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefefe',
          100: '#f8f5f0',
          200: '#f0e8dc',
          300: '#e8dbc8',
          400: '#dcc9a8',
          500: '#d4b98c',
          600: '#c9a56e',
          700: '#b98f54',
          800: '#9e7745',
          900: '#7f5f38',
          950: '#4a371f',
        },
        secondary: {
          50: '#f8f5f0',
          100: '#f0e8dc',
          200: '#e8dbc8',
          300: '#dcc9a8',
          400: '#d4b98c',
          500: '#c9a56e',
          600: '#b98f54',
          700: '#9e7745',
          800: '#7f5f38',
          900: '#4a371f',
          950: '#2a1f12',
        },
        accent: {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#4db6ac',
          400: '#26a69a',
          500: '#009688',
          600: '#00897b',
          700: '#00796b',
          800: '#00695c',
          900: '#004d40',
        },
        royal: {
          50: '#e8f0fe',
          100: '#d0e1fd',
          200: '#a1c3fb',
          300: '#72a5f9',
          400: '#4387f7',
          500: '#1469f5',
          600: '#0b5ae8',
          700: '#0a4bc4',
          800: '#083ca0',
          900: '#0B3D91',
          950: '#052a66',
        }
      },
      fontFamily: {
        'arabic': ['"GE SS"', '"Noto Naskh Arabic"', '"Cairo"', '"Tajawal"', 'sans-serif'],
        'tajawal': ['Tajawal', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'noto': ['"Noto Naskh Arabic"', 'sans-serif'],
        'ge-ss': ['"GE SS"', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
