/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontSize: {
        'xxs': '0.625rem',   // 10px
        'tiny': '0.75rem',   // 12px
        'base': '1rem',      // 16px (default)
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '1.875rem',   // 30px
        '4xl': '2.25rem',    // 36px
        '5xl': '3rem',       // 48px
        '6xl': '4rem',
      },
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'display': ['Playfair Display', 'serif'],
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
        'md': '4px 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '6px 6px 8px rgba(0, 0, 0, 0.1)',
        'xl': '8px 8px 10px rgba(0, 0, 0, 0.1)',
        '2xl': '10px 10px 12px rgba(0, 0, 0, 0.1)',
      }
    },
    
  },
  plugins: [],
}

