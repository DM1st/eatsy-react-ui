import { Autocomplete, TextField } from "@mui/material";
import { React } from "react";

/**
 * FilterByTags component for searching and filtering.
 */
export default function FilterByTags() {
  //Static data until the solution is integrated.
  const tags = [
    { tag: "Dessert" },
    { tag: "Cake" },
    { tag: "Christmas" },
    { tag: "Food" },
    { tag: "Drink" },
    { tag: "Healthy" },
    { tag: "Slow Cooker" },
  ];

  //The Autocomplete with props for number of tags that can be displayed
  //and filtering whilst typing
  return (
    <Autocomplete
      fullWidth
      size="small"
      multiple
      limitTags={2}
      id="tags-outlined"
      options={tags}
      getOptionLabel={(option) => option.tag}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="filter by tags" />}
    />
  );
}
