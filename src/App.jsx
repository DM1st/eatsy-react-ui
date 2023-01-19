import { Container, CssBaseline } from "@mui/material";
import { React } from "react";
import AddRecipeButton from "./components/AddRecipeButton";
import EatsyAppBar from "./components/EatsyAppBar";
import EatsyFooter from "./components/EatsyFooter";
import RecipeCardGrid from "./components/RecipeCardGrid";
import TabPanelSearchOptions from "./components/TabPanelSearchOptions";
import { RecipeDialogContext } from "./contexts/RecipeDialogContext";
import { useToggleDialogStatus } from "./hooks/useToggleDialogStatus";

import StyledBox from "./themes/GlobalTheme";
import { RecipeDialog } from "@/features/addRecipe";

/**
 * The top level React component which contains all other React elements.
 * This App component is provided to the root.render() method in the root index.js file.
 */
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
      <StyledBox>
        <EatsyAppBar />
        <Container sx={{ mb: 2 }}>
          <AddRecipeButton changeRecipeDialogOpenStatus={changeRecipeDialogOpenStatus} />
          <Provider value={recipeDialogState}>
            <RecipeDialog>{"Add New Recipe"}</RecipeDialog>
          </Provider>
          <TabPanelSearchOptions />
          <RecipeCardGrid />
        </Container>
        <EatsyFooter />
      </StyledBox>
    </CssBaseline>
  );
}
