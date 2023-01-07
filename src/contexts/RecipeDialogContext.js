import { createContext } from "react";
/**
 * Create context API to store the Recipe Dialog context and provide the state to all
 * necessary child components via the corresponding Provider component.
 * This will also reduce Prop drilling.
 */
const RecipeDialogContext = createContext();

export { RecipeDialogContext };
