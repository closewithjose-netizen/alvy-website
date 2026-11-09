/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#172A45',
        cream: '#FAF7F1',
        brand: {
          DEFAULT: '#24518F', // trusted navy-blue for links and labels
          dark: '#1A3C6B',
          soft: '#E6ECF5',
          light: '#9DBBE3'
        },
        sage: {
          DEFAULT: '#567A5C', // the warm touch: buttons and highlights
          dark: '#44624A',
          soft: '#E7EEE4',
          light: '#B4CCB0'
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
