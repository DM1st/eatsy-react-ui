import { useState } from "react";

/**
 * State management for the Thumbs up/down recipe rating feature
 */
export const UseThumbsUpDownState = () => {
  //State for thumbs up/down on the Recipe card.
  const [countUp, setCountUp] = useState(5);
  const [countDown, setCountDown] = useState(2);

  return { countUp, countDown, setCountUp, setCountDown };
};
