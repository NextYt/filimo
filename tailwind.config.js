/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E50914',
        'primary-dark': '#B81D24',
        background: {
          dark: '#141414',
          light: '#1F1F1F'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E5E5',
          muted: '#808080'
        }
      },
      fontFamily: {
        sans: ['IRANSans', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}