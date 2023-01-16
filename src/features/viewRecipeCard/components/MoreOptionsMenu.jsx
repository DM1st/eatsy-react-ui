import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, Divider } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { React } from "react";

//TODO - wtf is this
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

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
