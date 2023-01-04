import { Typography, Box, TextField, ListItem, Dialog, Button, Container } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { React, useState } from "react";

import AddIngredientsDialog from "./AddIngredientsDialog";
import AddMethod from "./AddMethod";
import ListItemTextField from "./ListItemTextField";
import RecipePhoto from "./RecipePhoto";
import SaveRecipe from "./SaveRecipe";
import SelectAvatar from "./SelectAvatar";
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
  // The Open/Close State for the ingredients sub dialog in this parent recipe dialog
  const [openIngredientsDialog, setOpenIngredientsDialog] = useState(false);
  const handleIngredientsDialogOpen = () => {
    setOpenIngredientsDialog(true);
  };
  const handleIngredientsDialogClose = () => {
    setOpenIngredientsDialog(false);
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
          type={"text"}
          fullWidth={true}
        ></ListItemTextField>
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <TextField
            margin="dense"
            id="Uploader name"
            label="Uploader (your name)"
            type="text"
            fullWidth
          />
        </ListItem>
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <SelectAvatar />
        </ListItem>
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <RecipePhoto />
        </ListItem>
        <ListItem divider theme={RecipeDialogListItemTheme}>
          <TextField
            margin="dense"
            id="Recipe description"
            label="Add recipe description"
            type="text"
            fullWidth
          />
        </ListItem>
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
