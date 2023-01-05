import { Typography, Box, ListItem, Dialog, Button, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { React, useState } from "react";

import AddIngredientsDialog from "./AddIngredientsDialog";
import AddMethod from "./AddMethod";
import ListItemFAB from "./ListItemFAB";
import ListItemTextField from "./ListItemTextField";
import RecipePhoto from "./RecipePhoto";
import SaveRecipe from "./SaveRecipe";
import FilterByTags from "../../../FilterByTags";

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
  //PULL OUT AND PUT IN HOOKS THEN USE RECIPE DIALOG CONTEXT
  // The Open/Close State for the ingredients sub dialog in this parent recipe dialog
  const [openIngredientsDialog, setOpenIngredientsDialog] = useState(false);
  const handleIngredientsDialogOpen = () => {
    setOpenIngredientsDialog(true);
  };
  const handleIngredientsDialogClose = () => {
    setOpenIngredientsDialog(false);
  };

  //The Open/Close State for the select avatar sub dialog in this parent recipe.
  const [openSelectAvatarDialog, setOpenSelectAvatarDialog] = useState(false);
  const handleOpenSelectAvatarDialog = () => {
    setOpenSelectAvatarDialog(true);
  };
  const handleCloseSelectAvatorDialog = () => {
    setOpenSelectAvatarDialog(false);
  };

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
        <ListItemTextField
          theme={RecipeDialogListItemTheme}
          marginType={"dense"}
          uniqueId={"Recipe title"}
          placeholderText={"Add recipe title"}
          fieldType={"text"}
          fullWidth={true}
        ></ListItemTextField>
        <ListItemTextField
          theme={RecipeDialogListItemTheme}
          marginType={"dense"}
          uniqueId={"Uploader name"}
          placeholderText={"Uploader (your name)"}
          fieldType={"text"}
          fullWidth={true}
        ></ListItemTextField>
        <ListItemFAB
          theme={RecipeDialogListItemTheme}
          open={openSelectAvatarDialog}
          handleOpen={handleOpenSelectAvatarDialog}
          closeSelectAvatarDialog={handleCloseSelectAvatorDialog}
        />
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <RecipePhoto />
        </ListItem>
        <ListItemTextField
          theme={RecipeDialogListItemTheme}
          marginType={"dense"}
          uniqueId={"Recipe description"}
          placeholderText={"Add recipe description"}
          fieldType={"text"}
          fullWidth={true}
        ></ListItemTextField>
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
