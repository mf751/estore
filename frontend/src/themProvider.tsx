import { useMemo } from "react";
import { useStore, type Mode } from "./store";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      bgtop: string;
      primarytop: string;
      secondarytop: string;
    };
  }
  interface PaletteOptions {
    custom: {
      bgtop: string;
    };
  }
}

const getThemePalette = (mode: Mode) => {
  const pick = (c1: string, c2: string) => (mode == "light" ? c1 : c2);
  return {
    palette: {
      mode: mode,

      primary: {
        main: "#0156FF",
        light: "#01A4FF",
        dark: "#003189",
      },

      error: {
        main: "#C94D3F",
      },

      success: {
        main: "#78A962",
      },

      background: {
        default: pick("#fff", "#18181A"),
        paper: "#F5F7FF",
      },

      text: {
        primary: pick("#000", "#fff"),
        secondary: "#aaaaaa",
      },

      divider: pick("#ddd", "#38383D"),
      custom: {
        bgtop: pick("#000", "#fff"),
        primarytop: pick("#fff", "#000"),
        secondarytop: pick("#aaa", "#555"),
      },
    },
    typography: {
      fontFamily: "Poppins, Roboto, Cairo, sans-serif",
    },
  };
};
export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const {
    state: { mode },
  } = useStore();
  const theme = useMemo(() => {
    return createTheme(getThemePalette(mode));
  }, [mode]);
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
