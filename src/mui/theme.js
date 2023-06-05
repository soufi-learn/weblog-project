import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008ecc",
    },
    white: {
      main: "#fff",
    },
  },

  typography: {
    fontFamily: `"Varela Round", "Roboto", "Arial"`,
  },

  direction: "ltr",
});

export default theme;
