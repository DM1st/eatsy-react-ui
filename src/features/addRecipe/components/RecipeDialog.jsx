import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Typography, Box, ListItem, Dialog, Button, Container } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import AddIngredientsDialog from "./AddIngredientsDialog";
import AddMethod from "./AddMethod";
import FileUploadInput from "./FileUploadInput";
import ListItemWithTextAndFAB from "./ListItemWithTextAndFAB";
import RecipeDialogListItemField from "./RecipeDialogListItemField";
import RecipeDialogTitleField from "./RecipeDialogTitleField";
import SaveRecipe from "./SaveRecipe";
import SelectAvatar from "./SelectAvatar";
import FilterByTags from "../../../FilterByTags";
import { useIngredientsDialog } from "../hooks/useIngredientsDialog";
import { useSelectAvatarDialog } from "../hooks/useSelectAvatarDialog";
import { RecipeDialogListItemTheme } from "../styles/RecipeDialogListItemTheme";

/**
 * Recipe Dialog Component used for creating and editing recipies
 */
export const RecipeDialog = (props) => {
  const { openRecipeDialog, changeRecipeDialogOpenStatus } = props;
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
        <RecipeDialogListItemField
          uniqueId={"Recipe title"}
          placeholderText={"Add recipe title"}
          fieldType={"text"}
        ></RecipeDialogListItemField>
        <RecipeDialogListItemField
          uniqueId={"Uploader name"}
          placeholderText={"Uploader (your name)"}
        ></RecipeDialogListItemField>
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
        <RecipeDialogListItemField
          uniqueId={"Recipe description"}
          placeholderText={"Add recipe description"}
        ></RecipeDialogListItemField>
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

RecipeDialog.propTypes = {
  openRecipeDialog: PropTypes.bool.isRequired,
  changeRecipeDialogOpenStatus: PropTypes.func.isRequired,
};
