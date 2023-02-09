import { useState } from "react";

/**
 * State management for the TabPanelOptions feature
 */
export const UseTabPanelOptionsState = (initial = 0) => {
  //State for which tab value is selected (based on individual Tab Panel index)
  const [value, setValue] = useState(initial);
  //change the state for which tab has been selected. (based on individual Tab Panel index)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return { value, handleChange };
};
