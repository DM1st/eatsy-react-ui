import { Draggable } from "@hello-pangea/dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import { React } from "react";

const theme = createTheme({
  palette: {
    camouflage: {
      main: "#ffffff",
    },
  },
});

/**
 * ListItems that can be dragged/reordered as well as being edited and deleted.
 * One such example is using a DraggableListItem for each ingredient associated with a recipe.
 */
export default function DraggableListItem({ ingredient, index, handleExistingIngredientEdit, handleRemoveIngredientClick }) {
  return (
    <Draggable draggableId={ingredient.id} index={index}>
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
              onChange={(event) => handleExistingIngredientEdit(event.target.value, ingredient.id)}
            />
          </ThemeProvider>
          {/* div required so ListItemSecondaryAction drags with the ListItem */}
          <div>
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleRemoveIngredientClick(ingredient.id)} edge="end" aria-label="deleteIngredient">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </div>
        </ListItem>
      )}
    </Draggable>
  );
}

//Confirm all props provided and of the right type
DraggableListItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleExistingIngredientEdit: PropTypes.func.isRequired,
  handleRemoveIngredientClick: PropTypes.func.isRequired,
};
