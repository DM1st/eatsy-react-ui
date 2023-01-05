import { Typography, Box, ListItem, Dialog, Button, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { React } from "react";
import AddIngredientsDialog from "./AddIngredientsDialog";
import AddMethod from "./AddMethod";
import ListItemFAB from "./ListItemFAB";
import RecipeDialogListItemField from "./RecipeDialogListItemField";
import RecipePhoto from "./RecipePhoto";
import SaveRecipe from "./SaveRecipe";
import FilterByTags from "../../../FilterByTags";
import { useIngredientsDialog } from "../hooks/useIngredientsDialog";
import { useSelectAvatarDialog } from "../hooks/useSelectAvatarDialog";

const RecipeDialogListItemTheme = createTheme({
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingRight: "0",
          paddingLeft: "0",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: "10px",
        },
      },
    },
  },
});

/**
 * Recipe Dialog Component used for creating and editing recipies
 */
export const RecipeDialog = ({ open, closeRecipeDialog }) => {
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
        <Typography variant="h5" theme={RecipeDialogListItemTheme}>
          Add New Recipe
        </Typography>
        <RecipeDialogListItemField
          theme={RecipeDialogListItemTheme}
          marginType={"dense"}
          uniqueId={"Recipe title"}
          placeholderText={"Add recipe title"}
          fieldType={"text"}
          fullWidth={true}
        ></RecipeDialogListItemField>
        <RecipeDialogListItemField
          theme={RecipeDialogListItemTheme}
          marginType={"dense"}
          uniqueId={"Uploader name"}
          placeholderText={"Uploader (your name)"}
          fieldType={"text"}
          fullWidth={true}
        ></RecipeDialogListItemField>
        <ListItemFAB
          theme={RecipeDialogListItemTheme}
          open={openSelectAvatarDialog}
          handleOpen={handleOpenSelectAvatarDialog}
          closeSelectAvatarDialog={handleCloseSelectAvatorDialog}
        />
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <RecipePhoto />
        </ListItem>
        <RecipeDialogListItemField
          theme={RecipeDialogListItemTheme}
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
