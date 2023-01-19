import { Grid, Container } from "@mui/material";
import { React } from "react";
import { RecipeCard } from "@/features/viewRecipeCard";

//Placeholder for each recipe object
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/**
 * Grid to contain RecipeCards
 * Wraps each recipeCard in a resonsive grid to adjust card size as the screen size is adjusted.
 */
export default function RecipeCardGrid() {
  return (
    <Container sx={{ padding: "20px 0" }}>
      {/* Flex Grid for containing all RecipeCard instances */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          /**Flex item behaviour, RecipeCard is responsive to screen/browserWindow size */
          <Grid item key={card} xs={12} sm={6} md={4}>
            <RecipeCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
