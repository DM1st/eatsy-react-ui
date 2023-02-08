import { Grid, Container } from "@mui/material";
import axios from "axios";
import { React, useState } from "react";
import { useEffect } from "react";
import { RecipeCard } from "@/features/viewRecipeCard";

/**
 * Grid to contain RecipeCards
 * Wraps each recipeCard in a resonsive grid to adjust card size as the screen size is adjusted.
 */
export default function RecipeCardGrid() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/retrieveAllRecipes").then((res) => {
      const response = res.data;
      console.log(response); //TODO remove
      setCards(Array.from(response));
    });
  }, []);

  return (
    <Container sx={{ padding: "20px 0" }}>
      {/* Flex Grid for containing all RecipeCard instances */}
      <Grid container spacing={4}>
        {cards.map((card) => (
          /**Flex item behaviour, RecipeCard is responsive to screen/browserWindow size */
          <Grid item key={card.key} xs={12} sm={6} md={4}>
            <RecipeCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
