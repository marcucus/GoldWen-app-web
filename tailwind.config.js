/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{hbs,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Enhanced GoldWen Art Deco color palette
        'gold': {
          'primary': '#D4AF37', // Matte elegant gold
          'light': '#E8D484',
          'dark': '#B8941F',
          'accent': '#F7E98E', // Lighter gold for accents
          'rich': '#C4951A', // Deeper gold
          'warm': '#E5C547', // Warmer gold tone
        },
        'cream': {
          'lightest': '#FEFDFB',
          'light': '#FBF9F7',
          'default': '#F5F1EB',
          'medium': '#F0EBE3',
          'dark': '#EDE7DB',
          'warm': '#F8F4EE',
        },
        'beige': {
          'lightest': '#F7F3ED',
          'light': '#F0EAE2',
          'default': '#E6DDD4',
          'medium': '#DDD3C8',
          'dark': '#D9CFC3',
          'warm': '#E8DDD1',
        },
        'gray': {
          'text': '#1F1F1F', // Very dark gray for text
          'medium': '#6B7280',
          'light': '#F9FAFB',
          'soft': '#8B8B8B',
          'warm': '#706B65',
        },
        // Enhanced dark theme colors with improved contrast
        'dark': {
          'primary': '#0F0F0F', // Deep black
          'secondary': '#1A1A1A', // Dark gray
          'tertiary': '#2A2A2A', // Medium dark gray
          'quaternary': '#3A3A3A', // Lighter dark gray
          'text': '#F8F8F8', // Brighter light text for better contrast
          'text-secondary': '#C5C5C5', // Improved muted text contrast
          'text-tertiary': '#A0A0A0', // Better muted text contrast
          'border': '#404040', // Better border visibility in dark mode
        },
        // Sophisticated Art Deco inspired colors
        'artdeco': {
          'bronze': '#CD7F32',
          'copper': '#B87333',
          'pearl': '#F8F6F0',
          'onyx': '#353935',
          'emerald': '#50C878',
          'sapphire': '#0F52BA',
          'ruby': '#E0115F',
          'platinum': '#E5E4E2',
        },
        // Accent colors for subtle highlights
        'accent': {
          'rose': '#F7E7CE',
          'mint': '#E8F5E8',
          'lavender': '#E6E6FA',
          'champagne': '#F7E7CE',
        }
      },
      fontFamily: {
        // Enhanced typography with more options
        'serif': ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        'sans': ['Lato', 'Inter', 'Open Sans', 'system-ui', 'sans-serif'],
        'display': ['Playfair Display', 'serif'], // For large headlines
        'body': ['Lato', 'Inter', 'sans-serif'], // For body text
        'accent': ['Inter', 'system-ui', 'sans-serif'], // For special elements
      },
      fontSize: {
        // Enhanced type scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.15' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        // Enhanced spacing system for premium layouts
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
      },
      maxWidth: {
        // Enhanced max-width scale
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
      },
      borderRadius: {
        // Enhanced border radius scale
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        // Enhanced shadow system
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
        'gold': '0 4px 15px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 10px 30px rgba(212, 175, 55, 0.4)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      animation: {
        // Enhanced animation system
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'slide-left': 'slideLeft 0.8s ease-out',
        'slide-right': 'slideRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(1deg)' },
          '50%': { transform: 'translateY(-25px) rotate(0deg)' },
          '75%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        pulseGold: {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
          },
          '50%': { 
            opacity: '0.8',
            transform: 'scale(1.05)',
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)'
          },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
            filter: 'brightness(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)',
            filter: 'brightness(1.1)'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-circ': 'cubic-bezier(0.08, 0.82, 0.17, 1)',
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'in-circ': 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}