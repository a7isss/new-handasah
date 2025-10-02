/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d8ff',
          300: '#a5bbfd',
          400: '#8395f9',
          500: '#6677f3',
          600: '#4f5ee8',
          700: '#3b47d6',
          800: '#2d37b1',
          900: '#0B3D91',
          950: '#08296b',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
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
