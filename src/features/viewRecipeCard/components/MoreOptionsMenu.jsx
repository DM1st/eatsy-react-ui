import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, MenuItem, Divider } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { StyledMenu } from "./StyledMenu";

/**
 * The More Options menu which is anchored to a hamburger icon when clicked.
 * Options can include things like Edit, Delete, Archive etc...
 */
export default function MoreOptionsMenu({ handleClick, handleClose, anchorEl, open }) {
  return (
    <>
      <IconButton
        id="customized-hamburger-button"
        aria-controls={open ? "customized-hamburger-menu" : undefined}
        aria-label="settings"
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        id="customized-hamburger-menu"
        MenuListProps={{
          "aria-labelledby": "customized-hamburger-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple disabled>
          <DeleteSharpIcon />
          Delete
        </MenuItem>
      </StyledMenu>
    </>
  );
}

//Check required props are provided and of the correct type.
MoreOptionsMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.object,
  open: PropTypes.bool.isRequired,
};
