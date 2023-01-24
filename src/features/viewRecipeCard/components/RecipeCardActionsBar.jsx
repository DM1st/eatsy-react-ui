import ShareIcon from "@mui/icons-material/Share";
import { CardActions, IconButton } from "@mui/material";
import { React, useContext } from "react";
import RecipeRatingThumbs from "./RecipeRatingThumbs";
import { StyledExpandMoreIcon } from "./StyledExpandMoreIcon";
import { RecipeCardContext } from "../contexts/RecipeCardContext";

/**
 * Recipe Card actions component to provide a bar with actions such as:
 * Voting the recipe up or down, sharing the recipe or expaning the card to view more detail.
 */
export default function RecipeCardActionsBar() {
  //Access the RecipeCard state from the RecipeCard feature level context API
  const { isExpanded, handleExpandClick } = useContext(RecipeCardContext);

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
