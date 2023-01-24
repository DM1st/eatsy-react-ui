import { useState } from "react";

/**
 * Hook for state management of the RecipeCard collapsable component in Eatsy.
 * Works by "toggling" the true false state for if the respective card collapsable
 * content is open or not.
 */
export const useToggleDialogStatus = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const toggleDialogStatus = () => setOpenStatus((prevStatus) => !prevStatus);

  return { openStatus, toggleDialogStatus };
};
