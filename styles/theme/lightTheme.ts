// @mui
import { createTheme } from '@mui/material/styles';
// common theme options
import commonThemeOptions from 'styles/theme/commonThemeOptions';

const { components: commonComponentsOptions } = commonThemeOptions;

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF6347',
      light: '#FF826B',
      dark: '#B24531',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2196F3',
      light: '#4DABF5',
      dark: '#1769AA',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#FFFFFF',
      light: '#FFFFFF',
      dark: '#B2B2B2',
      contrastText: '#2058ab',
    },
    background: {
      default: '#93bdc9',
      paper: '#fff',
    },
    text: {
      primary: '#2e3030',
      secondary: '#2e3030',
      disabled: '#777777',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: '#2e3030',
        },
      },
    },
    ...commonComponentsOptions,
  },
});

export default lightTheme;
