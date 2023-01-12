import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { RecipeDialogListItemTheme } from "../themes/RecipeDialogListItemTheme";

/**
 * The child componenet to display the title (passed in as children) on the RecipeDialog parent component.
 */
export default function TitleField({ children, variant }) {
  return (
    <Typography theme={RecipeDialogListItemTheme} variant={variant}>
      {children}
    </Typography>
  );
}

//Check that the prop is passed in when the TitleField function is called.
TitleField.propTypes = {
  children: PropTypes.node.isRequired, //any renderable object.
  variant: PropTypes.string.isRequired,
};
