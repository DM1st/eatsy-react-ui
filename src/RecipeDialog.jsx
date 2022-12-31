import { React, useState } from 'react';

import { Typography, Box, TextField, ListItem, Dialog, Button } from '@mui/material';

import SelectAvatar from './SelectAvatar';
import RecipePhoto from './RecipePhoto';
import SaveRecipe from './SaveRecipe';
import FilterByTags from './FilterByTags';
import AddMethod from './AddMethod';
import AddIngredientsDialog from './AddIngredientsDialog'

function RecipeDialog({open, closeRecipeDialog}) {

        //State for the ingredients sub dialog in the parent recipe dialog
        const [openIngredientsDialog, setOpenIngredientsDialog] = useState(false);
        
        const handleIngredientsDialogOpen = () => {
            setOpenIngredientsDialog(true);
        };
        const handleIngredientsDialogClose = () => {
            setOpenIngredientsDialog(false);
        };

    return (
        <Dialog fullWidth open={open} onClose={closeRecipeDialog} aria-labelledby="parent-dialog-title" aria-describedby="parent-dialog-description">
            <Box p={4} display='flex' flexDirection='column' alignItems='start' gap='2'>
                <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                    New Recipe
                </Typography>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <TextField margin="dense" id="Recipe title" label="Add recipe title" type="text" fullWidth />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <TextField margin="dense" id="Uploader name" label="Uploader (your name)" type="text" fullWidth />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <SelectAvatar />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <RecipePhoto />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <TextField margin="dense" id="Recipe description" label="Add recipe description" type="text" fullWidth />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                <Typography color="textSecondary">Add ingredients</Typography>
                <Button variant="outlined" onClick={handleIngredientsDialogOpen}>
                Ingredients
                </Button>
                    <AddIngredientsDialog open={openIngredientsDialog} closeIngredientsDialog={handleIngredientsDialogClose} />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <AddMethod />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <FilterByTags />
                </ListItem>
                <SaveRecipe closeRecipeDialog={closeRecipeDialog} />
            </Box>
        </Dialog>
    )
};

export default RecipeDialog;