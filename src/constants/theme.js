import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",

    common: {
      white: "#ccd6f6",
    },
    primary: {
      dark: "#8892b0",
      main: "#ccd6f6",
      light: "#a8b2d1",
    },
    secondary: {
      main: "#6870fa",
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
});
