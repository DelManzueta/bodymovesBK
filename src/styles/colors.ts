// Brand Colors
export const colors = {
  primary: '#fe5416', // Tangerine - Used for CTAs, important actions
  secondary: '#f9d84b', // Silk Gold - Used for accents, highlights
  
  // Neutral Colors
  charcoal: '#28283d', // Main text color
  silver: '#d9d9d9', // Borders, dividers
  dove: '#b7b7b9', // Secondary text, disabled states
  ivory: '#ffffeb', // Background color
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, #fe5416, #f9d84b)',
    glass: 'linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,0.6))'
  },
  
  // Semantic Colors
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6'
} as const;

// Opacity variants
export const opacities = {
  hover: 0.8,
  disabled: 0.5,
  overlay: 0.4
} as const;

// Color utilities
export const withOpacity = (color: string, opacity: number) => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
};