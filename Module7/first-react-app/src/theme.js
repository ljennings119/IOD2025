import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff9800",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
  },
});

export default theme;
