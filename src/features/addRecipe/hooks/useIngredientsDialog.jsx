import { useState } from "react";
/**
 * Hook for state management of the useIngredientsDialog child component of the RecipeDialog.
 */
export const useIngredientsDialog = () => {
  const [openIngredientsDialog, setOpenIngredientsDialog] = useState(false);
  const handleIngredientsDialogOpen = () => {
    setOpenIngredientsDialog(true);
  };
  const handleIngredientsDialogClose = () => {
    setOpenIngredientsDialog(false);
  };
  return { openIngredientsDialog, handleIngredientsDialogOpen, handleIngredientsDialogClose };
};
