/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeBlue: '#2D70FD',
        themeDarkBlue: {
          100: '#0017470D',
          200: '#00174712',
          300: '#0017471A',
          400: '#001747',
        },
        themeLightGray: '#8C97AC12',
        themeGray: '#8C97AC',
        themeGreen: '#00D8A7',
        themeOrange: '#FE6B38',
        themePurple: '#577CFF',
        themeRed: '#FF6464',
        themeYellow: {
          300: '#FFD166',
          400: '#FFC84A',
        },
        themeDusk: '#405175',
        themeBackground: '#FAFBFC',
        themeSeperator: '#F6F9FB',
        themeSecondarySeperator: '#F1F4F4',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
