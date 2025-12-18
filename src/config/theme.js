export const theme = {
  colors: {
    background: '#050a14',
    surface: '#0d1626',
    card: 'rgba(23, 33, 53, 0.7)',
    cardAlt: 'rgba(15, 23, 42, 0.8)',
    accent: '#38bdf8', // Sky 400
    accentWarm: '#fbbf24', // Amber 400
    text: '#f8fafc', // Slate 50
    muted: '#94a3b8', // Slate 400
    border: 'rgba(51, 65, 85, 0.5)', // Slate 700 with alpha
    success: '#34d399', // Emerald 400
    danger: '#f87171', // Red 400
    shadow: 'rgba(0, 0, 0, 0.4)'
  },
  radii: {
    sm: '10px',
    md: '16px',
    lg: '24px',
    pill: '999px'
  },
  spacing: {
    xs: '6px',
    sm: '12px',
    md: '18px',
    lg: '24px',
    xl: '36px'
  },
  typography: {
    heading: '"Outfit", "DM Sans", "Segoe UI", system-ui, sans-serif',
    body: '"Outfit", "DM Sans", "Segoe UI", system-ui, sans-serif'
  }
};

export function applyTheme(customTheme = theme) {
  const root = document.documentElement;
  Object.entries(customTheme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
  Object.entries(customTheme.radii).forEach(([key, value]) => {
    root.style.setProperty(`--radius-${key}`, value);
  });
  Object.entries(customTheme.spacing).forEach(([key, value]) => {
    root.style.setProperty(`--space-${key}`, value);
  });
  root.style.setProperty('--font-heading', customTheme.typography.heading);
  root.style.setProperty('--font-body', customTheme.typography.body);
}
