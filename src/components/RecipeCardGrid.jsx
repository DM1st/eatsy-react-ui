import { Grid, Container } from "@mui/material";
import { React } from "react";
import { cards } from "@/assets/PlaceholderData";
import { RecipeCard } from "@/features/viewRecipeCard";

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
