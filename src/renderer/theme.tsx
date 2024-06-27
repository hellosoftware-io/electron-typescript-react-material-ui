import { createTheme } from "@mui/material/styles";

// Create a Material-UI theme instance
// https://mui.com/customization/theming/
const theme = createTheme({
  palette: {
    primary: {
      main: "#C50102",
    },
    secondary: {
      main: "#FFF",
    },
    background: {
      default: "#E9EBED",
    },
  },
  typography: {
    fontWeightMedium: 600,
    fontSize: 17,
    h1: {
      fontSize: "2.6rem",
      fontWeight: 400,
      color: "#050505",
    },
    h2:{
      fontSize: "1.4rem",
      fontWeight: 200,
      color: "#050505"
    },
    body1: {
      color: "#FFF",
    },
  },
});

export default theme;
