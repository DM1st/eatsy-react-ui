import { useState, useEffect } from "react";
import API from "@/api/axios";

export const UseRecipeImageModelsState = (recipeKey) => {
  const [recipeImageModels, setRecipeImageModels] = useState([]);

  useEffect(() => {
    async function getRecipeImageModels() {
      try {
        const response = await API.get("api/get/imageModels/" + recipeKey);
        setRecipeImageModels(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getRecipeImageModels();
  }, [recipeKey]);

  console.log(recipeImageModels);
  return { recipeImageModels };
};
