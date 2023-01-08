import { useState } from "react";

/**
 * Hook for state management of the gloabl Dialogs components in Eatsy.
 * Works by "toggling" the true false state for if the respective dialog is open or not.
 */
export const useToggleDialogStatus = () => {
  const [openStatus, setOpenStatus] = useState(false);
  const toggleDialogStatus = () => setOpenStatus((prevStatus) => !prevStatus);

  return { openStatus, toggleDialogStatus };
};
