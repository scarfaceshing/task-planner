/** @type {import('tailwindcss').Config} */
const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      animation: {
        spin: 'spin 3s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi', 'lucide'])
    })
  ]
}
