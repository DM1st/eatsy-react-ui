import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Typography, Box, ListItem, Dialog, Button, Container } from "@mui/material";
import { React, useContext } from "react";
import AddIngredientsDialog from "./AddIngredientsDialog";
import AddMethod from "./AddMethod";
import FileUploadInput from "./FileUploadInput";
import ListItemTextField from "./ListItemTextField";
import ListItemWithTextAndFAB from "./ListItemWithTextAndFAB";
import SaveRecipe from "./SaveRecipe";
import SelectAvatar from "./SelectAvatar";
import TitleField from "./TitleField";
import { RecipeDialogContext } from "../../../contexts/RecipeDialogContext";
import FilterByTags from "../../../FilterByTags";
import { IngredientsDialogContext } from "../contexts/IngredientsDialogContext";
import { useSelectAvatarDialog } from "../hooks/useSelectAvatarDialog";
import { useToggleDialogStatus } from "../hooks/useToggleDialogStatus";
import { RecipeDialogListItemTheme } from "../themes/RecipeDialogListItemTheme";

/**
 * Recipe Dialog Component used for creating and editing recipies
 */
export const RecipeDialog = () => {
  //Access the RecipeDialog state from the RecipeDialog context API
  const { openRecipeDialog, changeRecipeDialogOpenStatus } = useContext(RecipeDialogContext);

  //Open or close state for the IngredientsDialog stored in AddRecipe feature hooks.
  const {
    openStatus: openIngredientsDialog,
    toggleDialogStatus: changeIngredientsDialogOpenStatus,
  } = useToggleDialogStatus();

  //value object containing IngredientsDialog state to be passed via context and not props.
  const ingredientsDialogState = {
    openIngredientsDialog,
    changeIngredientsDialogOpenStatus,
  };

  //The Provider component exposed by the Context API to provide the context to child Dialog.
  const { Provider } = IngredientsDialogContext;

  //Hook for the SelectAvatarDialog that is opened and closed from this Recipe Dialog
  const { openSelectAvatarDialog, handleOpenSelectAvatarDialog, handleCloseSelectAvatorDialog } =
    useSelectAvatarDialog();

  return (
    <Dialog
      fullWidth
      open={openRecipeDialog}
      onClose={changeRecipeDialogOpenStatus}
      aria-labelledby="parent-dialog-title"
      aria-describedby="parent-dialog-description"
    >
      <Box p={4} display="flex" flexDirection="column" alignItems="start" gap="2">
        <TitleField>
          <>Add New Recipe</>
        </TitleField>
        <ListItemTextField
          uniqueId={"Recipe title"}
          placeholderText={"Add recipe title"}
        ></ListItemTextField>
        <ListItemTextField
          uniqueId={"Uploader name"}
          placeholderText={"Uploader (your name)"}
        ></ListItemTextField>
        <ListItemWithTextAndFAB
          handleOpen={handleOpenSelectAvatarDialog}
          selectFabImageIcon={<CollectionsIcon />}
          childDialog={
            <SelectAvatar
              openSelectAvatarDialog={openSelectAvatarDialog}
              closeSelectAvatarDialog={handleCloseSelectAvatorDialog}
            />
          }
        >
          <>Select your avatar</>
        </ListItemWithTextAndFAB>
        <ListItemWithTextAndFAB
          optionalIdForHtmlLabel="add-recipe-contained-button-file"
          selectFabImageIcon={<AddPhotoAlternateIcon />}
          childDialog={<FileUploadInput label={"add-recipe-contained-button-file"} />}
        >
          <>Add Recipe photo</>
        </ListItemWithTextAndFAB>
        <ListItemTextField
          uniqueId={"Recipe description"}
          placeholderText={"Add recipe description"}
        ></ListItemTextField>
        <Provider value={ingredientsDialogState}>
          <ListItem divider theme={RecipeDialogListItemTheme}>
            <Container theme={RecipeDialogListItemTheme} variant="secondary">
              <Typography color="textSecondary">Add ingredients</Typography>
              <Button variant="outlined" onClick={changeIngredientsDialogOpenStatus}>
                Ingredients
              </Button>
              <AddIngredientsDialog />
            </Container>
          </ListItem>
        </Provider>
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <AddMethod />
        </ListItem>
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <FilterByTags />
        </ListItem>
        <SaveRecipe closeRecipeDialog={changeRecipeDialogOpenStatus} />
      </Box>
    </Dialog>
  );
};
