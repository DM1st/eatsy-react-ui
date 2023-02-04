import { blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

/**
 * The common theme to apply to all components in the Dialogs
 */
export const DialogListItemTheme = createTheme({
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
      variants: [
        {
          props: { variant: "primary" },
          style: {
            padding: "0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            width: "100%",
            display: "flex",
            align: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            justifyContent: "space-between",
            paddingRight: "0",
            paddingLeft: "0",
          },
        },
        {
          props: { variant: "tertiary" },
          style: {
            width: "100%",
            display: "flex",
            align: "center",
            paddingTop: "20px",
            justifyContent: "end",
            paddingRight: "0",
            paddingLeft: "0",
          },
        },
      ],
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
