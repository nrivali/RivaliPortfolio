/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Twitch-inspired color palette
        'twitch-purple': {
          DEFAULT: '#9146FF',
          dark: '#772CE8',
          light: '#A970FF',
        },
        'twitch-bg': {
          DEFAULT: '#0E0E10',
          light: '#18181B',
          lighter: '#1F1F23',
          card: '#26262C',
        },
        'twitch-text': {
          DEFAULT: '#EFEFF1',
          muted: '#ADADB8',
          dark: '#53535F',
        },
        'twitch-accent': {
          green: '#00F593',
          red: '#FF4D4D',
          orange: '#FF8C00',
          blue: '#00C8FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roobert', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-live': 'pulse-live 2s ease-in-out infinite',
        'slide-in': 'slide-in 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      keyframes: {
        'pulse-live': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-10px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
