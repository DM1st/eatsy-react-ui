import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CollectionsIcon from "@mui/icons-material/Collections";
import { Box, ListItem, Dialog } from "@mui/material";
import PropTypes from "prop-types";
import { React, useContext } from "react";
import { useState } from "react";
import ListItemTextField from "./ListItemTextField";
import ListItemWithButton from "./ListItemWithButton";
import SaveButtonForDialogs from "./SaveButtonForDialogs";
import TitleField from "./TitleField";
import FileUploadInput from "../../../components/FileUploadInput";
import FilterByTagsSearch from "../../../components/FilterByTagsSearch";
import ListItemWithTextAndFAB from "../../../components/ListItemWithTextAndFAB";
import { RecipeDialogContext } from "../../../contexts/RecipeDialogContext";
import { IngredientsDialogContext } from "../contexts/IngredientsDialogContext";
import { SelectAvatarDialogContext } from "../contexts/SelectAvatarDialogContext";
import { useToggleDialogStatus } from "../hooks/useToggleDialogStatus";
import { RecipeDialogListItemTheme } from "../themes/RecipeDialogListItemTheme";
import API from "@/api/axios";
import { AddIngredientsDialog } from "@/features/addIngredients";
import { SelectAvatarDialog } from "@/features/selectAvatar";

//Initial values for the form
const initialValues = {
  recipeTitle: "",
  uploaderName: "",
  recipeDescription: "",
};

/**
 * Recipe parent dialog Component which can be used for creating and editing recipies.
 */
export function RecipeDialog(props) {
  //Access the RecipeDialog state from the RecipeDialog context(gloabl level) API
  const { recipeDialogOpen, changeRecipeDialogOpenStatus } = useContext(RecipeDialogContext);

  //Open or close state for the IngredientsDialog stored in AddRecipe feature hooks (store the ingredients dialog state in the parent (RecipeDialog) component).
  const { openStatus: openIngredientsDialog, toggleDialogStatus: changeIngredientsDialogOpenStatus } = useToggleDialogStatus();

  //value object containing IngredientsDialog state to be passed via context and not props.
  const ingredientsDialogState = {
    openIngredientsDialog,
    changeIngredientsDialogOpenStatus,
  };

  //Open or close state for the SelectAvatarDialog stored in AddRecipe feature hooks (store the selectAvatar dialog state in the parent (RecipeDialog) component).
  const { openStatus: openSelectAvatarDialog, toggleDialogStatus: changeSelectAvatarDialogOpenStatus } = useToggleDialogStatus();

  //value object containing SelectAvatarDialog state to be passed via context and not props.
  const selectAvatarDialogState = {
    openSelectAvatarDialog,
    changeSelectAvatarDialogOpenStatus,
  };

  //Props for the Add Photo usage of the ListItemFAB component.
  const addPhotoListItemFABProps = {
    hasDivider: true,
    optionalIdForHtmlLabel: "add-recipe-contained-button-file",
    selectFabImageIcon: <AddPhotoAlternateIcon />,
    fabSize: "large",
    childDialog: <FileUploadInput label={"add-recipe-contained-button-file"} />,
  };

  //Props for the SelectAvatar usage of the ListItemFAB component. (Passed in as spread props)
  const selectAvatarListItemFABProps = {
    hasDivider: true,
    handleOpen: changeSelectAvatarDialogOpenStatus,
    selectFabImageIcon: <CollectionsIcon />,
    fabSize: "large",
    childDialog: <SelectAvatarDialog />,
  };

  const [values, setValues] = useState(initialValues);
  //const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const submitForm = () => {
    const formData = new FormData();
    console.log("WE ARE IN HERE");
    console.log("recipeTitle " + values.recipeTitle);
    console.log("uploader " + values.uploaderName);
    console.log("recipeDescription " + values.recipeDescription);

    formData.append("name", values.recipeTitle);
    formData.append("uploader", values.uploaderName);
    formData.append("recipeDescription", values.recipeDescription);

    API.post("api/add", formData)
      .then(() => {
        alert("File Upload success");
      })
      .catch(() => alert("File Upload Error"));
  };

  return (
    <form>
      <Dialog fullWidth open={recipeDialogOpen} onClose={changeRecipeDialogOpenStatus}>
        <Box p={4} display="flex" flexDirection="column" alignItems="start" gap="2">
          <TitleField variant="h5">{props.children}</TitleField>
          <ListItemTextField
            value={values.recipeTitle}
            onChange={handleInputChange}
            name={"recipeTitle"}
            placeholderText={"Add recipe title"}
          ></ListItemTextField>
          <ListItemTextField
            value={values.uploaderName}
            onChange={handleInputChange}
            name={"uploaderName"}
            placeholderText={"Uploader (your name)"}
          ></ListItemTextField>
          {/*The Provider component exposed by the Context API to provide the context to child Dialog*/}
          <SelectAvatarDialogContext.Provider value={selectAvatarDialogState}>
            <ListItemWithTextAndFAB {...selectAvatarListItemFABProps}>
              <>Select your avatar</>
            </ListItemWithTextAndFAB>
          </SelectAvatarDialogContext.Provider>
          <ListItemWithTextAndFAB {...addPhotoListItemFABProps}>
            <>Add Recipe photo</>
          </ListItemWithTextAndFAB>
          <ListItemTextField
            value={values.recipeDescription}
            onChange={handleInputChange}
            name={"recipeDescription"}
            placeholderText={"Add recipe description"}
          ></ListItemTextField>
          {/*The Provider component exposed by the Context API to provide the context to child Dialog*/}
          <IngredientsDialogContext.Provider value={ingredientsDialogState}>
            <ListItemWithButton
              rowText="Add Ingredients"
              buttonText="Ingredients"
              onClickEvent={changeIngredientsDialogOpenStatus}
              childDialog={<AddIngredientsDialog />}
            />
          </IngredientsDialogContext.Provider>
          <ListItemWithButton rowText={"Add recipe method"} buttonText={"Method"} /*TODO: Add the two missing props */ />
          <ListItem divider theme={RecipeDialogListItemTheme}>
            <FilterByTagsSearch />
          </ListItem>
          <SaveButtonForDialogs closeRecipeDialog={changeRecipeDialogOpenStatus} formUpload={submitForm}>
            <>Save New Recipe</>
          </SaveButtonForDialogs>
        </Box>
      </Dialog>
    </form>
  );
}

//Check that the props are passed in when the TitleField function is called.
RecipeDialog.propTypes = {
  children: PropTypes.node.isRequired, //any renderable object.
};
