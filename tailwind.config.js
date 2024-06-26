/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          brand: {
            bg: {
              main: '#0C1217',
              secondary: '#6CADDECC'
            }
          },
          basics: {
            primary: '#FFFFFF',
            accent: {
              red: '#ED3024'
            }
          }
        },
        light: {
          brand: {
            bg: {
              overlay: '#0C121780'
            }
          }
        }
      }
    }
  }
}
