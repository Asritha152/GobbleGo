module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this includes your code files
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s linear infinite',
      },
    },
  },
  plugins: [],
}
