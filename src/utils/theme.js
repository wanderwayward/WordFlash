import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#75B9BE',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D0D6B5',
      contrastText: '#2F2F2F',
    },
    error: {
      main: '#6B0F1A',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#F9B5AC',
      contrastText: '#2F2F2F',
    },
    info: {
      main: '#264653',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#093824',
      contrastText: '#FFFFFF',
    },
    additional: {
      magenta: '#987284',
      lightPurple: '#EE7674',
      deepPurple: '#31081F',
      darkGrey: '#393424',
      lightPastelPink: '#F7E1D7',
    },
    background: {
      default: '#f7f7f7', // Light background color
      paper: '#fff',
    },
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
    mode: 'dark',
    primary: {
      main: '#987284',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#EE7674',
      contrastText: '#2F2F2F',
    },
    error: {
      main: '#31081F',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#393424',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#75B9BE',
      contrastText: '#2F2F2F',
    },
    success: {
      main: '#264653',
      contrastText: '#FFFFFF',
    },
    additional: {
      deepPurple: '#6B0F1A',
      darkGrey: '#D0D6B5',
      lightPastelPink: '#F9B5AC',
      aquamarine: '#093824',
      brown: '#F7E1D7',
    },
    background: {
      default: '#424242', // Dark background color
      paper: '#333333',
    },
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
