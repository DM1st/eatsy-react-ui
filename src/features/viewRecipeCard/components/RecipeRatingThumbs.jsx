import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";
import { React, useContext } from "react";
import { RecipeCardContext } from "../contexts/RecipeCardContext";

/**
 * Thumbs up/down rating to be implemented on recipe card component
 * Allows for a ratio/scoring system of each recipe for the users.
 */
export default function RecipeRatingThumbs() {
  //Access the RecipeCard state from the RecipeCard feature level context API
  const { countUp, countDown, setCountUp, setCountDown } = useContext(RecipeCardContext);

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
