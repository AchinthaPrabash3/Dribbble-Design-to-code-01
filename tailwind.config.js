/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "repeating-gradient":
          "repeating-linear-gradient(90deg,  rgba(255,255,255,0.5) 0%,  rgba(255,255,255,0.5) 0.2%, rgba(0,0,0,0) 0.2%, rgba(0,0,0,0) 25.29%)",
      },
    },
  },
  plugins: [],
};
