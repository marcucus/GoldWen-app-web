/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{hbs,html}",
  ],
  theme: {
    extend: {
      colors: {
        // GoldWen color palette from specifications
        'gold': {
          'primary': '#D4AF37', // Matte elegant gold
          'light': '#E8D484',
          'dark': '#B8941F',
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
        }
      },
      fontFamily: {
        // Typography from specifications
        'serif': ['Playfair Display', 'serif'], // For titles
        'sans': ['Lato', 'Open Sans', 'sans-serif'], // For body text
      },
      spacing: {
        // For generous white space (Calm Technology philosophy)
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
}