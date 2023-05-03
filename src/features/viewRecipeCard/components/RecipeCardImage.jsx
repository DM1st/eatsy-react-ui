import { CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

/**
 * Recipe card image component to display the Recipe image on the Recipe Card
 */
export default function RecipeCardImage({ imageTitle, recipeKey }) {
  return (
    <CardMedia title={imageTitle}>
      <img
        src={"http://localhost:8080/api/get/" + recipeKey}
        alt={imageTitle}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "100%",
        }}
      />
    </CardMedia>
  );
}

//Check required props are provided and of the correct type.
RecipeCardImage.propTypes = {
  imageTitle: PropTypes.string.isRequired,
  recipeKey: PropTypes.string.isRequired,
};
