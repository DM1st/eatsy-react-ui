import LocalPizzaSharpIcon from "@mui/icons-material/LocalPizzaSharp";
import { CardHeader, Avatar } from "@mui/material";
import { green } from "@mui/material/colors";
import PropTypes from "prop-types";
import { React, useState } from "react";
import MoreOptionsMenu from "./MoreOptionsMenu";

/**
 * Recipe Card Header component to be implemented on the recipe cards
 * and display data such as uploader avatar, recipe title and more options menu
 */
export default function RecipeCardHeader({ recipeTitle, recipeAuthor }) {
  //Define state for the basic more options menu.
  //A basic menu opens over the anchor element by default (and ensures all items are visible. )
  const [anchorEl, setAnchorEl] = useState(null);
  //Use boolean to track wheter menu should be open or closed based on the anchor state.
  const open = Boolean(anchorEl);
  //Set the anchor for the basic menu to be over the button that was clicked
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //Choosing an option should immediatley commit the option and close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

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

RecipeCardHeader.propTypes = {
  recipeTitle: PropTypes.string.isRequired,
  recipeAuthor: PropTypes.string.isRequired,
};
