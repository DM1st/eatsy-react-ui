import { useState, useEffect } from "react";
import API from "@/api/axios";

/**
 * State management for the recipes in Eatsy
 *
 * useEffect used to couteract the http request being
 * sent on each re-render. (side-effects executed in the render cycle)
 * Without useEffect, this would cause the state to be re-sent with the Get request.
 * Finally, an infinite loop would be executed as setRecipes() would trigger
 * a re-render (which would lead to another Get request etc...)
 *
 * To prevent the function from being called repeatedly, '[]' is passed as the second argument.
 * This informs useEffect that the effect isn't dependent on any values from props/state
 * thus never re-running
 *
 * axios get() returns a promise that resolves to the response data if the request
 * was successful, or rejects with an error if the request failed.
 * A promise is used for handling asynchronous operations in a more structured way
 * than using callbacks.
 *
 * The asynchronous behaviour of Axios and Promises makes the app more performant
 * and responsive (app will still respond to user nteractions) since the main execution
 * thread is not blocked whilst waiting for the response from the server.
 * The await keyword resolves the promise and returns the value which is stored
 * in the response variable.
 *
 */
export const UseRecipesState = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await API.get("api/retrieveAllRecipes");
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getRecipes();
  }, []);

  //console.log(recipes); //remove
  return { recipes };
};
