import { Autocomplete, TextField } from "@mui/material";
import { React } from "react";
import { recipes } from "../assets/PlaceholderData";

/**
 * Autocomplete component to search over existing recipes
 */
export default function FreeTextSearchAutocomplete() {
  return (
    <Autocomplete
      size="small"
      freeSolo
      id="free-solo-search"
      disableClearable
      options={recipes.map((option) => option.name)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
}
