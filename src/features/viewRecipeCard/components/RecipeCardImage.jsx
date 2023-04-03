import { CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { UseRecipeImageState } from "@/hooks/useRecipeImageState";

/**
 * Recipe card image component to display the Recipe image on the Recipe Card in 16:9 aspect ratio
 */
export default function RecipeCardImage({ imageTitle }) {
  //Access the state that retrieves and holds the recipes from the eatsy service.
  const { recipeImage } = UseRecipeImageState();

  const blob = new Blob([new Uint8Array(recipeImage)], { type: "image/jpeg" });

  return (
    <CardMedia /* sx={{ paddingTop: "56.25%" }} 16:9 aspect ratio*/ title={imageTitle}>
      <img
        src={URL.createObjectURL(blob)}
        alt=""
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
};
