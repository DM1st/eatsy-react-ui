import axios from "axios";

/**
 * Base instance of axios for the codebase.
 * Defines base URL and other configuration elements in a centralised location.
 *
 * Allows for this exported object to be named as something concise (such as API) in the
 * consuming code when it is imported. This allows for it to be used as a shorthand for the
 * Axios instance e.g.
 * API.get("api/retirveAllRecipes")
 * rather than
 * axios.get("http://localhost:8080/api/retrieveAllRecipes")
 */
export default axios.create({
  baseURL: "http://localhost:8080/",
});
