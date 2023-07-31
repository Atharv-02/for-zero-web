/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f6f7f9",
          "200": "#f4f3ef",
          "300": "#ebebeb",
        },
        white: "#fff",
        orange: "#f79f22",
        silver: "rgba(196, 196, 196, 0.8)",
        lightseagreen: "rgba(31, 161, 139, 0.3)",
        lightgray: "#ccc",
        gray: {
          "100": "#fafafa",
          "200": "#808080",
          "300": "#1a1a1a",
          "400": "rgba(255, 255, 255, 0.5)",
          "500": "rgba(0, 0, 0, 0.1)",
        },
        darkslategray: {
          "100": "#333",
          "200": "#072f10",
          "300": "rgba(0, 91, 75, 0.8)",
        },
        teal: "#00836c",
        steelblue: "#3789c7",
        darkgray: "#999",
        mediumseagreen: "#27ae60",
        for_zero_blue : "#073356",
        for_zero_light_blue : "#21d1f2",
        for_zero_green : "#12E2A4",
      },
      fontFamily : {
        Blanco : ['Blanco', 'sans-serif'],
        Inter : ['Inter', 'sans-serif'],

      },
      fontWeight: {
        normal: 500,
        bold: 700,
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 576px) { ... }
  
        'md': '768px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      },
    },
  },
  plugins: [],
};
