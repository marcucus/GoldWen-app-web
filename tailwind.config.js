/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,hbs}",
    "./views/**/*.{hbs,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // GoldWen Art Deco color palette inspired by the logos
        'gold': {
          'primary': '#D4AF37', // Matte elegant gold
          'light': '#E8D484',
          'dark': '#B8941F',
          'accent': '#F7E98E', // Lighter gold for accents
        },
        'cream': {
          'light': '#FBF9F7',
          'default': '#F5F1EB',
          'dark': '#EDE7DB',
        },
        'beige': {
          'light': '#F0EAE2',
          'default': '#E6DDD4',
          'dark': '#D9CFC3',
        },
        'gray': {
          'text': '#1F1F1F', // Very dark gray for text
          'medium': '#6B7280',
          'light': '#F9FAFB',
        },
        // Dark theme colors
        'dark': {
          'primary': '#0F0F0F', // Deep black
          'secondary': '#1A1A1A', // Dark gray
          'tertiary': '#2A2A2A', // Medium dark gray
          'text': '#F5F5F5', // Light text
          'text-secondary': '#B0B0B0', // Muted text
        },
        // Art Deco inspired colors
        'artdeco': {
          'bronze': '#CD7F32',
          'copper': '#B87333',
          'pearl': '#F8F6F0',
          'onyx': '#353935',
          'emerald': '#50C878',
        }
      },
      fontFamily: {
        // Typography from specifications with Art Deco enhancements
        'serif': ['Playfair Display', 'serif'], // For titles
        'sans': ['Lato', 'Open Sans', 'sans-serif'], // For body text
        'artdeco': ['Futura', 'Avenir Next', 'sans-serif'], // Art Deco inspired
        'display': ['Bebas Neue', 'Impact', 'sans-serif'], // Bold display font
      },
      spacing: {
        // For generous white space (Calm Technology philosophy)
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
}