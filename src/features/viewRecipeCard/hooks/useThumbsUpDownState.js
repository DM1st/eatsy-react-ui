import { useState } from "react";
import { initialNumberofThumbsdown, initialNumberofThumbsUp } from "@/assets/PlaceholderData";

/**
 * State management for the Thumbs up/down recipe rating feature
 */
export const UseThumbsUpDownState = () => {
  //State for thumbs up/down on the Recipe card.
  const [countUp, setCountUp] = useState(initialNumberofThumbsUp);
  const [countDown, setCountDown] = useState(initialNumberofThumbsdown);

  return { countUp, countDown, setCountUp, setCountDown };
};
