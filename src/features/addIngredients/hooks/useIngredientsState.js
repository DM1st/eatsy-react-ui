import { useState } from "react";

/**
 * State management for the list of ingredients for a given recipe.
 */
export const useIngredientsState = () => {
  //State object - initialise with an empty array
  const [ingredients, setIngredients] = useState([]);

  //State object for adding new ingredient to ingredient list
  const [inputValue, setInputValue] = useState("");

  return { ingredients, setIngredients, inputValue, setInputValue };
};
