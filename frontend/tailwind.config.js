module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '1xl': '1440px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        darkBlue: '#10141E',
        semiDarkBlue: '#161D2F',
        red: '#FC4747',
        greyishBlue: '#5A698F',
      }
    },
  },
  plugins: [require('tailwindcss-labeled-groups')(['bookmarkfull'])],
};
