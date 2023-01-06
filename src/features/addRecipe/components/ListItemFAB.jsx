import { Typography, Container, Fab, ListItem } from "@mui/material";
import { blue } from "@mui/material/colors";
import PropTypes from "prop-types";
import { React } from "react";
import SelectAvatar from "./SelectAvatar";
import { RecipeDialogListItemTheme } from "../styles/RecipeDialogListItemTheme";

/**
 * Component for the list items in RecipeDialog(s) that have text and a clickable FAB.
 */
export default function ListItemFAB({
  open,
  handleOpen,
  closeDialog,
  selectFabImageIcon,
  children,
}) {
  return (
    <ListItem divider theme={RecipeDialogListItemTheme}>
      <Container
        sx={{
          width: "100%",
          padding: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography color="textSecondary">{children}</Typography>
        <Fab
          onClick={handleOpen}
          component="span"
          sx={{ color: blue[700], backgroundColor: "white" }}
        >
          <>{selectFabImageIcon}</>
        </Fab>
      </Container>
      {/* The specified child dialog only becomes visible once the FAB has been clicked. */}
      <SelectAvatar openSelectAvatarDialog={open} closeSelectAvatarDialog={closeDialog} />
    </ListItem>
  );
}

// To confirm the correct type is passed to the component for each prop (and that all required props are provided)
ListItemFAB.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  closeDialog: PropTypes.func.isRequired,
  selectFabImageIcon: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
};
