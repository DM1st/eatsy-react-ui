import { Container, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import TabPanel from "./TabPanel";
import { UseTabPanelOptionsState } from "../hooks/TabPanelOptionsState";

/**
 * The Tabs and associated TabPanels for storing and displaying the selected tab content
 * on the respective component
 */
export function TabPanelOptions({ tabIconZero, tabLabelZero, tabComponentZero, tabIconOne, tabLabelOne, tabComponentOne }) {
  //Variable to store the state of the Tab Panel Options
  const tabPanelOptionsState = UseTabPanelOptionsState();

  return (
    <Container sx={{ marginTop: "20px" }} maxWidth="sm" disableGutters>
      <Tabs value={tabPanelOptionsState.value} onChange={tabPanelOptionsState.handleChange} centered={true} variant="fullWidth">
        <Tab icon={tabIconZero} label={tabLabelZero} iconPosition="start" style={{ minHeight: "30%" }} />
        <Tab icon={tabIconOne} label={tabLabelOne} iconPosition="start" style={{ minHeight: "30%" }} />
      </Tabs>
      <TabPanel value={tabPanelOptionsState.value} index={0}>
        <>{tabComponentZero}</>
      </TabPanel>
      <TabPanel value={tabPanelOptionsState.value} index={1}>
        <>{tabComponentOne}</>
      </TabPanel>
    </Container>
  );
}

// To confirm the correct type is passed to the component for each prop (and that all required props are provided)
TabPanelOptions.propTypes = {
  tabIconZero: PropTypes.node.isRequired,
  tabLabelZero: PropTypes.string.isRequired,
  tabComponentZero: PropTypes.node.isRequired,
  tabIconOne: PropTypes.node.isRequired,
  tabLabelOne: PropTypes.string.isRequired,
  tabComponentOne: PropTypes.node.isRequired,
};
