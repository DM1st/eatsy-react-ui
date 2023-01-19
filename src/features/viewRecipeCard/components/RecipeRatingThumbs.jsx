import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";
import { React, useState } from "react";

/**
 * Thumbs up/down rating to be implemented on recipe card component
 * Allows for a ratio/scoring system of each recipe for the users.
 */
export default function RecipeRatingThumbs() {
  //Placeholder state
  //State for thumbs up/down on the Recipe card.
  const [countUp, setCountUp] = useState(5);
  const [countDown, setCountDown] = useState(2);

  return (
    <>
      <Button onClick={() => setCountUp(countUp + 1)}>
        <ThumbUpIcon />
        {`${countUp === 0 ? " " : countUp}`}
      </Button>
      <Button onClick={() => setCountDown(countDown + 1)}>
        <ThumbDownIcon />
        {`${countDown === 0 ? " " : countDown}`}
      </Button>
    </>
  );
}
