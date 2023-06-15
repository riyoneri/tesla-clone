/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Gotham-Book",
        "main-light": "Gotham-Light",
        "main-bold": "Gotham-Bold",
        "main-medium": "Gotham-Medium"
      },
      backgroundImage: {
        "top-ad": "radial-gradient(54.97% 272.54% at 27.36% -134.72%,rgba(108,148,255,.92) 0,rgba(0,0,0,.92) 100%)",
        "models": "url('/assets/images/models.jpeg')",
        "blue-car": "url('/assets/images/blue car.avif')"
      },
      colors: {
        "primary": "#171a20",
        "light-dark": "rgba(0, 0, 0, 0.15)",
        "graysh-light": "#e2e3e3"
      },
      boxShadow: {
        "bottom-lg": "box-shadow: inset 0 0 500px 8px #000"
      }
    },
  },
  plugins: [],
}

