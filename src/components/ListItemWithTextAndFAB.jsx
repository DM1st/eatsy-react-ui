import { Typography, Container, Fab, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { DialogListItemTheme } from "@/themes/DialogListItemTheme";

/**
 * Component for the list items in Dialog(s) that have text and a clickable FAB.
 */
export default function ListItemWithTextAndFAB({
  hasDivider,
  optionalIdForHtmlLabel,
  handleOpen,
  selectFabImageIcon,
  fabSize,
  childDialog,
  children,
}) {
  return (
    <ListItem divider={hasDivider} theme={DialogListItemTheme}>
      <Container theme={DialogListItemTheme} variant="primary">
        {/*The children contains the text to be in the row for this list item*/}
        <Typography color="textSecondary">{children}</Typography>
        {/*label required for the Fabs that use the FileUploadInput component */}
        <label htmlFor={optionalIdForHtmlLabel}>
          <Fab size={fabSize} onClick={handleOpen} component="span" theme={DialogListItemTheme}>
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
  hasDivider: PropTypes.bool.isRequired,
  optionalIdForHtmlLabel: PropTypes.string, //Only required if uploading a file on click
  handleOpen: PropTypes.func, //Not always required as some FABs do not open a new dialog on click
  selectFabImageIcon: PropTypes.element.isRequired,
  fabSize: PropTypes.string.isRequired,
  childDialog: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
