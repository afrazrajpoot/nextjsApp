/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px", 
        md: "768px", 
        tb: "820px", 
        lg: "1024px",
        xl: "1280px", 
       "2xl": "1536px", 
      }
    },
  },
  plugins: [],
};
