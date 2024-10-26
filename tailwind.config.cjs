module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#011825",
        secondary: "#F0EFEB",
        tertiary: "#011825",
        quaternary: "#1689C8",
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero1.png')",
        "primary-gradient": "linear-gradient(90deg, rgba(1,24,37,1) 0%, rgba(0,0,0,1) 39%, rgba(1,24,37,1) 82%, rgba(0,0,0,1) 94%)",
        "tertiary-gradient": "linear-gradient(90deg, rgba(1,24,37,1) 0%, rgba(0,0,0,1) 39%, rgba(1,24,37,1) 82%, rgba(0,0,0,1) 94%)",
      },
      keyframes: {
        textRotate1: {
          '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate2: {
          '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 2.4s infinite alternate',
        textRotate2: 'textRotate2 2.4s infinite alternate',
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
    },
  },
  plugins: [],
};
