import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { GlobalTheme } from "../themes/GlobalTheme";

/**
 * Floating Action Button to be used to open the dialog to create a new recipe.
 */
export default function AddRecipeButton({ changeRecipeDialogOpenStatus }) {
  return (
    <Fab aria-label="add" onClick={changeRecipeDialogOpenStatus} theme={GlobalTheme}>
      <AddIcon />
    </Fab>
  );
}

//Check required props are provided and of the correct type
AddRecipeButton.propTypes = {
  changeRecipeDialogOpenStatus: PropTypes.func.isRequired,
};
