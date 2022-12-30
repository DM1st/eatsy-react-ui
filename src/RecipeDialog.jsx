import { React } from 'react';

import { Typography, Box, TextField, ListItem, Dialog } from '@mui/material';

import SelectAvatar from './SelectAvatar';
import RecipePhoto from './RecipePhoto';
import SaveRecipe from './SaveRecipe';
import FilterByTags from './FilterByTags';
import AddMethod from './AddMethod';
import AddIngredients from './AddIngredients'

function RecipeDialog(props) {

    return (
        <Dialog fullWidth open={props.openRecipeDialog} onClose={props.closeRecipeDialog} aria-labelledby="parent-dialog-title" aria-describedby="parent-dialog-description">
            <Box fullWidth p={4} display='flex' flexDirection='column' alignItems='start' gap='2'>
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
                    <AddIngredients />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <AddMethod />
                </ListItem>
                <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                    <FilterByTags />
                </ListItem>
                <SaveRecipe onClick={props.closeRecipeDialog}/>
            </Box>
        </Dialog>
    )
};

export default RecipeDialog;