import { Grid, Container } from "@mui/material";
import { React } from "react";

import { RecipeCard } from "@/features/viewRecipeCard";
import { UseRecipesState } from "@/hooks/useRecipesState";

/**
 * Grid to contain RecipeCards
 * Wraps each recipeCard in a resonsive grid to adjust card size as the screen size is adjusted.
 */
export default function RecipeCardGrid() {
  //Access the state that retrieves and holds the recipes from the eatsy service.
  const { recipes } = UseRecipesState();

  return (
    <Container sx={{ padding: "20px 0" }}>
      {/* Flex Grid for containing all RecipeCard instances */}
      <Grid container spacing={4}>
        {recipes.map((currentRecipe) => (
          /**Flex item behaviour, RecipeCard is responsive to screen/browserWindow size */
          <Grid item key={currentRecipe.key} xs={12} sm={6} md={4}>
            <RecipeCard recipe={currentRecipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
