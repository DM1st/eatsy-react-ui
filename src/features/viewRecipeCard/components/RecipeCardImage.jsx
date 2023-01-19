import { CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

/**
 * Recipe card image component to display the Recipe image on the Recipe Card in 16:9 aspect ratio
 */
export default function RecipeCardImage({ image, imageTitle }) {
  return (
    <CardMedia
      sx={{ paddingTop: "56.25%" }} //16:9 aspect ratio
      image={image}
      title={imageTitle}
    />
  );
}

//Check required props are provided and of the correct type.
RecipeCardImage.propTypes = {
  image: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
};
