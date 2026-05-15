/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#1A1A1A",
        gold: {
          DEFAULT: '#D4AF37', // Luxury Gold
          light: '#F3E5AB',
          dark: '#AA8C2C',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          card: '#171717',
          border: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // For normal text
        serif: ['Playfair Display', 'serif'], // For premium headings
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}