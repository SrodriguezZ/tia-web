import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#0071bc",
      "100": "#b3d4fc",
    },
    secondary: {
      main: "#662d87",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    grey: {
      100: "#fafafa",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#f5f5f5",
      900: "#e0e0e0",
    },
  },
});

export default theme;