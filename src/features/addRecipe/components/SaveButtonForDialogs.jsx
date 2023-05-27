import { Container, Button } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { RecipeDialogListItemTheme } from "../themes/RecipeDialogListItemTheme";

/**
 * Save Recipe button to be used at the end of a Recipe Dialog
 * (For example creating a new recipe
 * or saving changes on an Edit existing recipe dialog) with the button text passed in as props
 */
export default function SaveButtonForDialogs(props) {
  return (
    <Container theme={RecipeDialogListItemTheme} variant="tertiary">
      <form onSubmit={props.formUpload}>
        <Button type="submit" onClick={props.closeRecipeDialog} variant="contained">
          {props.children}
        </Button>
      </form>
    </Container>
  );
}

//Check to ensure required props are passed through and are of the correct type.
SaveButtonForDialogs.propTypes = {
  formUpload: PropTypes.func.isRequired,
  closeRecipeDialog: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired, //any renderable object.
};
