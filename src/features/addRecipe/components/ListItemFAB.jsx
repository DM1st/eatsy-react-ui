import CollectionsIcon from "@mui/icons-material/Collections";
import { Typography, Container, Fab, ListItem } from "@mui/material";
import { blue } from "@mui/material/colors";
import PropTypes from "prop-types";
import { React } from "react";
import SelectAvatar from "./SelectAvatar";

export default function ListItemFAB(props) {
  const { theme, open, handleOpen, closeSelectAvatarDialog } = props;
  return (
    <ListItem divider theme={theme}>
      <Container
        sx={{
          width: "100%",
          padding: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography color="textSecondary">Select your avatar</Typography>
        <Fab
          onClick={handleOpen}
          component="span"
          sx={{ color: blue[700], backgroundColor: "white" }}
        >
          <CollectionsIcon />
        </Fab>
      </Container>
      <SelectAvatar
        openSelectAvatarDialog={open}
        closeSelectAvatarDialog={closeSelectAvatarDialog}
      />
    </ListItem>
  );
}

ListItemFAB.propTypes = {
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
  closeSelectAvatarDialog: PropTypes.func.isRequired,
};
