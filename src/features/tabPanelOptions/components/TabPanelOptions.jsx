import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Container, Tabs, Tab } from "@mui/material";
import { React } from "react";
import FreeTextSearchAutocomplete from "./FreeTextSearchAutocomplete";
import TabPanel from "./TabPanel";
import FilterByTagsSearch from "../../../components/FilterByTagsSearch";
import { UseTabPanelOptionsState } from "../hooks/TabPanelOptionsState";

/**
 * The Tabs and associated TabPanels for storing and displaying the selected tab content
 * on the respective component
 */
export function TabPanelOptions() {
  //Variable to store the state of the Tab Panel Options
  const tabPanelOptionsState = UseTabPanelOptionsState();

  return (
    <Container sx={{ marginTop: "20px" }} maxWidth="sm">
      <Tabs value={tabPanelOptionsState.value} onChange={tabPanelOptionsState.handleChange} aria-label="search tabs" centered={true}>
        <Tab icon={<LocalOfferSharpIcon />} label="Filter by tag" iconPosition="start" style={{ minHeight: "30%" }} />
        <Tab icon={<SearchSharpIcon />} label="Free text search" iconPosition="start" style={{ minHeight: "30%" }} />
      </Tabs>
      <TabPanel value={tabPanelOptionsState.value} index={0}>
        <FilterByTagsSearch />
      </TabPanel>
      <TabPanel value={tabPanelOptionsState.value} index={1}>
        <FreeTextSearchAutocomplete />
      </TabPanel>
    </Container>
  );
}
