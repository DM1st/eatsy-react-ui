import { useState } from "react";

/**
 * State management for the Thumbs up/down recipe rating feature
 */
export const UseThumbsUpDownState = (thumbsUpCount, thumbsDownCount) => {
  //State for thumbs up/down on the Recipe card.
  const [countUp, setCountUp] = useState(thumbsUpCount);
  const [countDown, setCountDown] = useState(thumbsDownCount);

  return { countUp, countDown, setCountUp, setCountDown };
};
