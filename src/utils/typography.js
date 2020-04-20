import Typography from 'typography';

const typography = new Typography({
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '500', '700'],
    },
    {
      name: 'Merriweather',
      styles: ['400', '500', '400i', '700', '700i'],
    },
  ],
  baseFontSize: '10px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
});

// Export helper functions
// export const { scale, rhythm, options } = typography
export default typography;
