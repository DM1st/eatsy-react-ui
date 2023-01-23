import { Card } from "@mui/material";
import { React, useState } from "react";
import RecipeCardActionsBar from "./RecipeCardActionsBar";
import RecipeCardCollapsableContent from "./RecipeCardCollapsableContent";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardImage from "./RecipeCardImage";
import RecipeCardSummarySection from "./RecipeCardSummarySection";
import { PlaceholderData } from "@/assets/PlaceholderData";

/**
 * Recipe Card component displaying all information for a given recipe.
 */
export function RecipeCard() {
  //State for the expansion dropdown on the recipe cards
  const [expanded, setExpanded] = useState(false);
  //Update state of RecipeCard expansion when arrow is clicked
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", boxShadow: "20" }}>
      <RecipeCardHeader recipeTitle={PlaceholderData.at(0).recipeTitle} recipeAuthor={PlaceholderData.at(0).recipeAuthor} />
      <RecipeCardImage image={PlaceholderData.at(0).recipeImage} imageTitle={PlaceholderData.at(0).recipeImageTitle} />
      <RecipeCardSummarySection>{PlaceholderData.at(0).recipeSummary}</RecipeCardSummarySection>
      <RecipeCardActionsBar handleExpandClick={handleExpandClick} isExpanded={expanded} />
      <RecipeCardCollapsableContent isExpanded={expanded} recipeMethod={PlaceholderData.at(0).method} />
    </Card>
  );
}
