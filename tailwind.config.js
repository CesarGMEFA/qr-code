module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        white: 'hsl(0, 0%, 100%)',
        lightGray: 'hsl(212, 45%, 89%)',
        grayishBlue: 'hsl(220, 15%, 55%)',
        darkBlue: 'hsl(218, 44%, 22%)',
      },
    },
    fontFamily: {
      outfit: ['Outfit'],
    },
    fontSize: {
      paragraph: '0.9375rem',
      '1.2': '0.75rem',
      '18': '1.125rem',
    },
    lineHeight: {
      '1.2': '1rem',
      '1.5': '1.485rem',
      '18': '1.5rem',
    },
    maxWidth: {
      '350': '350px',
    },
  },
  plugins: [],
}
