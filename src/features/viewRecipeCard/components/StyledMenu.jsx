import { Menu } from "@mui/material";
import { React } from "react";

/**
 * Styled Menu is a custom Menu component with a number of custom theme attributes applied.
 * This is to greatly enahnce the position of the Menu as well as it's look and feel.
 *
 * The PropTypes check has not been used with this component as the Spread Props (...props) function
 * has been used. This allows for generic menu props to be passed into this component which will
 * handle them.
 */
export default function StyledMenu(props) {
  return (
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
  );
}
