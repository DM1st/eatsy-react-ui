import AddIcon from "@mui/icons-material/Add";
import { CssBaseline, Grid, Container, Fab } from "@mui/material";
import { React } from "react";
import { RecipeDialogContext } from "./contexts/RecipeDialogContext";
import EatsyAppBar from "./EatsyAppBar";
import EatsyFooter from "./EatsyFooter";
import { useToggleDialogStatus } from "./hooks/useToggleDialogStatus";
import RecipeCard from "./RecipeCard";
import SearchTabPanel from "./SearchTabPanel";
import { RecipeDialog } from "@/features/addRecipe";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const { Provider } = RecipeDialogContext;

function App() {
  //Open or close state for the RecipeDialog.
  const { openStatus: openRecipeDialog, toggleDialogStatus: changeRecipeDialogOpenStatus } =
    useToggleDialogStatus();

  const value = {
    openRecipeDialog,
    changeRecipeDialogOpenStatus,
  };

  return (
    <>
      <CssBaseline />
      <EatsyAppBar />
      <main>
        <>
          <Fab
            sx={{
              position: "fixed",
              bottom: (theme) => theme.spacing(2),
              right: (theme) => theme.spacing(2),
            }}
            color="secondary"
            aria-label="add"
            onClick={changeRecipeDialogOpenStatus}
          >
            <AddIcon />
          </Fab>
          <Provider value={value}>
            <RecipeDialog />
          </Provider>
        </>
        <SearchTabPanel />
        <Container maxWidth="md" sx={{ padding: "20px 0" }}>
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
  );
}

export default App;
