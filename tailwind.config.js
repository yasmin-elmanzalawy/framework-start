// tailwind.config.js
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        mainblue: "#2C3E50",
        mainblue400: "#2c3e5060",
        darkblue: "#1A252F",
        maincyan: "#1ABC9C",
      },
    },
  },
  plugins: [flowbite],
};
