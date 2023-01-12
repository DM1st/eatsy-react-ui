import { IconButton, Avatar } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

/**
 * Reusable component for individual stack items, such as in the ListItemRows of the SelectAvatar dialog
 */
export default function StackItem({ color, label, children }) {
  return (
    <IconButton>
      <Avatar sx={{ bgcolor: color }} aria-label={label}>
        {children}
      </Avatar>
    </IconButton>
  );
}

//Check that the correct props and type are passed in when the StackItem function is called.
StackItem.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
