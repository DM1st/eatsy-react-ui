import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Container, Tabs, Tab } from "@mui/material";
import { React, useState } from "react";
import FreeTextSearchAutocomplete from "./FreeTextSearchAutocomplete";
import TabPanel from "./TabPanel";
import FilterByTagsSearch from "../../../components/FilterByTagsSearch";

/**
 * The Tabs and associated TabPanels for storing and displaying the selected tab content
 * in the main section of the Eatsy Recipe page.
 */
export function TabPanelSearchOptions() {
  //State for which tab value is selected (based on individual Tab Panel index)
  const [value, setValue] = useState(0);
  //change the state for which tab has been selected. (based on individual Tab Panel index)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ marginTop: "20px" }} maxWidth="sm">
      <Tabs value={value} onChange={handleChange} aria-label="search tabs" centered={true}>
        <Tab icon={<LocalOfferSharpIcon />} label="Filter by tag" iconPosition="start" style={{ minHeight: "30%" }} />
        <Tab icon={<SearchSharpIcon />} label="Free text search" iconPosition="start" style={{ minHeight: "30%" }} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FilterByTagsSearch />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FreeTextSearchAutocomplete />
      </TabPanel>
    </Container>
  );
}
