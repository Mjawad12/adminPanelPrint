/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      Lar: { max: "1400px" },
      extLar: { max: "1397px" },
      larger: { max: "1262px" },
      large: { max: "1193px" },
      med: { max: "1062px" },
      small: { max: "968px" },
      smo: { max: "600px" },
      smaller: { max: "500px" },
      mob: { max: "417px" },
      Smob: { max: "361px" },
      smallest: { max: "320px" },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pm: "var(--Font-primary)",
      },
      colors: {
        dullC: "#8E92BC",
        dullP: "#e3e3e3",
        hoverC: "#F5F5F7",
        Pdark: "#141522",
        "Pn-dark-900": "#10197A",
        "Pn-dark-800": "#1A2793",
        "Pn-dark-700": "#2A3BB7",
        "Pn-dark-600": "#3D53DB",
        "Pn-default-500": "#546FFF",
        "Pn-light-400": "#7E95FF",
        "Pn-light-300": "#7E95FF",
        "Pn-light-200": "#BAC8FF",
        "Pn-light-100": "#DCE4FF",
        primaryWhite: "#f0f0f0",
      },
      fontWeight: {
        bol: "800",
        semi: "700",
        med: "600",
        reg: "500",
      },
    },
  },
  plugins: [],
};
