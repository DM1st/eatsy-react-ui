import { Typography, CardContent, Collapse } from "@mui/material";
import PropTypes from "prop-types";
import { React, useContext } from "react";
import { RecipeCardContext } from "../contexts/RecipeCardContext";

/**
 * The collapsable content component that can be used on each Recipe card
 *  to provide further information via an open and close vertical transition
 */
export default function RecipeCardCollapsableContent({ recipeMethod }) {
  //Access the RecipeCard state from the RecipeCard feature level context API
  const { isExpanded } = useContext(RecipeCardContext);

  //MethodStepsArray to store each method step to be displayed in this instance of the RecipeCardCollapsableContent.
  //This can then be passed to a react node for rendering.
  const methodStepsArray = [];

  //Update the methodStep array with a Typography component for each individual method step.
  Object.entries(recipeMethod).forEach(([key, value]) => {
    methodStepsArray.push(
      <Typography key={key}>
        {key}:{" " + value}
      </Typography>
    );
  });

  return (
    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <>{methodStepsArray}</>
      </CardContent>
    </Collapse>
  );
}

//Check required props are provided and of the correct type.
RecipeCardCollapsableContent.propTypes = {
  recipeMethod: PropTypes.object.isRequired,
};
