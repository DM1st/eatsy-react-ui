import { React, useState } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, TextField, ListItem, Dialog, Button, Container, Divider } from '@mui/material';

import SelectAvatar from './SelectAvatar';
import RecipePhoto from './RecipePhoto';
import SaveRecipe from './SaveRecipe';
import FilterByTags from './FilterByTags';
import AddMethod from './AddMethod';
import AddIngredientsDialog from './AddIngredientsDialog'

const RecipeDialogListItemTheme = createTheme({
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    paddingRight: '0',
                    paddingLeft: '0',
                    },
                            
            },
        },
    },
});

/**
 * Recipe Dialog Component used for creating and editing recipies 
 */
function RecipeDialog({ open, closeRecipeDialog }) {

    // The Open/Close State for the ingredients sub dialog in this parent recipe dialog
    const [openIngredientsDialog, setOpenIngredientsDialog] = useState(false);
    const handleIngredientsDialogOpen = () => {
        setOpenIngredientsDialog(true);
    };
    const handleIngredientsDialogClose = () => {
        setOpenIngredientsDialog(false);
    };

    return (
        <ThemeProvider theme={RecipeDialogListItemTheme}>
            <Dialog fullWidth open={open} onClose={closeRecipeDialog} aria-labelledby="parent-dialog-title" aria-describedby="parent-dialog-description">
                <Box p={4} display='flex' flexDirection='column' alignItems='start' gap='2'>
                    <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                        Add New Recipe
                    </Typography>
                    <ListItem divider>
                        <TextField margin="dense" id="Recipe title" label="Add recipe title" type="text" fullWidth />
                    </ListItem>
                    <ListItem sx={{ paddingRight: '0', paddingLeft: '0' }} divider>
                        <TextField margin="dense" id="Uploader name" label="Uploader (your name)" type="text" fullWidth />
                    </ListItem>
                    <ListItem divider>
                        <SelectAvatar />
                    </ListItem>
                    <ListItem divider>
                        <RecipePhoto />
                    </ListItem>
                    <ListItem divider>
                        <TextField margin="dense" id="Recipe description" label="Add recipe description" type="text" fullWidth />
                    </ListItem>
                    <ListItem divider>
                        <Container sx={{ width: '100%', display: 'flex', align: 'center', paddingTop: '5px', paddingBottom: '5px', justifyContent: 'space-between', paddingRight: '0', paddingLeft: '0' }}>
                            <Typography color="textSecondary">Add ingredients</Typography>
                            <Button variant="outlined" onClick={handleIngredientsDialogOpen}>
                                Ingredients
                            </Button>
                            <AddIngredientsDialog open={openIngredientsDialog} closeIngredientsDialog={handleIngredientsDialogClose} />
                        </Container>
                    </ListItem>
                    <ListItem divider>
                        <AddMethod />
                    </ListItem>
                    <ListItem divider>
                        <FilterByTags />
                    </ListItem>
                    <SaveRecipe closeRecipeDialog={closeRecipeDialog} />
                </Box>
            </Dialog>
        </ThemeProvider>
    )
};

export default RecipeDialog;