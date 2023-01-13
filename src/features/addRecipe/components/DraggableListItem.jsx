import { ThemeProvider } from "@emotion/react";
import { Draggable } from "@hello-pangea/dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Box, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import PropTypes from "prop-types";
import { React } from "react";
import { DraggableListItemTheme } from "../themes/DraggableListItemTheme";

/**
 * ListItems that can be dragged/reordered as well as being edited and deleted.
 * One such example is using a DraggableListItem for each ingredient associated with a recipe.
 */
export default function DraggableListItem({ ingredient, index, handleExistingIngredientEdit, handleRemoveIngredientClick }) {
  return (
    <ThemeProvider theme={DraggableListItemTheme}>
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
            {/* div required so ListItemSecondaryAction drags with the ListItem */}
            <Box>
              <ListItemSecondaryAction>
                <IconButton onClick={() => handleRemoveIngredientClick(ingredient.id)} edge="end" aria-label="deleteIngredient">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </Box>
          </ListItem>
        )}
      </Draggable>
    </ThemeProvider>
  );
}

//Confirm all props provided and of the right type
DraggableListItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleExistingIngredientEdit: PropTypes.func.isRequired,
  handleRemoveIngredientClick: PropTypes.func.isRequired,
};
