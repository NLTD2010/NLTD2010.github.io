/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./devices/*.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base': {
        light: '#152D35',
        dark: '#09192b'
      },
      'text': {
        light: '#D4ECDD',
        dark: '#b4c8cc'
      },
    },
    extend: {
      colors: {
        'surface0': {
          light: '#D4ECDD',
          dark: '#345B63'
        },
        'red': {
          light: '#d20f39',
          dark: '#f38ba8'
        },
        'yellow': {
          light: '#df8e1d',
          dark: '#f9e2af'
        },
        'green': {
          light: '#40a02b',
          dark: '#a6e3a1'
        },
        'blue': {
          light: '#1e66f5',
          dark: '#89b4fa'
        },
        'mauve': {
          light: '#8839ef',
          dark: '#cba6f7'
        },
        'pink': {
          light: '#ea76cb',
          dark: '#a3b8c4'
        },
        'surface2': {
          light: '#152D35',
          dark: '#112031'
        }
      }
    }
  },
  plugins: [],
}