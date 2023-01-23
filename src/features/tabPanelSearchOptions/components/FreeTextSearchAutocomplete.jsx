import { Autocomplete, TextField } from "@mui/material";
import { React } from "react";

//Dummy data until the UI is integrated with the backend.
const recipes = [
  { name: "Pasta Bake" },
  { name: "Pulled pork" },
  { name: "Homemade lemonade" },
  { name: "Gammon in COla" },
  { name: "Treacle sponge" },
  { name: "Chocolate pudding" },
  { name: "Turkey Tagine" },
];

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
