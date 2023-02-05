import { Container, Typography, Button, ListItem } from "@mui/material";
import PropTypes from "prop-types";

import { React } from "react";
import { RecipeDialogListItemTheme } from "../themes/RecipeDialogListItemTheme";

/**
 * Reusable ListItem for rows, with text and a standard button
 */
export default function ListItemWithButton({ rowText, buttonText, onClickEvent, childDialog }) {
  return (
    <ListItem divider theme={RecipeDialogListItemTheme}>
      <Container theme={RecipeDialogListItemTheme} variant="secondary">
        <Typography color="textSecondary">{rowText}</Typography>
        <Button variant="outlined" onClick={onClickEvent}>
          {buttonText}
        </Button>
        {/* The specified child dialog only becomes visible once the FAB has been clicked. */}
        <>{childDialog}</>
      </Container>
    </ListItem>
  );
}

//Check that the correct props and type are passed in when the ListItemWithButton function is called.
ListItemWithButton.propTypes = {
  rowText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClickEvent: PropTypes.func /*.isRequired,*/, //TODO required when Method dialog created
  childDialog: PropTypes.node /*.isRequired,*/, //TODO required when Method dialog created
};
