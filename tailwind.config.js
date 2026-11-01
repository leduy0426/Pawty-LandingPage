/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF6F61',
          light: '#FF8A7E',
          dark: '#E05547',
          50: '#FFF5F4',
          100: '#FFE6E4',
        },
        mint: {
          DEFAULT: '#A3E4D7',
          light: '#BFF0E6',
          dark: '#76C7B7',
          ink: '#2B7A6A',
          50: '#F2FAF8',
        },
        cream: {
          DEFAULT: '#FDFBF7',
          warm: '#F7F3E9',
          card: '#FFFFFF',
        },
        charcoal: {
          DEFAULT: '#2D3436',
          light: '#636E72',
        },
        softgray: {
          DEFAULT: '#B2BEC3',
          light: '#DFE6E9',
        },
        warning: '#FDCB6E',
        danger: '#E17055',
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(45, 52, 54, 0.06)',
        'card-hover': '0 12px 30px rgba(255, 111, 97, 0.15)',
        floating: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'bounce-subtle': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

