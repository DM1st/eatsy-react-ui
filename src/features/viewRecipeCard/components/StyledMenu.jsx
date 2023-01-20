import { Menu } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { React } from "react";

/**
 * StyledMenu is a custom Menu component with a number of custom theme attributes applied.
 * This is to greatly enahnce the position (anchor) of the Menu as well as it's look and feel.
 *
 * The Styled API is used to create a custom Menu with the same capabilities as the core Menu component.
 * It takes the component to be wrapped (Menu) and creates a new component with the specified
 * theme changes that are provided.
 * Styled() can be used as an alternative to stylesOverride when the component for styling
 * does not have a 'name' and 'styleOverrides' callback when it is styled using the styled() API.
 *
 * Note: The PropTypes check has not been used with this component as the Spread Props (...props) function
 * has been used. This allows for generic menu props to be passed into this component which will
 * handle them.
 */
export const StyledMenu = styled((props) => (
  //These menu props specify where the anchor will be set in terms of both
  //the origin component and on the popout menu component.
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
  //Specified theme changes to be applied to the returned Menu component
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));
