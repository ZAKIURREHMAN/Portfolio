/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        great:"Great Vibes",
        oswald:"Oswald",
        antonCs:"Anton SC",
        archivo:"Archivo",
      }
    },
  },
  plugins: [],
}