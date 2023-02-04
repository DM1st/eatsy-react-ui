import LocalPizzaSharpIcon from "@mui/icons-material/LocalPizzaSharp";
import { CardHeader, Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
import PropTypes from "prop-types";
import { React } from "react";
import MoreOptionsMenu from "./MoreOptionsMenu";
import { UseMoreOptionsMenuState } from "../hooks/useMoreOptionsMenuState";

/**
 * Recipe Card Header component to be implemented on the recipe cards
 * and display data such as uploader avatar, recipe title and more options menu
 */
export default function RecipeCardHeader({ recipeTitle, recipeAuthor }) {
  //MoreOptionsMenu state for the RecipeCard stored in RecipeCard feature hooks
  const { anchorEl, open, handleClick, handleClose } = UseMoreOptionsMenuState();

  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
          <LocalPizzaSharpIcon />
        </Avatar>
      }
      title={recipeTitle}
      subheader={recipeAuthor}
      action={<MoreOptionsMenu handleClick={handleClick} handleClose={handleClose} anchorEl={anchorEl} open={open} />}
    />
  );
}

//Check required props are provided and are of the correct type.
RecipeCardHeader.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  recipeAuthor: PropTypes.string.isRequired,
};
