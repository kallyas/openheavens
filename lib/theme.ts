'use client';

import { createTheme } from '@mui/material/styles';

// Open Heavens Theme
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5b21b6', // Purple
      light: '#7c3aed',
      dark: '#4c1d95',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f97316', // Orange
      light: '#fb923c',
      dark: '#ea580c',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#eab308', // Gold/Yellow
      light: '#facc15',
      dark: '#ca8a04',
      contrastText: '#000000',
    },
    background: {
      default: '#0a0a0a',
      paper: '#171717',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d4d4d4',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: '4rem',
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
    },
    h2: {
      fontWeight: 800,
      fontSize: '3rem',
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #ca8a04 0%, #facc15 100%)',
          color: '#000',
          '&:hover': {
            background: 'linear-gradient(135deg, #eab308 0%, #facc15 100%)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;
