import { createTheme } from '@mui/material/styles';
// mui theme
export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    body1: {
      fontSize: '16px',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
        },
      },
    },
  },
});
