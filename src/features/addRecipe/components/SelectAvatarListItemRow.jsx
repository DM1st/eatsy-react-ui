import { ListItem, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import StackItem from "./StackItem";

/**
 * Reusable ListItem for rows, such as in the SelectAvatar dialog
 */
export default function SelectAvatarListItemRow({ avatarOne, avatarTwo, avatarThree, avatarFour }) {
  return (
    <ListItem divider>
      <Stack direction="row" spacing={2} padding={2}>
        <StackItem color={avatarOne.color} label={avatarOne.label}>
          {avatarOne.icon}
        </StackItem>
        <StackItem color={avatarTwo.color} label={avatarTwo.label}>
          {avatarTwo.icon}
        </StackItem>
        <StackItem color={avatarThree.color} label={avatarThree.label}>
          {avatarThree.icon}
        </StackItem>
        <StackItem color={avatarFour.color} label={avatarFour.label}>
          {avatarFour.icon}
        </StackItem>
      </Stack>
    </ListItem>
  );
}

//Check that the correct props and type are passed in when the SelectAvatarListItemRow function is called.
SelectAvatarListItemRow.propTypes = {
  avatarOne: PropTypes.object.isRequired,
  avatarTwo: PropTypes.object.isRequired,
  avatarThree: PropTypes.object.isRequired,
  avatarFour: PropTypes.object.isRequired,
};
