import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Typography, Box, ListItem, Dialog, Button, Container } from "@mui/material";
import { React, useContext } from "react";
import AddIngredientsDialog from "./AddIngredientsDialog";
import AddMethod from "./AddMethod";
import FileUploadInput from "./FileUploadInput";
import ListItemTextField from "./ListItemTextField";
import ListItemWithTextAndFAB from "./ListItemWithTextAndFAB";
import RecipeDialogTitleField from "./RecipeDialogTitleField";
import SaveRecipe from "./SaveRecipe";
import SelectAvatar from "./SelectAvatar";
import { RecipeDialogContext } from "../../../contexts/RecipeDialogContext";
import FilterByTags from "../../../FilterByTags";
import { useIngredientsDialog } from "../hooks/useIngredientsDialog";
import { useSelectAvatarDialog } from "../hooks/useSelectAvatarDialog";
import { RecipeDialogListItemTheme } from "../themes/RecipeDialogListItemTheme";

/**
 * Recipe Dialog Component used for creating and editing recipies
 */
export const RecipeDialog = () => {
  const { openRecipeDialog, changeRecipeDialogOpenStatus } = useContext(RecipeDialogContext);
  //Hook for the IngredientsDialog that is opened and closed from this Recipe Dialog
  const { openIngredientsDialog, handleIngredientsDialogOpen, handleIngredientsDialogClose } =
    useIngredientsDialog();

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
        <RecipeDialogTitleField>
          <>Add New Recipe</>
        </RecipeDialogTitleField>
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
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <Container theme={RecipeDialogListItemTheme} variant="secondary">
            <Typography color="textSecondary">Add ingredients</Typography>
            <Button variant="outlined" onClick={handleIngredientsDialogOpen}>
              Ingredients
            </Button>
            <AddIngredientsDialog
              open={openIngredientsDialog}
              closeIngredientsDialog={handleIngredientsDialogClose}
            />
          </Container>
        </ListItem>
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
