import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light', // Explicitly set the mode to light
    primary: {
      main: '#75B9BE', // Soft Blue for primary
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D0D6B5', // Light Olive for secondary
      contrastText: '#2F2F2F',
    },
    error: {
      main: '#6B0F1A', // Deep Red for error
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F9B5AC', // Soft Coral for warning
      contrastText: '#2F2F2F',
    },
    info: {
      main: '#264653', // Dark Cyan for info
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#093824', // Dark Green for success
      contrastText: '#FFFFFF',
    },
    additional: {
      magenta: '#987284', // Muted Magenta
      lightPurple: '#EE7674', // Light Red
      deepPurple: '#31081F', // Deep Maroon
      darkGrey: '#393424', // Dark Olive
      lightPastelPink: '#F7E1D7', // Retained from previous theme
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
      xxl: 1920,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Explicitly set the mode to dark
    primary: {
      main: '#987284', // Muted Magenta for primary
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EE7674', // Light Red for secondary
      contrastText: '#2F2F2F',
    },
    error: {
      main: '#31081F', // Deep Maroon for error
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#393424', // Dark Olive for warning
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#75B9BE', // Soft Blue for info
      contrastText: '#2F2F2F',
    },
    success: {
      main: '#264653', // Dark Cyan for success
      contrastText: '#FFFFFF',
    },
    additional: {
      deepPurple: '#6B0F1A', // Deep Red
      darkGrey: '#D0D6B5', // Light Olive
      lightPastelPink: '#F9B5AC', // Soft Coral
      aquamarine: '#093824', // Dark Green
      brown: '#F7E1D7', // Retained from previous theme
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export { lightTheme, darkTheme };
