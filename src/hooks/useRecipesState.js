import { useState, useEffect } from "react";
import API from "@/api/axios";

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

  //axios get() returns a promise which returns a response object.
  //inside the response object, there is data that is assigned to the value of recipes
  useEffect(() => {
    API.get("api/retrieveAllRecipes")
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
