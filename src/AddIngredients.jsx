import {React, useState } from 'react';

import { Typography, Button, Container, List, ListItem, ListSubheader, ListItemText, ListItemSecondaryAction, Paper, InputBase, Dialog, Divider, IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function AddIngredients() {

    //Define handle click here
    //State for the ingredients sub dialog in the parent recipe dialog
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    //State object - initialise with an empty array
    const [ingredients, setIngredients] = useState([]);

    //State object for adding new ingredient to ingredient list
    const [inputValue, setInputValue] = useState('');

    const handleAddButtonClick = () => {


      //Creates new ingredient object which gets pushed to the Array
      const newIngredient = {
        ingredientName: inputValue,
        key: Date.now(),
      };

      //Copies the existing array (to avoid mutating state) and add the newIngredient object on to the end. 
      const newIngredients = [...ingredients, newIngredient];

      //Pushes the new array back into state.
      setIngredients(newIngredients);
      //Reset the inputValue to empty the string for ease of adding new ingredients.
      setInputValue('');
    };

    const CloseIngredientsDialog = () => {

      //Define handle click here

      return (

        <Container sx={{ width: '100%', display: 'flex', align: 'center', paddingTop: '20px', justifyContent: 'end', paddingRight: '0', paddingLeft: '0' }}>
          <Button onClick={handleClose}>
            Done
          </Button>
        </Container>

      );

    };

    return (

      <Container sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', align: 'center', paddingTop: '5px', paddingBottom: '5px', paddingRight: '0', paddingLeft: '0' }}>
        <Typography color="textSecondary">Add ingredients</Typography>
        <Button variant="outlined" onClick={handleOpen}>
          Ingredients
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="child-dialog-ingredients"
        >
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
          >
            {/*Whever user types, onChange gets called. React passes event in automatically so we can obtain the value*/}
            {/*setInputValue is then called to set what the user has typed in as state. */}
            {/*value of the input to be whatever value is stoered in the inputValue state variable. */}
            <InputBase value={inputValue} onChange={(event) => setInputValue(event.target.value)}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Add new ingredient"
              inputProps={{ 'aria-label': 'Add new ingredient' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton onClick={() => handleAddButtonClick()} color="primary" sx={{ p: '10px' }} aria-label="add ingredient">
              <AddIcon />
            </IconButton>
          </Paper>
          {/* Map function to loop over list and display the items */}
          <List
            subheader={
              <ListSubheader
                color={"primary"}

              >
                Ingredients
              </ListSubheader>
            }
          >
            {ingredients.map((ingredient, index) => {
              return (
                <ListItem
                  key={ingredient}
                  dense
                  divider
                >
                  <ListItemText
                    primary={ingredient.ingredientName}
                  />
                  <ListItemSecondaryAction>
                    <IconButton /*onClick={handleRemoveIngredientClick(ingredient.key)}*/ edge="end" aria-label='deleteIngredient'>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          <CloseIngredientsDialog />
        </Dialog>
      </Container>
    );
  };

  export default AddIngredients;