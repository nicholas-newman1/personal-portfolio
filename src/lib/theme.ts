'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#10b981',
      light: '#34d399',
      dark: '#059669',
    },
    secondary: {
      main: '#6ee7b7',
    },
    background: {
      default: '#09090b',
      paper: '#18181b',
    },
    text: {
      primary: '#fafafa',
      secondary: '#a1a1aa',
    },
    divider: 'rgba(255, 255, 255, 0.06)',
  },
  typography: {
    fontFamily: '"Outfit", "Inter", system-ui, sans-serif',
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
          padding: '10px 20px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)',
          },
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.12)',
          '&:hover': {
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(24, 24, 27, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: 'rgba(16, 185, 129, 0.3)',
            transform: 'translateY(-2px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.75rem',
        },
        outlined: {
          borderColor: 'rgba(255, 255, 255, 0.12)',
          '&:hover': {
            borderColor: 'rgba(16, 185, 129, 0.5)',
          },
        },
        filled: {
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          color: '#34d399',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#10b981',
          textDecorationColor: 'rgba(16, 185, 129, 0.3)',
          transition: 'all 0.2s ease',
          '&:hover': {
            color: '#34d399',
            textDecorationColor: '#34d399',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
