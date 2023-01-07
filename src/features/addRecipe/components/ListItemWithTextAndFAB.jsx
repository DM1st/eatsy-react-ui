import { Typography, Container, Fab, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { RecipeDialogListItemTheme } from "../styles/RecipeDialogListItemTheme";

/**
 * Component for the list items in RecipeDialog(s) that have text and a clickable FAB.
 */
export default function ListItemWithTextAndFAB({
  optionalIdForHtmlLabel,
  handleOpen,
  selectFabImageIcon,
  childDialog,
  children,
}) {
  return (
    <ListItem divider theme={RecipeDialogListItemTheme}>
      <Container theme={RecipeDialogListItemTheme} variant="primary">
        {/*The children contains the text to be in the row for this list item*/}
        <Typography color="textSecondary">{children}</Typography>
        {/*label required for the Fabs that use the FileUploadInput component */}
        <label htmlFor={optionalIdForHtmlLabel}>
          <Fab onClick={handleOpen} component="span" theme={RecipeDialogListItemTheme}>
            {/*The icon to be inside the Floating Action Button*/}
            <>{selectFabImageIcon}</>
          </Fab>
        </label>
      </Container>
      {/* The specified child dialog only becomes visible once the FAB has been clicked. */}
      <>{childDialog}</>
    </ListItem>
  );
}

// To confirm the correct type is passed to the component for each prop (and that all required props are provided)
ListItemWithTextAndFAB.propTypes = {
  optionalIdForHtmlLabel: PropTypes.string, //Only required if uploading a file on click
  handleOpen: PropTypes.func, //Not always required as some FABs do not open a new dialog on click
  selectFabImageIcon: PropTypes.element.isRequired,
  childDialog: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
