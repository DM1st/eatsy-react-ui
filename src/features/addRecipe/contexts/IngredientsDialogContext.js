import { createContext } from "react";
/**
 * Create context API to store the Ingredients Dialog context at the parent component level (RecipeDialog)
 * and provide the state to all necessary child components via the corresponding Provider component.
 * This will also reduce Prop drilling.
 */
const IngredientsDialogContext = createContext();

export { IngredientsDialogContext };
