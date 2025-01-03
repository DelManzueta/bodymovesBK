// Color palette configuration
export const colors = {
  primary: '#b287fd', // Bright Lavender
  secondary: '#b2f142', // Lime Green
  neutral: {
    charcoal: '#262626', // Void Black
    silver: '#d8d9dd', // Light Gray
    dove: '#eae1ff', // Lavender Mist
    raisin: '#212121', // Raisin Black
    ivory: '#fdfbff',
  }
} as const;

// Brand configuration
export const brands = {
  main: 'BodyMoves',
  variants: {
    bk: 'BodyMoves BK',
    kids: 'BodyMoves Kids',
    arts: 'BodyMoves Arts',
  }
} as const;