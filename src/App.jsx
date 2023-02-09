import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Container, CssBaseline } from "@mui/material";
import { React } from "react";
import AddRecipeButton from "./components/AddRecipeButton";
import EatsyAppBar from "./components/EatsyAppBar";
import EatsyFooter from "./components/EatsyFooter";
import FilterByTagsSearch from "./components/FilterByTagsSearch";
import FreeTextSearchAutocomplete from "./components/FreeTextSearchAutocomplete";
import RecipeCardGrid from "./components/RecipeCardGrid";
import { AppBarTooltipContext } from "./contexts/AppBarTooltipContext";
import { RecipeDialogContext } from "./contexts/RecipeDialogContext";
import { useToggleDialogStatus } from "./hooks/useToggleDialogStatus";

import StyledBox from "./themes/GlobalTheme";
import { RecipeDialog } from "@/features/addRecipe";
import { TabPanelOptions } from "@/features/tabPanelOptions";

/**
 * The top level React component which contains all other React elements.
 * This App component is provided to the root.render() method in the root index.js file.
 */
export default function App() {
  //Open or close state for the RecipeDialog stored in global hooks.
  const { openStatus: recipeDialogOpen, toggleDialogStatus: changeRecipeDialogOpenStatus } = useToggleDialogStatus();

  //value object containing RecipeDialog state to be passed via context and not props.
  const recipeDialogState = {
    recipeDialogOpen,
    changeRecipeDialogOpenStatus,
  };

  //Open or close state for the App bar info tooltipstored in global hooks
  const { openStatus: tooltipOpen, toggleDialogStatus: changeTooltipOpenStatus } = useToggleDialogStatus();

  //value object containing Tooltip state to be passed via context and not props.
  const tooltipState = {
    tooltipOpen,
    changeTooltipOpenStatus,
  };

  //Props for the searchoptions usage on the TabPanelOptions component (passed in as spread props).
  const tabPanelOptionsProps = {
    tabIconZero: <LocalOfferSharpIcon />,
    tabLabelZero: "Filter by tag",
    tabComponentZero: <FilterByTagsSearch />,
    tabIconOne: <SearchSharpIcon />,
    tabLabelOne: "Free text search",
    tabComponentOne: <FreeTextSearchAutocomplete />,
  };

  return (
    <CssBaseline>
      <StyledBox>
        {/*The Provider component exposed by the Context API to provide the context to child Tooltip*/}
        <AppBarTooltipContext.Provider value={tooltipState}>
          <EatsyAppBar />
        </AppBarTooltipContext.Provider>
        <Container sx={{ mb: 2 }}>
          <AddRecipeButton changeRecipeDialogOpenStatus={changeRecipeDialogOpenStatus} />
          {/*The Provider component exposed by the Context API to provide the context to child Dialog*/}
          <RecipeDialogContext.Provider value={recipeDialogState}>
            <RecipeDialog>{"Add New Recipe"}</RecipeDialog>
          </RecipeDialogContext.Provider>
          <TabPanelOptions {...tabPanelOptionsProps} />
          <RecipeCardGrid />
        </Container>
        <EatsyFooter />
      </StyledBox>
    </CssBaseline>
  );
}
