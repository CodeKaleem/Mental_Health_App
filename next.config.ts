/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false // 👈 turn off Turbopack
  },
  webpack(config: import('webpack').Configuration) {
    return config;
  }
};

export default nextConfig;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // enable dark mode via class
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8", // sky blue accent
        secondary: "#facc15", // yellow accent
      },
    },
  },
  plugins: [],
};
