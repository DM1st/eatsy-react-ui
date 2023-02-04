import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Box, Dialog } from "@mui/material";

import { React, useContext } from "react";
import SelectAvatarListItemRow from "./SelectAvatarListItemRow";
import FileUploadInput from "../../../components/FileUploadInput";
import ListItemWithTextAndFAB from "../../../components/ListItemWithTextAndFAB";
import TitleField from "../../addRecipe/components/TitleField";
import { PresetSelectAvatarOptions } from "../../addRecipe/config/PresetSelectAvatarOptions";
import { SelectAvatarDialogContext } from "../../addRecipe/contexts/SelectAvatarDialogContext";

/**
 * The child dialog of the RecipeDialog for selecting the avatar of the uploader for the recipe.
 */
export function SelectAvatarDialog() {
  //Access the SelectAvatar state from the SelectAvatare context API
  const { openSelectAvatarDialog, changeSelectAvatarDialogOpenStatus } = useContext(SelectAvatarDialogContext);

  //Props for the SelectAvatar usage of the ListItemFAB component for picking a custom avatar icon.
  const selectCustomAvatarProps = {
    hasDivider: false,
    optionalIdForHtmlLabel: "contained-button-avatar",
    selectFabImageIcon: <AddPhotoAlternateIcon />,
    fabSize: "small",
    childDialog: <FileUploadInput label={"contained-button-avatar"} />,
  };

  // The pre-configured options for a recipe uploader to choose from when selecting an avatar
  const presetSelectAvatarOptions = PresetSelectAvatarOptions;

  return (
    <Dialog open={openSelectAvatarDialog} onClose={changeSelectAvatarDialogOpenStatus}>
      <Box sx={{ padding: "10px" }}>
        <TitleField variant="h7">Pick a pre-set Avatar</TitleField>
        <SelectAvatarListItemRow {...presetSelectAvatarOptions.rowOne} />
        <SelectAvatarListItemRow {...presetSelectAvatarOptions.rowTwo} />
        <SelectAvatarListItemRow {...presetSelectAvatarOptions.rowThree} />
        <ListItemWithTextAndFAB {...selectCustomAvatarProps}>
          <>Or, upload your custom Avatar:</>
        </ListItemWithTextAndFAB>
      </Box>
    </Dialog>
  );
}
