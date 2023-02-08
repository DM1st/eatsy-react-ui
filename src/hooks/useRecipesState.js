import axios from "axios";
import { useState, useEffect } from "react";

/**
 * State management for the recipes in Eatsy
 *
 * useEffect used to couteract the http request being
 * sent on each re-render. (side-effects executed in the render cycle)
 * Without useEffect, this would cause the state to be resent with the Get request
 * Finally, an infinite loop would be executed as setRecipes() would trigger
 * a re-render (which would lead to another Get request etc...)
 *
 * To prevent the function from being called repeatedly, '[]' is passed as the second argument.
 * This informs useEffect that the effect isn't dependent on any values from props/state
 * thus never re-running
 *
 */
export const UseRecipesState = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/retrieveAllRecipes")
      .then((res) => {
        const response = res.data;
        setRecipes(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(recipes); //TODO - remove
  return { recipes };
};
