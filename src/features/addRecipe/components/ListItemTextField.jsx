import { TextField, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { RecipeDialogListItemTheme } from "../themes/RecipeDialogListItemTheme";

/**
 * Text Field component to be used in a list on a the Recipe dialogs.
 */
export default function ListItemTextField(props) {
  const { name, placeholderText, onChange } = props;

  return (
    <ListItem theme={RecipeDialogListItemTheme} divider>
      <TextField name={name} label={placeholderText} onChange={onChange} margin="dense" type="text" fullWidth />
    </ListItem>
  );
}

//check all required props are passed to the component and they are of the correct type.
ListItemTextField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
