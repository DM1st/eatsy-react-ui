import { Card } from "@mui/material";
import { React } from "react";
import RecipeCardActionsBar from "./RecipeCardActionsBar";
import RecipeCardCollapsableContent from "./RecipeCardCollapsableContent";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardImage from "./RecipeCardImage";
import RecipeCardSummarySection from "./RecipeCardSummarySection";
import { RecipeCardContext } from "../contexts/RecipeCardContext";
import { PlaceholderData } from "@/assets/PlaceholderData";
import { useToggleDialogStatus } from "@/hooks/useToggleDialogStatus";

/**
 * Recipe Card component displaying all information for a given recipe.
 */
export function RecipeCard() {
  //Expand or collapse state for the RecipeCard Collapsable stored in RecipeCard feature hooks
  const { openStatus: isExpanded, toggleDialogStatus: handleExpandClick } = useToggleDialogStatus();

  //value object containing RecipeCard state to be passed via context and not props.
  const RecipeCardState = {
    isExpanded,
    handleExpandClick,
  };

  return (
    <RecipeCardContext.Provider value={RecipeCardState}>
      <Card sx={{ display: "flex", flexDirection: "column", boxShadow: "20" }}>
        <RecipeCardHeader recipeTitle={PlaceholderData.at(0).recipeTitle} recipeAuthor={PlaceholderData.at(0).recipeAuthor} />
        <RecipeCardImage image={PlaceholderData.at(0).recipeImage} imageTitle={PlaceholderData.at(0).recipeImageTitle} />
        <RecipeCardSummarySection>{PlaceholderData.at(0).recipeSummary}</RecipeCardSummarySection>
        <RecipeCardActionsBar />
        <RecipeCardCollapsableContent recipeMethod={PlaceholderData.at(0).method} />
      </Card>
    </RecipeCardContext.Provider>
  );
}
