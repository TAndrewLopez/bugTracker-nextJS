/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#EEEEEE",
        accent: "#00ADB5",
        blueGrey: "#393E46",
        darkBlueGrey: "#222831",
        errorRed: "#cc0000",
        cautionOrange: "#ff6700",
        signalGreen: "#32cd32",
      },
      backgroundImage: {
        loginBG: `url(/loginBG.jpg)`,
        appLogo: `url(/appLogo.png)`,
      },
      fontFamily: {
        sans: "Poppins",
      },
      boxShadow: {
        "1xl": "0 10px 10px rgba(0,0,0,0.2)",
        "3xl": "0 30px 40px -20px rgba(76, 78,97, 0.8)",
      },
      animation: {
        loading: "1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
      },
    },
    screens: {
      sm: "425px",
      md: "600px",
    },
  },
  plugins: [],
};
