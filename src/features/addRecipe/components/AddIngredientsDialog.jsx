import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import {
  Button,
  Container,
  List,
  ListSubheader,
  Paper,
  InputBase,
  Dialog,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { React, useState, useContext } from "react";
import { IngredientsDialogContext } from "../contexts/IngredientsDialogContext";

const theme = createTheme({
  palette: {
    camouflage: {
      main: "#ffffff",
    },
  },
});

export default function AddIngredientsDialog() {
  //Access the IngredientsDialog state from the RecipeDialog (add/edit recipe feature) level context API
  const { openIngredientsDialog, changeIngredientsDialogOpenStatus } =
    useContext(IngredientsDialogContext);

  //State object - initialise with an empty array
  const [ingredients, setIngredients] = useState([]);

  //State object for adding new ingredient to ingredient list
  const [inputValue, setInputValue] = useState("");

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
   * The paramater (result) contains regarding what should be the updated state after a drag action.
   * In particular, the index value in both the destination and source properties.
   */
  function handleOnDragEnd(result) {
    //Handle error incase ingredient is dragged outside of the defined droppable area.
    if (result.destination === null) {
      return;
    } else {
      //Create new copy of our characters array
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
      open={openIngredientsDialog}
      onClose={changeIngredientsDialogOpenStatus}
      fullWidth
      sx={{
        width: "100%",
        justifyContent: "space-between",
        align: "center",
        paddingTop: "5px",
        paddingBottom: "5px",
        paddingRight: "0",
        paddingLeft: "0",
      }}
      aria-labelledby="child-dialog-ingredients"
    >
      <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
        {/*Whever user types, onChange gets called. React passes event in automatically so we can obtain the value*/}
        {/*setInputValue is then called to set what the user has typed in as state. */}
        {/*value of the input to be whatever value is stoered in the inputValue state variable. */}
        <InputBase
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddButtonClick();
            }
          }}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Add ingredient"
          inputProps={{ "aria-label": "Add new ingredient" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          onClick={() => handleAddButtonClick()}
          color="primary"
          sx={{ p: "10px" }}
          aria-label="add ingredient"
        >
          <AddIcon />
        </IconButton>
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
                  <Draggable key={ingredient.id} draggableId={ingredient.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        dense
                        divider
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{ backgroundColor: snapshot.isDragging ? grey[100] : "#ffffff" }}
                      >
                        <ThemeProvider theme={theme}>
                          <ListItemIcon>
                            <DragHandleIcon />
                          </ListItemIcon>
                          <TextField
                            focused
                            color="camouflage"
                            variant="standard"
                            defaultValue={ingredient.ingredientName}
                            onChange={(event) =>
                              handleExistingIngredientEdit(event.target.value, ingredient.id)
                            }
                          />
                        </ThemeProvider>
                        {/* div required so ListItemSecondaryAction drags with the ListItem */}
                        <div>
                          <ListItemSecondaryAction>
                            <IconButton
                              onClick={() => handleRemoveIngredientClick(ingredient.id)}
                              edge="end"
                              aria-label="deleteIngredient"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </div>
                      </ListItem>
                    )}
                  </Draggable>
                );
              })}
              {/*Placeholder item provided and used to fill up the space that the item being dragged previously took */}
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          align: "center",
          paddingTop: "20px",
          justifyContent: "end",
          paddingRight: "0",
          paddingLeft: "0",
        }}
      >
        <Button onClick={changeIngredientsDialogOpenStatus}>Done</Button>
      </Container>
    </Dialog>
  );
}
