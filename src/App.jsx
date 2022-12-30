import { React, useState } from 'react';

import { CssBaseline, Grid, Container, Fab } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';

import RecipeDialog from './RecipeDialog';
import RecipeCard from './RecipeCard';
import EatsyFooter from './EatsyFooter';
import EatsyAppBar from './EatsyAppBar';
import SearchTabPanel from './SearchTabPanel';

//import { styled, alpha } from '@mui/material/styles';

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));

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
      <div>
        <CssBaseline />
        <EatsyAppBar />
        <main>
          <div>
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
              openRecipeDialog={handleFabClickOpenRecipeDialog}
              closeRecipeDialog={handleCloseRecipeDialog}
            />
          </div>
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
      </div>
    )
};

export default App;