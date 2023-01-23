import { Autocomplete, TextField } from "@mui/material";
import { React } from "react";
import { tags } from "../assets/PlaceholderData";

/**
 * FilterByTags component for searching and filtering.
 */
export default function FilterByTagsSearch() {
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
      //params=tags array specified by naming in the options propr
      renderInput={(params) => <TextField {...params} label="filter by tags" />}
    />
  );
}
