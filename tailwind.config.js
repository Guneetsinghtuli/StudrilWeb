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
      sm: "0.8rem",
      base: "0.9rem",
      xl: "1.4rem",
      "2xl": "2.600rem",
      "3xl": "1.33rem",
      "4xl": "1.200rem",
      "5xl": "3.052rem",
      "6xl": "3.815rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    fontFamily: {
      poppins: ["Poppins", "serif"],
      montserrat: ["Montserrat", "serif"],
    },
    extend: {
      colors: {
        primary: "#1E2B5E",
      },
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '4rem',
      'full': '9999px',
      'large': '12px',
    }
  },
};
