import { Card } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import RecipeCardActionsBar from "./RecipeCardActionsBar";
import { RecipeCardCarousel } from "./RecipeCardCarousel";
import RecipeCardCollapsableContent from "./RecipeCardCollapsableContent";
import RecipeCardHeader from "./RecipeCardHeader";
//import RecipeCardImage from "./RecipeCardImage";
import RecipeCardSummarySection from "./RecipeCardSummarySection";
import { RecipeCardContext } from "../contexts/RecipeCardContext";
import { UseThumbsUpDownState } from "../hooks/useThumbsUpDownState";
import { useToggleDialogStatus } from "../hooks/useToggleDialogStatus";
//import { PlaceholderData } from "@/assets/PlaceholderData";

/**
 * Recipe Card component displaying all information for a given recipe.
 */
export function RecipeCard({ recipe }) {
  //Expand or collapse state for the RecipeCard Collapsable stored in RecipeCard feature hooks
  const { openStatus: isExpanded, toggleDialogStatus: handleExpandClick } = useToggleDialogStatus();

  //Thumbs up/dowm rating state for the RecipeCard stored in RecipeCard feature hooks
  const { countUp, countDown, setCountUp, setCountDown } = UseThumbsUpDownState(recipe.thumbsUpCount, recipe.thumbsDownCount);

  //value object containing RecipeCard state to be passed via context and not props.
  const RecipeCardState = {
    isExpanded,
    handleExpandClick,
    countUp,
    countDown,
    setCountUp,
    setCountDown,
  };

  return (
    <RecipeCardContext.Provider value={RecipeCardState}>
      <Card sx={{ display: "flex", flexDirection: "column", boxShadow: "20" }}>
        <RecipeCardHeader recipeTitle={recipe.name} recipeAuthor={recipe.uploader} />
        {/* <RecipeCardImage imageTitle={PlaceholderData.at(0).recipeImageTitle} recipeKey={recipe.key} /> */}
        <RecipeCardCarousel recipeKey={recipe.key} />
        <RecipeCardSummarySection>{recipe.recipeSummary}</RecipeCardSummarySection>
        <RecipeCardActionsBar />
        <RecipeCardCollapsableContent recipeIngredients={recipe.ingredients} recipeMethod={recipe.method} />
      </Card>
    </RecipeCardContext.Provider>
  );
}

//Check required props are provided and of the correct type
RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};
