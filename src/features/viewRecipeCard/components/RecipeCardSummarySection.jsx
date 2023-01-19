import { Typography, CardContent } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

/**
 * Recipe card summary component to give trhe recipe card a section that provides an overview of the recipe.
 */
export default function RecipeCardSummarySection({ children }) {
  return (
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography>{children}</Typography>
    </CardContent>
  );
}

//Check required props are provided and of the correct type.
RecipeCardSummarySection.propTypes = {
  children: PropTypes.string.isRequired,
};
