import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";

/**
 * The Tab Panel component to display the content for the selected tab
 * The content/componet to display for a given tab is passed into the TabPanel as children.
 * Value is the index value of the currently selected tab.
 * So the tab whose index number matches the current value is
 * the selected (and displayed) tab in the Tab panel
 */
export default function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
      {value === index && (
        <Box sx={{ paddingTop: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

//Check required props are provided and of the correct type
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
