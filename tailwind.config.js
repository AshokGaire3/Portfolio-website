/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-delayed': 'fadeIn 0.8s ease-in-out 0.3s both',
        'fade-in-up-delayed': 'fadeInUp 0.8s ease-out 0.5s both',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-up-delayed': 'slideUp 0.8s ease-out 0.4s both',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'text-cycle': 'textCycle 4s ease-in-out infinite',
        'text-fade': 'textFade 3s ease-in-out infinite',
        'text-fade-enhanced': 'textFadeEnhanced 3s ease-in-out infinite',
        'cursor-blink': 'cursorBlink 1s infinite',
        'cursor-blink-refined': 'cursorBlinkRefined 1.2s infinite',
        'float-slow': 'floatSlow 20s ease-in-out infinite',
        'float-reverse': 'floatReverse 25s ease-in-out infinite',
        'float-gentle': 'floatGentle 30s ease-in-out infinite',
        'drift-1': 'drift1 40s linear infinite',
        'drift-2': 'drift2 35s linear infinite',
        'drift-3': 'drift3 45s linear infinite',
        'drift-4': 'drift4 38s linear infinite',
        'grid-pulse': 'gridPulse 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(15px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textCycle: {
          '0%, 25%': { opacity: '1', transform: 'translateY(0)' },
          '30%, 70%': { opacity: '0', transform: 'translateY(-10px)' },
          '75%, 100%': { opacity: '1', transform: 'translateY(0)' },
        },
        textFade: {
          '0%, 30%': { opacity: '1' },
          '35%, 65%': { opacity: '0' },
          '70%, 100%': { opacity: '1' },
        },
        textFadeEnhanced: {
          '0%, 33%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '38%, 62%': { opacity: '0', transform: 'translateY(-5px) scale(0.98)' },
          '67%, 100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        cursorBlinkRefined: {
          '0%, 45%': { opacity: '1' },
          '46%, 54%': { opacity: '0' },
          '55%, 100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) translateX(10px) rotate(1deg)' },
          '66%': { transform: 'translateY(10px) translateX(-5px) rotate(-0.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(15px) translateX(-15px) rotate(-1deg)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px) scale(1)' },
          '25%': { transform: 'translateY(-10px) translateX(5px) scale(1.02)' },
          '75%': { transform: 'translateY(5px) translateX(-8px) scale(0.98)' },
        },
        drift1: {
          '0%': { transform: 'translateX(-100px) translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { transform: 'translateX(100px) translateY(-100px) rotate(360deg)', opacity: '0' },
        },
        drift2: {
          '0%': { transform: 'translateX(100vw) translateY(-50px) rotate(0deg)', opacity: '0' },
          '15%, 85%': { opacity: '1' },
          '100%': { transform: 'translateX(-100px) translateY(100vh) rotate(-180deg)', opacity: '0' },
        },
        drift3: {
          '0%': { transform: 'translateX(-50px) translateY(-50px) rotate(0deg)', opacity: '0' },
          '20%, 80%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw) translateY(100vh) rotate(270deg)', opacity: '0' },
        },
        drift4: {
          '0%': { transform: 'translateX(50vw) translateY(100vh) rotate(0deg)', opacity: '0' },
          '25%, 75%': { opacity: '1' },
          '100%': { transform: 'translateX(-100px) translateY(-100px) rotate(-90deg)', opacity: '0' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.1' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.025em',
        wide: '0.025em',
      },
    },
  },
  plugins: [],
}