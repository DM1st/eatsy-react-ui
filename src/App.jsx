import AddIcon from '@mui/icons-material/Add';
import { CssBaseline, Grid, Container, Fab } from '@mui/material';
import { React, useState } from 'react';
import EatsyAppBar from './EatsyAppBar';
import EatsyFooter from './EatsyFooter';
import { RecipeDialog } from './features/addRecipe';
import RecipeCard from './RecipeCard';
import SearchTabPanel from './SearchTabPanel';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {

    //State management using setState hook for the Recipe Dialog (defined in parent component - App).
    const [openRecipeDialog, setOpenRecipeDialog] = useState(false);

    const handleFabClickOpenRecipeDialog = () => {
        setOpenRecipeDialog(true);
    };

    const handleCloseRecipeDialog = () => {
        setOpenRecipeDialog(false);
    };


    // function handleRemoveIngredientClick(key) {

    //   //const updatedIngredientList = ingredients.filter((ingredient) => ingredient.key !== key);
    //   //setIngredients(updatedIngredientList);
    //   alert('dog')

    // };
    return (
        <>
            <CssBaseline />
            <EatsyAppBar />
            <main>
                <>
                    <Fab sx={{
                        position: "fixed",
                        bottom: (theme) => theme.spacing(2),
                        right: (theme) => theme.spacing(2)
                    }}
                    color="secondary"
                    aria-label="add"
                    onClick={handleFabClickOpenRecipeDialog}
                    >
                        <AddIcon />
                    </Fab>
                    <RecipeDialog
                        open={openRecipeDialog}
                        closeRecipeDialog={handleCloseRecipeDialog}
                    />
                </>
                <SearchTabPanel />
                <Container maxWidth="md" sx={{ padding: '20px 0' }}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <RecipeCard />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <EatsyFooter />
        </>
    )
}

export default App;