/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'veryDarkBlue': 'hsl(234, 12%, 34%)' ,
        'grayishBlue': 'hsl(229, 6%, 66%)',
        'veryLightGray': 'hsl(0, 0%, 98%)'
      },
      fontFamily:{
        body: ['Poppins'],
      }
    },
  },
  plugins: [],
}

