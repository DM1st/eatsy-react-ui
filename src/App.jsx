import AddIcon from "@mui/icons-material/Add";
import { CssBaseline, Grid, Container, Fab } from "@mui/material";
import { React } from "react";
import { RecipeDialogContext } from "./contexts/RecipeDialogContext";
import EatsyAppBar from "./EatsyAppBar";
import EatsyFooter from "./EatsyFooter";
import { useToggleDialogStatus } from "./hooks/useToggleDialogStatus";
import RecipeCard from "./RecipeCard";
import SearchTabPanel from "./SearchTabPanel";
import { GlobalTheme } from "./themes/GlobalTheme";
import { RecipeDialog } from "@/features/addRecipe";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  //Open or Close state for the RecipeDialog storred in global hooks.
  const { openStatus: openRecipeDialog, toggleDialogStatus: changeRecipeDialogOpenStatus } =
    useToggleDialogStatus();

  //value object containing RecipeDialog state to be passed via context and not props.
  const value = {
    openRecipeDialog,
    changeRecipeDialogOpenStatus,
  };

  //The Provider component exposed by the Context API to provide the context to child Dialog.
  const { Provider } = RecipeDialogContext;

  return (
    <>
      <CssBaseline />
      <EatsyAppBar />
      <main>
        <>
          <Fab aria-label="add" onClick={changeRecipeDialogOpenStatus} theme={GlobalTheme}>
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
