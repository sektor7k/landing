const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{ts,tsx}', // Eklenen içerik yolu
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '475px',
      '1xl': '1400px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        derek: `0px 0px 0px 1px rgb(0 0 0 / 0.06),
        0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
        0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 
        0px 6px 6px -3px rgb(0 0 0 / 0.06),
        0px 12px 12px -6px rgb(0 0 0 / 0.06),
        0px 24px 24px -12px rgb(0 0 0 / 0.06)`,
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        move: 'move 5s linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards', // Virgül eklendi
      },
      keyframes: {
        spotlight: {
          '0%': {
            opacity: 0,
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: 1,
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        move: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(200px)' },
        },
        'bounce-open': {
          '0%': { transform: 'scale(0.7)' },
          '45%': { transform: 'scale(1.05)' },
          '80%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        floating: {
          '0%, 100%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, -50px)' },
        },
        floatingDown: {
          '0%, 100%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, 50px)' },
        },
      },
      fontFamily: {
        Inter: ["'Inter', sans-serif"],
        jakarta_sans: ["'Plus Jakarta Sans', sans-serif"],
        playfair: ["'Playfair Display', serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#B1E346',
          100: '#F3F8E8',
          200: '#C4F241',
        },
        dark: {
          DEFAULT: '#131410',
          100: '#141410',
          200: '#212220',
          300: '#191A17',
          gradient: '#191917',
        },
        gray: {
          DEFAULT: '#F6F8F1',
          100: '#DCE0D3',
          200: '#D9E0C5',
          50: '#F7F7F7',
          darkGradient: 'rgba(217, 224, 197, .07)',
        },
        borderColor: {
          DEFAULT: '#EDF0E6',
          dark: '#373935',
        },
        paragraph: {
          DEFAULT: '#18181B',
          light: '#5D6167',
        },
        rating: {
          DEFAULT: '#FFC107',
        },
      },
      dropShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        icon: '0px 0px 20px 0px rgba(0, 0, 0, 0.07)',
      },
      boxShadow: {
        nav: '0px 0px 30px rgba(0, 0, 0, 0.05)',
        box: '0px 5px 50px 0px rgba(0, 0, 0, 0.07)',
      },
      borderRadius: {
        large: '40px',
        medium: '20px',
        DEFAULT: '12px',
      },
      spacing: {
        15: '60px',
        25: '100px',
        150: '150px',
      },
      animation: {
        bounce: 'bounce-open 0.3s',
        floating: 'floating 5000ms ease-in-out infinite',
        floatingDown: 'floatingDown 5000ms ease-in-out infinite',
      },
      backgroundSize: {
        full: '100%',
      },
      cursor: {
        fancy: 'url(/images/cursor.png), default',
      },
    },
  },
  safelist: [
    'nav-sticky',
    'active',
    {
      pattern: /scale-/,
    },
  ],
  plugins: [
    addVariablesForColors, // Eklendi
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-dot-thick': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      )
    },
  ],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))
  addBase({
    ':root': newVars,
  })
}
