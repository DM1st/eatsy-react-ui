import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { Button, Container, List, ListSubheader, Paper, Dialog } from "@mui/material";

import { React, useContext } from "react";
import AddItemInputBase from "./AddItemInputBase";
import DraggableListItem from "./DraggableListItem";
import { IngredientsDialogContext } from "../../addRecipe/contexts/IngredientsDialogContext";
import { useIngredientsState } from "../hooks/useIngredientsState";
import { AddIngredientsDialogTheme } from "../themes/AddIngredientsDialogTheme";

/**
 * A child dialog of the AddRecipe parent dialog.
 * This dialog displays all ingredients associated with the current Recipe.
 * It allow new ingredients to be added and edited as DraggableListItem components.
 */
export function AddIngredientsDialog() {
  //Access the IngredientsDialog state from the RecipeDialog (add/edit recipe feature) level context API
  const { openIngredientsDialog, changeIngredientsDialogOpenStatus } = useContext(IngredientsDialogContext);

  //ingredients state for the list of ingredients stored in addIngredients feature hooks
  const { ingredients, setIngredients, inputValue, setInputValue } = useIngredientsState();

  const handleAddButtonClick = () => {
    //Creates new ingredient object which gets pushed to the Array
    const newIngredient = {
      ingredientName: inputValue,
      id: Date.now().toString(),
    };

    //Copies the existing array (to avoid mutating state) and add the newIngredient object on to the end.
    const newIngredients = [...ingredients, newIngredient];

    //Pushes the new array back into state.
    setIngredients(newIngredients);
    //Reset the inputValue to empty the string for ease of adding new ingredients.
    setInputValue("");
  };

  //Remove ingredient from the list
  //Modify the current stateful list with a filter.
  const handleRemoveIngredientClick = (id) => {
    const updatedIngredientList = ingredients.filter((ingredient) => ingredient.id !== id);
    setIngredients(updatedIngredientList);
  };

  //Update ingredient name when being edited.
  const handleExistingIngredientEdit = (updatedIngredientName, id) => {
    ingredients.forEach((ingredient) => {
      if (ingredient.id === id) {
        ingredient.ingredientName = updatedIngredientName;
      }
    });
  };

  /**
   * Triggered by the <DragDropContext> onDragEnd prop.
   * This provides an opportunity to save the updated state (after dragging and dropping an ingredient) before the page re-renders.
   * The 'result' paramater contains information regarding what should be the updated state after a drag action.
   * In particular, the index value in both the destination and source properties.
   */
  function handleOnDragEnd(result) {
    //Handle error incase ingredient is dragged outside of the defined droppable area.
    if (result.destination === null) {
      return;
    } else {
      //Create new copy of our ingredients array
      const updatedIngredientsList = Array.from(ingredients);
      //Use the source.index value to find the moved item from the new array and remove it
      const [reorderedItem] = updatedIngredientsList.splice(result.source.index, 1);
      //The the destination.index value is used to add that ingredient back into the array, but at its new location.
      updatedIngredientsList.splice(result.destination.index, 0, reorderedItem);
      //Update the Ingredients state with this correctly updated list
      setIngredients(updatedIngredientsList);
    }
  }

  return (
    <Dialog
      theme={AddIngredientsDialogTheme}
      open={openIngredientsDialog}
      onClose={changeIngredientsDialogOpenStatus}
      fullWidth
      aria-labelledby="child-dialog-ingredients"
    >
      <Paper component="form" theme={AddIngredientsDialogTheme}>
        <AddItemInputBase inputValue={inputValue} setInputValue={setInputValue} handleAddButtonClick={handleAddButtonClick} />
      </Paper>
      {/* Ability to use the Drag and Drop API */}
      {/* the DragDropContext onDragEnd prop will fire a function when an item has stopped being dragged.  */}
      {/* This provides an opportunity to save the updated state before the page re-renders.  */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {/* Entire list will be the dropzone. */}
        {/* DroppableId allows the library to keep track of this specific instance between interactions */}
        {/* Imediately create function with provided argument to include information and references required by the DragDrop library */}
        {/* This is going to create a reference (provided.innerRef) for the library to access the list element’s HTML element. */}
        {/* It also applies props to the element (provided.droppableProps) that allows the library to keep track of movements and positioning.*/}
        <Droppable droppableId="ingredients">
          {(provided) => (
            <List
              subheader={<ListSubheader color={"primary"}>Ingredients</ListSubheader>}
              className="ingredients"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {/* Map function to loop over list and display the items */}
              {ingredients.map((ingredient, index) => {
                return (
                  <DraggableListItem
                    key={ingredient.id}
                    ingredient={ingredient}
                    index={index}
                    handleExistingIngredientEdit={handleExistingIngredientEdit}
                    handleRemoveIngredientClick={handleRemoveIngredientClick}
                  />
                );
              })}
              {/*Placeholder item provided and used to fill up the space that the item being dragged previously took */}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
      <Container theme={AddIngredientsDialogTheme}>
        <Button onClick={changeIngredientsDialogOpenStatus}>Done</Button>
      </Container>
    </Dialog>
  );
}
