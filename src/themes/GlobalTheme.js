import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { React } from "react";

/**
 * The common theme to apply to global components in the application.
 *
 * E.g. Have the floating action button fixed in the bottom right of the screen at all times above the primary components
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

/**
 * Cannot override styles of the Mui Box component in the above GlobalTheme createTheme method.
 * This is because the 'Box' does not have a name and styleOverrides callback when it is styled using the styled() API.
 * Therefore this function creates a new component -'StyledBox' that returns a Box with inline sx props.
 *
 * These sx props are needed so that when a footer is used below the box, it sticks to bottom of screen like a 'sticky footer'
 * This will be the case even if the content in the box does not fill the screen. The footer will remain at the bottom of the page.
 * minHeight prop has full vertical height (100vh) so a Footer element would be forced to the bottom of the screen.
 */
export default function StyledBox({ children }) {
  return <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>{children}</Box>;
}

//Check required props are provided and of the correct type for the StyledBox component
StyledBox.propTypes = {
  children: PropTypes.node.isRequired,
};
