import { Container } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

/**
 * A Function to provide buttons with the ability to upload a file
 * without displaying the html input on the UI
 */
export default function FileUploadInput(props) {
  const { label } = props;

  return (
    <Container sx={{ display: "none" }}>
      <input
        accept="image/*"
        id={label}
        multiple
        type="file"
        /*onChange={this.handleUploadClick}*/
      />
    </Container>
  );
}

//Check to ensure required props get passed through and are of the right type
FileUploadInput.propTypes = {
  label: PropTypes.string.isRequired,
};
