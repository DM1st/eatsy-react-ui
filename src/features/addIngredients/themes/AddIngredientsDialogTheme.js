import { createTheme } from "@mui/material/styles";

/**
 * The common theme to apply to all components in the AddIngredientsDialogTheme
 */
export const AddIngredientsDialogTheme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          width: "100%",
          justifyContent: "space-between",
          align: "center",
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "100%",
          display: "flex",
          align: "center",
          paddingTop: "20px",
          justifyContent: "end",
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
        },
      },
    },
  },
});
