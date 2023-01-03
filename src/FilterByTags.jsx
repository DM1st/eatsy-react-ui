import { Autocomplete, TextField } from "@mui/material";
import { React } from "react"

function FilterByTags() {

    const tags = [
        { tag: "Dessert" },
        { tag: "Cake" },
        { tag: "Christmas" },
        { tag: "Food" },
        { tag: "Drink" },
        { tag: "Healthy" },
        { tag: "Slow Cooker" },

    ]

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
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="filter by tags"
                />
            )}
        />
    );

}

export default FilterByTags;