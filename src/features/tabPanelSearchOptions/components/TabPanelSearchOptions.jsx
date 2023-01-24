import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Container, Tabs, Tab } from "@mui/material";
import { React } from "react";
import FreeTextSearchAutocomplete from "./FreeTextSearchAutocomplete";
import TabPanel from "./TabPanel";
import FilterByTagsSearch from "../../../components/FilterByTagsSearch";
import { UseTabPanelSearchOptionsState } from "../hooks/TabPanelSearchOptionsState";

/**
 * The Tabs and associated TabPanels for storing and displaying the selected tab content
 * in the main section of the Eatsy Recipe page.
 */
export function TabPanelSearchOptions() {
  //Variable to store the state of the Tab Panel Search Options
  const tabPanelSearchOptionsState = UseTabPanelSearchOptionsState();

  return (
    <Container sx={{ marginTop: "20px" }} maxWidth="sm">
      <Tabs value={tabPanelSearchOptionsState.value} onChange={tabPanelSearchOptionsState.handleChange} aria-label="search tabs" centered={true}>
        <Tab icon={<LocalOfferSharpIcon />} label="Filter by tag" iconPosition="start" style={{ minHeight: "30%" }} />
        <Tab icon={<SearchSharpIcon />} label="Free text search" iconPosition="start" style={{ minHeight: "30%" }} />
      </Tabs>
      <TabPanel value={tabPanelSearchOptionsState.value} index={0}>
        <FilterByTagsSearch />
      </TabPanel>
      <TabPanel value={tabPanelSearchOptionsState.value} index={1}>
        <FreeTextSearchAutocomplete />
      </TabPanel>
    </Container>
  );
}
