import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#99D4D4",
      dark: "#01037B",
    },
    secondary: {
      main: "#FF9C00",
      dark: "#FF5A22",
    },
  },
  typography: {
    fontFamily: ["Chivo Mono", "monospace"].join(","),
    fontSize: 18,
  },
});
