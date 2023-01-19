import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { CardActions, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { React } from "react";
import RecipeRatingThumbs from "./RecipeRatingThumbs";

//TODO
const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

/**
 * Recipe Card actions component to provide a bar with actions such as:
 * Voting the recipe up or down, sharing the recipe or expaning the card to view more detail.
 */
export default function RecipeCardActionsBar({ handleExpandClick, isExpanded }) {
  return (
    <CardActions disableSpacing>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <RecipeRatingThumbs />
      <ExpandMore expand={isExpanded ? 1 : 0} onClick={handleExpandClick} aria-expanded={isExpanded} aria-label="show more">
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
  );
}

//Check required props are provided and of the correct type.
RecipeCardActionsBar.propTypes = {
  handleExpandClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};
