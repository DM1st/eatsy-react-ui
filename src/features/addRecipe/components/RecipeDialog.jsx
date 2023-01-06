import CollectionsIcon from "@mui/icons-material/Collections";
import { Typography, Box, ListItem, Dialog, Button, Container } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import AddIngredientsDialog from "./AddIngredientsDialog";
import AddMethod from "./AddMethod";
import ListItemwithTextAndFAB from "./ListItemwithTextAndFAB";
import RecipeDialogListItemField from "./RecipeDialogListItemField";
import RecipeDialogTitleField from "./RecipeDialogTitleField";
import RecipePhoto from "./RecipePhoto";
import SaveRecipe from "./SaveRecipe";
import SelectAvatar from "./SelectAvatar";
import FilterByTags from "../../../FilterByTags";
import { useIngredientsDialog } from "../hooks/useIngredientsDialog";
import { useSelectAvatarDialog } from "../hooks/useSelectAvatarDialog";
// import { useToggleDialogStatus } from "../hooks/useToggleDialogStatus";
import { RecipeDialogListItemTheme } from "../styles/RecipeDialogListItemTheme";

/**
 * Recipe Dialog Component used for creating and editing recipies
 */
export const RecipeDialog = ({ open, closeRecipeDialog }) => {
  //   const {openStatus: }

  //Hook for the IngredientsDialog that is opened and closed from this Recipe Dialog
  const { openIngredientsDialog, handleIngredientsDialogOpen, handleIngredientsDialogClose } =
    useIngredientsDialog();

  //Hook for the SelectAvatarDialog that is opened and closed from this Recipe Dialog
  const { openSelectAvatarDialog, handleOpenSelectAvatarDialog, handleCloseSelectAvatorDialog } =
    useSelectAvatarDialog();

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={closeRecipeDialog}
      aria-labelledby="parent-dialog-title"
      aria-describedby="parent-dialog-description"
    >
      <Box p={4} display="flex" flexDirection="column" alignItems="start" gap="2">
        <RecipeDialogTitleField>
          <>Add New Recipe</>
        </RecipeDialogTitleField>
        <RecipeDialogListItemField
          marginType={"dense"}
          uniqueId={"Recipe title"}
          placeholderText={"Add recipe title"}
          fieldType={"text"}
          fullWidth={true}
        ></RecipeDialogListItemField>
        <RecipeDialogListItemField
          marginType={"dense"}
          uniqueId={"Uploader name"}
          placeholderText={"Uploader (your name)"}
          fieldType={"text"}
          fullWidth={true}
        ></RecipeDialogListItemField>
        <ListItemwithTextAndFAB
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
        </ListItemwithTextAndFAB>
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <RecipePhoto />
        </ListItem>
        <RecipeDialogListItemField
          marginType={"dense"}
          uniqueId={"Recipe description"}
          placeholderText={"Add recipe description"}
          fieldType={"text"}
          fullWidth={true}
        ></RecipeDialogListItemField>
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <Container
            sx={{
              width: "100%",
              display: "flex",
              align: "center",
              paddingTop: "5px",
              paddingBottom: "5px",
              justifyContent: "space-between",
              paddingRight: "0",
              paddingLeft: "0",
            }}
          >
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
        <SaveRecipe closeRecipeDialog={closeRecipeDialog} />
      </Box>
    </Dialog>
  );
};

RecipeDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  closeRecipeDialog: PropTypes.func.isRequired,
};
