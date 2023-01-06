import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

/**
 * The common theme to apply to all list item fields in the RecipeDialog
 */
export const RecipeDialogListItemTheme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: "10px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          color: blue[700],
          backgroundColor: "white",
        },
      },
    },
  },
});