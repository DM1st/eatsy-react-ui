import { Typography, Container, Fab, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import { RecipeDialogListItemTheme } from "../styles/RecipeDialogListItemTheme";

/**
 * Component for the list items in RecipeDialog(s) that have text and a clickable FAB.
 */
export default function ListItemwithTextAndFAB({
  handleOpen,
  selectFabImageIcon,
  childDialog,
  children,
}) {
  return (
    <ListItem divider theme={RecipeDialogListItemTheme}>
      <Container theme={RecipeDialogListItemTheme}>
        {/*The children contains the text to be in the row for this list item*/}
        <Typography color="textSecondary">{children}</Typography>
        <Fab onClick={handleOpen} component="span" theme={RecipeDialogListItemTheme}>
          {/*The icon to be inside the Floating Action Button*/}
          <>{selectFabImageIcon}</>
        </Fab>
      </Container>
      {/* The specified child dialog only becomes visible once the FAB has been clicked. */}
      <>{childDialog}</>
    </ListItem>
  );
}

// To confirm the correct type is passed to the component for each prop (and that all required props are provided)
ListItemwithTextAndFAB.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  selectFabImageIcon: PropTypes.element.isRequired,
  childDialog: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};
