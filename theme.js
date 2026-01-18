import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#57292B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#5a2e3bff",
      contrastText: "#fff",
    },
  },
  typography: {
    h1: {
      fontSize: "96px",
      fontWeight: "bold",
      color: "#F0E7E7",
    },
    h4: {
      fontSize: "28px",
      fontWeight: "400",
      color: "#F0E7E7",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "400"
    },
    h6: {
      fontSize: "12px",
      fontWeight: "400",
      color: "#c2915dff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#57292B", // must be a color, not "primary"
        },
      },
    },

  },
});

export default theme;
