import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Typography, CardContent, Collapse } from "@mui/material";
import PropTypes from "prop-types";
import { React, useContext } from "react";
import { RecipeCardContext } from "../contexts/RecipeCardContext";
import { TabPanelOptions } from "@/features/tabPanelOptions";

/**
 * The collapsable content component that can be used on each Recipe card
 *  to provide further information via an open and close vertical transition
 */
export default function RecipeCardCollapsableContent({ recipeIngredients, recipeMethod }) {
  //Access the RecipeCard state from the RecipeCard feature level context API
  const { isExpanded } = useContext(RecipeCardContext);

  //MethodStepsArray to store each method step to be displayed in this instance of the RecipeCardCollapsableContent.
  //This can then be passed to a react node for rendering.
  const methodStepsArray = [];

  //Update the methodStep array with a Typography component for each individual method step.
  Object.entries(recipeMethod).forEach(([key, value]) => {
    methodStepsArray.push(
      <Typography key={key}>
        {"Step " + key}:{" " + value}
      </Typography>
    );
  });

  //IngredientStepsArray to store each ingredient to be displayed in this instance of the RecipeCardCollapsableContent.
  //This can then be passed to a react node for rendering.
  const ingredientStepsArray = [];

  //Update the methodStep array with a Typography component for each individual method step.
  Object.entries(recipeIngredients).forEach(([key, value]) => {
    ingredientStepsArray.push(<Typography key={key}>{value}</Typography>);
  });

  //Props for the RecipeCard usage of the TabPanelOptions component (passed in as spread props).
  const tabPanelOptionsProps = {
    tabIconZero: <RestaurantIcon />,
    tabLabelZero: "Ingredients",
    tabComponentZero: <>{ingredientStepsArray}</>,
    tabIconOne: <FormatListNumberedIcon />,
    tabLabelOne: "Method",
    tabComponentOne: <>{methodStepsArray}</>,
  };

  return (
    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
      <CardContent>
        <TabPanelOptions {...tabPanelOptionsProps} />
      </CardContent>
    </Collapse>
  );
}

//Check required props are provided and of the correct type.
RecipeCardCollapsableContent.propTypes = {
  recipeIngredients: PropTypes.object.isRequired,
  recipeMethod: PropTypes.object.isRequired,
};
