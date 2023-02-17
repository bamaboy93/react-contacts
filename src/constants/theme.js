import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
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
              table: "#112240d8",
            },
          }
        : {
            primary: {
              dark: "#4d4d4d",
              main: "#676767",
              light: "#808080",
            },
            secondary: {
              dark: "#263c7a",
              main: "#3757b0",
              light: "#97aadf",
            },

            background: {
              default: "#fbfbfb",
              add: "#afef84e2",
              table: "#e8e8e8c9",
            },
          }),
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
            mode: mode,
            ...(mode === "dark"
              ? {
                  backgroundColor: "#112240",
                  color: "#6870fa",
                }
              : { backgroundColor: "#aff084" }),
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
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");

  localStorage.setItem("theme", mode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode(
          (prev) => (prev === "dark" ? "light" : "dark"),
          localStorage.setItem("theme", mode)
        ),
    }),

    [mode]
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
