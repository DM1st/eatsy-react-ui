import { useState, useEffect } from "react";
import API from "@/api/axios";

export const UseRecipeImageState = () => {
  const [recipeImage, setRecipeImage] = useState([]);

  useEffect(() => {
    async function getRecipeImage() {
      try {
        const response = await API.get("api/get-image-with-media-type", {
          responseType: "arraybuffer",
        });
        setRecipeImage(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipeImage();
  }, []);

  console.log(recipeImage); //remove
  return { recipeImage };
};
