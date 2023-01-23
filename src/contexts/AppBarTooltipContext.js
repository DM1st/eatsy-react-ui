import { createContext } from "react";
/**
 * Create context API to store the Tooltip context and provide the state
 * to all necessary child components via the corresponding Provider component.
 * This will also reduce Prop drilling.
 */
const AppBarTooltipContext = createContext();

export { AppBarTooltipContext };
