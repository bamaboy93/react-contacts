import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    common: {
      white: "#fff",
    },
    primary: {
      dark: "#8892b0",
      main: "#ccd6f6",
      light: "#a8b2d1",
    },
    secondary: {
      dark: "#555eff",
      main: "#6870fa",
      light: "#999ffc",
    },

    background: {
      default: "#0a192f",
      add: "#112240",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: 700,
    fontSize: 12,
    h1: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 14,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#112240",
          color: "#6870fa",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});
