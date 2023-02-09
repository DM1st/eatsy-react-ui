import { Container, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import { React } from "react";
import TabPanel from "./TabPanel";
import { UseTabPanelOptionsState } from "../hooks/TabPanelOptionsState";

/**
 * The Tabs and associated TabPanels for storing and displaying the selected tab content
 * on the respective component
 */
export function TabPanelOptions({ tabIconOne, tabLabelOne, tabComponentOne, tabIconTwo, tabLabelTwo, tabComponentTwo }) {
  //Variable to store the state of the Tab Panel Options
  const tabPanelOptionsState = UseTabPanelOptionsState();

  return (
    <Container sx={{ marginTop: "20px" }} maxWidth="sm">
      <Tabs value={tabPanelOptionsState.value} onChange={tabPanelOptionsState.handleChange} centered={true}>
        <Tab icon={tabIconOne} label={tabLabelOne} iconPosition="start" style={{ minHeight: "30%" }} />
        <Tab icon={tabIconTwo} label={tabLabelTwo} iconPosition="start" style={{ minHeight: "30%" }} />
      </Tabs>
      <TabPanel value={tabPanelOptionsState.value} index={0}>
        <>{tabComponentOne}</>
      </TabPanel>
      <TabPanel value={tabPanelOptionsState.value} index={1}>
        <>{tabComponentTwo}</>
      </TabPanel>
    </Container>
  );
}

// To confirm the correct type is passed to the component for each prop (and that all required props are provided)
TabPanelOptions.propTypes = {
  tabIconOne: PropTypes.node.isRequired,
  tabLabelOne: PropTypes.string.isRequired,
  tabComponentOne: PropTypes.node.isRequired,
  tabIconTwo: PropTypes.node.isRequired,
  tabLabelTwo: PropTypes.string.isRequired,
  tabComponentTwo: PropTypes.node.isRequired,
};
