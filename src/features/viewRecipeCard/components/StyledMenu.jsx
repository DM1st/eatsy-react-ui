import { Menu } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

export default function StyledMenu(props) {
  return (
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
  );
}

StyledMenu.propTypes = {
  props: PropTypes.any,
};
