import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { Typography, Card, CardActions, CardContent, CardMedia, IconButton, Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";
import { React, useState } from "react";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeRating from "./RecipeRating";

//TODO
const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//Dummy data until integrated into backend
let recipeImage = "https://source.unsplash.com/ykThMylLsbY";
let recipeImageTitle = "Image title";
let methodStepOnePlaceholderText = "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.";
let methodStepTwoPlaceholderText =
  "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. \
  Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 \
  minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. \
  Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until \
  thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; \
  bring to a boil.";
let methodStepThreePlaceholderText =
  "Add rice and stir very gently to distribute.\
  Top with artichokes and peppers, and cook without stirring, until most of the liquid is \
  absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, \
  tucking them down into the rice, and cook again \
  without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. \
  (Discard any mussels that don't open.)";

let methodStepFourPlaceholderText = "Set aside off of the heat to let rest for 10 minutes, and then serve.";

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
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: "12" }}>
      <RecipeCardHeader />
      <CardMedia
        sx={{ paddingTop: "56.25%" }} //16:9 aspect ratio
        image={recipeImage}
        title={recipeImageTitle}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography>This is a recipe card. You can use this section to big up the recipe and tempt people to click it.</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <RecipeRating />
        <ExpandMore expand={expanded ? 1 : 0} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{methodStepOnePlaceholderText}</Typography>
          <Typography paragraph>{methodStepTwoPlaceholderText}</Typography>
          <Typography paragraph>{methodStepThreePlaceholderText}</Typography>
          <Typography>{methodStepFourPlaceholderText}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
