import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { React } from "react";

export const StyledExpandMoreIcon = styled((props) => {
  const { expand, ...other } = props;
  return (
    <IconButton expand={expand} {...other}>
      <ExpandMoreIcon />
    </IconButton>
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
