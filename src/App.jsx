import AddIcon from "@mui/icons-material/Add";
import { Grid, Container, Fab, Box, CssBaseline } from "@mui/material";
import { React } from "react";
import EatsyAppBar from "./components/EatsyAppBar";
import EatsyFooter from "./components/EatsyFooter";
import { RecipeDialogContext } from "./contexts/RecipeDialogContext";
import { useToggleDialogStatus } from "./hooks/useToggleDialogStatus";
import RecipeCard from "./RecipeCard";
import SearchTabPanel from "./SearchTabPanel";
import { GlobalTheme } from "./themes/GlobalTheme";
import { RecipeDialog } from "@/features/addRecipe";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function App() {
  //Open or close state for the RecipeDialog stored in global hooks.
  const { openStatus: openRecipeDialog, toggleDialogStatus: changeRecipeDialogOpenStatus } = useToggleDialogStatus();

  //value object containing RecipeDialog state to be passed via context and not props.
  const recipeDialogState = {
    openRecipeDialog,
    changeRecipeDialogOpenStatus,
  };

  //The Provider component exposed by the Context API to provide the context to child Dialog.
  const { Provider } = RecipeDialogContext;

  return (
    <CssBaseline>
      <Box
        //SX props needed to that Footer sticks to bottom of screen
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", //Make long so Footer element sticks to bottom of screen
        }}
      >
        <EatsyAppBar />
        <Container sx={{ mb: 2 }}>
          <Fab aria-label="add" onClick={changeRecipeDialogOpenStatus} theme={GlobalTheme}>
            <AddIcon />
          </Fab>
          <Provider value={recipeDialogState}>
            <RecipeDialog>
              <>Add New Recipe</>
            </RecipeDialog>
          </Provider>
          <SearchTabPanel />
          <Container sx={{ padding: "20px 0" }}>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <RecipeCard />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
        <EatsyFooter />
      </Box>
    </CssBaseline>
  );
}
