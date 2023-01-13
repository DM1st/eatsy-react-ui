import AddIcon from "@mui/icons-material/Add";
import { InputBase, Divider, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

/**
 * A component for adding items via the enter key or a plus icon button.
 *
 * Whever user types, onChange gets called. React passes event in automatically so we can obtain
 * the value. setInputValue is then called to set what the user has typed in as state.
 * Value of the input to be whatever value is stored in the inputValue state variable.
 */
export default function AddItemInputBase({ inputValue, setInputValue, handleAddButtonClick }) {
  return (
    <>
      <InputBase
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleAddButtonClick();
          }
        }}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add ingredient"
        inputProps={{ "aria-label": "Add new ingredient" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton onClick={() => handleAddButtonClick()} color="primary" sx={{ p: "10px" }} aria-label="add ingredient">
        <AddIcon />
      </IconButton>
    </>
  );
}

AddItemInputBase.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  handleAddButtonClick: PropTypes.func.isRequired,
};
