import LocalOfferSharpIcon from "@mui/icons-material/LocalOfferSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { Container, Tabs, Tab } from "@mui/material";
import { React, useState } from "react";
import FilterByTagsSearch from "./FilterByTagsSearch";
import FreeTextSearchAutocomplete from "./FreeTextSearchAutocomplete";
import TabPanel from "./TabPanel";

/**
 * The Tabs and associated TabPanels for storing and displaying the selected tab content
 * in the main section of the Eatsy Recipe page.
 */
export default function TabsAndTabPanelsSearchOptions() {
  //State for which tab value is selected (based on individual Tab Panel index)
  const [value, setValue] = useState(0);
  //change the state for which tab has been selected.
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ marginTop: "20px" }} maxWidth="sm">
      <Tabs value={value} onChange={handleChange} aria-label="search tabs" centered={true}>
        <Tab icon={<LocalOfferSharpIcon />} label="Filter by tag" iconPosition="start" style={{ minHeight: "30%" }} {...a11yProps(0)} />
        <Tab icon={<SearchSharpIcon />} label="Free text search" iconPosition="start" style={{ minHeight: "30%" }} {...a11yProps(1)} />
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

//Accessibility props to be passed in via spread operator
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
