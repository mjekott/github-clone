module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        githubdark: "#22272E",
        githublight: "#2D333B",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
