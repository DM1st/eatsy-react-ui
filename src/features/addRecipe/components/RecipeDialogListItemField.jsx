import { TextField, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { RecipeDialogListItemTheme } from "../styles/RecipeDialogListItemTheme";

export default function RecipeDialogListItemField(props) {
  const { marginType, uniqueId, placeholderText, fieldType, fullWidth } = props;

  return (
    <ListItem theme={RecipeDialogListItemTheme} divider>
      <TextField
        margin={marginType}
        id={uniqueId}
        label={placeholderText}
        type={fieldType}
        fullWidth={fullWidth}
      />
    </ListItem>
  );
}

RecipeDialogListItemField.propTypes = {
  marginType: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
};
