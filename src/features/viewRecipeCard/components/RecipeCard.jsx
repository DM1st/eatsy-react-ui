import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShareIcon from "@mui/icons-material/Share";
import { Typography, Card, CardActions, CardContent, CardMedia, IconButton, Collapse } from "@mui/material";
import { styled } from "@mui/material/styles";
import { React, useState } from "react";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeRating from "./RecipeRating";
import { PlaceholderData } from "@/assets/PlaceholderData";

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
  //Array to store each method step as a component, which can then be passed to a react node.
  const methodStepsArray = [];

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column", boxShadow: "12" }}>
      <RecipeCardHeader />
      <CardMedia
        sx={{ paddingTop: "56.25%" }} //16:9 aspect ratio
        image={PlaceholderData.at(0).recipeImage}
        title={PlaceholderData.at(0).recipeImageTitle}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography>{PlaceholderData.at(0).recipeSummary}</Typography>
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
          {Object.entries(PlaceholderData.at(0).method).forEach(([key, value]) => {
            methodStepsArray.push(
              <Typography key={key}>
                {key}:{" " + value}
              </Typography>
            );
          })}
          <>{methodStepsArray}</>
        </CardContent>
      </Collapse>
    </Card>
  );
}
