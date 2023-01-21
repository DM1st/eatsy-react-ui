import ShareIcon from "@mui/icons-material/Share";
import { CardActions, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import RecipeRatingThumbs from "./RecipeRatingThumbs";
import { StyledExpandMoreIcon } from "./StyledExpandMoreIcon";

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
      <StyledExpandMoreIcon expand={isExpanded} onClick={handleExpandClick} aria-expanded={isExpanded} aria-label="show more" />
    </CardActions>
  );
}

//Check required props are provided and of the correct type.
RecipeCardActionsBar.propTypes = {
  handleExpandClick: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};
