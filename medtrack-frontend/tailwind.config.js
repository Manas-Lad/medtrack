
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medtrack: {
          dark: '#111827', 
          teal: '#0d9488', 
          light: '#f9fafb',
          gray: '#6b7280',
          border: '#e5e7eb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
