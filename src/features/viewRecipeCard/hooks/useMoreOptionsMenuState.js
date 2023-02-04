import { useState } from "react";

/**
 * State management for the RecipeCardHeader MoreOptionsMenu
 */
export const UseMoreOptionsMenuState = () => {
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

  return { anchorEl, open, handleClick, handleClose };
};
