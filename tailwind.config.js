/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0F1115',
        cream: '#FAF6EF',
        brand: {
          DEFAULT: '#E8542B', // warm Alvy orange — feels like fresh paint
          dark: '#B73C18',
          soft: '#FBE7DD'
        },
        accent: {
          teal: '#1F8A8A',
          mustard: '#E2A93A'
        }
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-up': 'fadeUp 600ms ease-out both',
        'shimmer': 'shimmer 2.4s linear infinite'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: []
};
