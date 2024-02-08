import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F6F52",
      light: "#728b74",
      dark: "#3f5841",
      contrastText: "#fff",
    },
    secondary: {
      main: "#739072",
      light: "#8fa68e",
      dark: "#5c735b",
      contrastText: "#000",
    },
    background: {
      default: "#D2E3C8",
      paper: "#fff",
    },
    // You can also define error, warning, info, success as needed
  },
  typography: {
    // Choose a professional, readable font
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontSize: "2.5rem", color: "#4F6F52" },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.75rem" },
    // ... other typography settings
  },
  // You can also customize other aspects like shape, transitions, spacing, etc.
});

export default theme;
