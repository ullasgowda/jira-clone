import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // Choose a color that is professional and not too bright
      main: "#5c6bc0", // A shade of blue
      light: "#8e99f3",
      dark: "#26418f",
      contrastText: "#fff",
    },
    secondary: {
      // A contrasting color for buttons, highlights, etc
      main: "#ff7043", // A shade of orange
      light: "#ffa270",
      dark: "#c63f17",
      contrastText: "#000",
    },
    background: {
      default: "#f4f5f7", // A light grey for the background
      paper: "#fff",
    },
    // You can also define error, warning, info, success as needed
  },
  typography: {
    // Choose a professional, readable font
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: { fontSize: "2.5rem" },
    h2: { fontSize: "2rem" },
    h3: { fontSize: "1.75rem" },
    // ... other typography settings
  },
  // You can also customize other aspects like shape, transitions, spacing, etc.
});

export default theme;
