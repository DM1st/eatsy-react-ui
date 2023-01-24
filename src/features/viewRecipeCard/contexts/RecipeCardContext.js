import { createContext } from "react";
/**
 * Create context API to store the RecipeCard context at the feature level (RecipeCard)
 * and provide the state to all necessary child components via the corresponding Provider component.
 * This will also reduce Prop drilling.
 */
const RecipeCardContext = createContext();

export { RecipeCardContext };
