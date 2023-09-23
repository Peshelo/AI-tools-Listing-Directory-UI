/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      // colors:{
      //   primary:{
      //     DEFAULT: colors.green[500],
      //     ...colors.green,
      //   }
      // }
    },
  },
  plugins: ['~/plugins/datatables.client.ts']
}