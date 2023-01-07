import { TextField, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { RecipeDialogListItemTheme } from "../styles/RecipeDialogListItemTheme";

export default function RecipeDialogListItemField(props) {
  const { uniqueId, placeholderText } = props;

  return (
    <ListItem theme={RecipeDialogListItemTheme} divider>
      <TextField id={uniqueId} label={placeholderText} margin="dense" type="text" fullWidth />
    </ListItem>
  );
}

RecipeDialogListItemField.propTypes = {
  uniqueId: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
};
