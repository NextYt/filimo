/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: {
      //     DEFAULT: '#1cb561',  // Green primary color from template
      //     hover: '#17924E',
      //     dark: '#17924E'
      //   },
      //   secondary: '#f9ad03', // Yellow accent color
      //   background: {
      //     dark: '#151515',
      //     light: '#1A1A1A',
      //     card: '#ffffff05',
      //     overlay: 'rgba(0,0,0,.8)'
      //   },
      //   text: {
      //     primary: '#FFFFFF',
      //     secondary: '#E0E0E0',
      //     muted: '#959595',
      //     accent: '#DC9B4A',
      //     description: '#d8d8d8'
      //   },
      //   button: {
      //     secondary: '#363636',
      //     'secondary-hover': '#434242'
      //   }
      // },
      // fontFamily: {
      //   sans: ['IRANSans', 'system-ui', 'sans-serif'],
      // },
      // container: {
      //   center: true,
      //   padding: '1rem',
      //   screens: {
      //     sm: '640px',
      //     md: '768px',
      //     lg: '1024px',
      //     xl: '1280px',
      //     '2xl': '1536px',
      //   },
      // },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      // }
    },
  },
  plugins: [],
}