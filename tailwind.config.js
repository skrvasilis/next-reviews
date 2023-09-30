/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily : {
        orbitron : ['var(--font-orbitron)' , "sans-serif"],
        sans: ["var(--font-exo2)" , "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
