import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { RecipeDialogListItemTheme } from "../themes/RecipeDialogListItemTheme";

/**
 * The child componenet to display the title on the RecipeDialog parent component.
 */
export default function RecipeDialogTitleField({ children }) {
  return (
    <Typography theme={RecipeDialogListItemTheme} variant="h5">
      {children}
    </Typography>
  );
}

RecipeDialogTitleField.propTypes = {
  children: PropTypes.node.isRequired, //any renderable object.
};
