// colors.ts
export const colors = {
  // Primary colors
  deepNavy: '#0a1929',
  richNavy: '#0d2137',
  navyAccent: '#1a3a52',

  // Blue spectrum
  electricBlue: '#60a5fa',
  skyBlue: '#93c5fd',
  darkBlue: '#1e3a57',

  // Purple accents (for gradients)
  lavender: '#a78bfa',
  pink: '#f472b6',

  // Neutrals
  white: '#ffffff',
  offWhite: '#f1f5f9',
  lightGray: '#e0e7ff',
  mediumGray: '#cbd5e1',
  coolGray: '#94a3b8',
  darkGray: '#1f2937',

  // Overlays
  cardBackground: 'rgba(30, 58, 87, 0.6)',
  cardBackgroundHover: 'rgba(26, 55, 82, 0.4)',
  glassEffect: 'rgba(148, 163, 184, 0.1)',
  techTagBg: 'rgba(96, 165, 250, 0.15)',
  techTagBorder: 'rgba(96, 165, 250, 0.2)',
};

export const gradients = {
  primary: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
  background: 'linear-gradient(135deg, #0a1929 0%, #1a3a52 100%)',
  sidebar: 'linear-gradient(180deg, #0d2137 0%, #1a374d 100%)',
  card: 'linear-gradient(135deg, rgba(30, 58, 87, 0.6) 0%, rgba(26, 55, 82, 0.4) 100%)',
  accent: 'linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)',
};

export const fonts = {
  heading: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
  body: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
  mono: 'var(--font-jetbrains), "JetBrains Mono", monospace',
};

export const breakpoints = {
  smallMobile: '31.25rem',
  mobile: '52.5rem',
  tablet: '64rem',
  desktop: '90rem',
  ultrawide: '120rem',
};

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2.5rem',
  xl: '3.75rem',
  xxl: '5rem',
};

export const transitions = {
  fast: '0.2s ease',
  normal: '0.3s ease',
  slow: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
};

export default {
  colors,
  breakpoints,
  transitions,
  spacing,
  fonts,
  gradients,
};
