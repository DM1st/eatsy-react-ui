import { createTheme } from "@mui/material/styles";

/**
 * The common theme to apply to global components in the application.
 */
export const GlobalTheme = createTheme({
  components: {
    MuiFab: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
          backgroundColor: "#9c27b0",
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
        },
      },
    },
  },
});
