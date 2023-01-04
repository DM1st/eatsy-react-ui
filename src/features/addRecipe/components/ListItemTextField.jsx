import { TextField, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

export default function ListItemTextField(props) {
  const { theme, marginType, uniqueId, placeholderText, fieldType, fullWidth } = props;

  return (
    <ListItem theme={theme} divider>
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

ListItemTextField.propTypes = {
  theme: PropTypes.func.isRequired,
  marginType: PropTypes.string.isRequired,
  uniqueId: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  fieldType: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool.isRequired,
};
