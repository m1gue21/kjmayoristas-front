/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FEFDF7',
          100: '#FDF9E7',
          200: '#F7E98E',
          300: '#F0D85C',
          400: '#E8C547',
          500: '#D4AF37', // Primary gold
          600: '#B8860B',
          700: '#9A6F0A',
          800: '#7D5808',
          900: '#654706',
        },
        cream: {
          50: '#FEFCF8',
          100: '#FDF8F0',
          200: '#FAF0E1',
          300: '#F6E8D2',
          400: '#F2E0C3',
          500: '#EED8B4',
          600: '#EACFA5',
          700: '#E6C796',
          800: '#E2BF87',
          900: '#DEB778',
        },
        charcoal: {
          50: '#F7F7F7',
          100: '#E8E8E8',
          200: '#D1D1D1',
          300: '#B4B4B4',
          400: '#888888',
          500: '#6D6D6D',
          600: '#5D5D5D',
          700: '#4F4F4F',
          800: '#454545',
          900: '#3D3D3D',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};