import { useState } from "react";

/**
 * Hook for state management of the useSelectAvatarDialog child component of the RecipeDialog.
 */
export const useSelectAvatarDialog = () => {
  const [openSelectAvatarDialog, setOpenSelectAvatarDialog] = useState(false);
  const handleOpenSelectAvatarDialog = () => {
    setOpenSelectAvatarDialog(true);
  };
  const handleCloseSelectAvatorDialog = () => {
    setOpenSelectAvatarDialog(false);
  };
  return { openSelectAvatarDialog, handleOpenSelectAvatarDialog, handleCloseSelectAvatorDialog };
};
