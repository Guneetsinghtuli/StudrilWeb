/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
      fontSize: {
        sm: '0.8rem',
        base: '1.2rem',
        xl: '1.4rem',
        '2xl': '2.600rem',
        '3xl': '1.33rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
}
}