/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,tsx,ts,jsx,html,php}',
  ],
  theme: {
    //set default font

    extend: {
      colors: {
        primary: '#0e0e0e',
        spotify_gray: "#292929",
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
      }
    }
  },
  plugins: [],
}

