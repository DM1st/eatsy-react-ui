import axios from "axios";

/**
 * Base instance of axios for the codebase.
 * Defines base URL and other configuration elements.
 */
export default axios.create({
  baseURL: "http://localhost:8080/",
});
