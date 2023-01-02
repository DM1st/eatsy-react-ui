import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Autocomplete, TextField, Tabs, Tab, Typography } from '@mui/material';

import FilterByTags from './FilterByTags';

import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

//TODO - defines the tabpanel component used in the main function
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }} >
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

//TODO
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

//TODO
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function SearchTabPanel() {

    //TODO - Dummy data until we are integrated
    const recipes = [
        { name: 'Pasta Bake' },
        { name: 'Pulled pork' },
        { name: 'Homemade lemonade' },
        { name: 'Gammon in COla' },
        { name: 'Treacle sponge' },
        { name: 'Chocolate pudding' },
        { name: 'Turkey Tagine' },
    ]

    //State for which tab value is selected    
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <Box sx={{ bgcolor: 'background.paper' }}>
            <Container sx={{ marginTop: '20px' }} maxWidth="sm">
                <>
                    <Tabs value={value} onChange={handleChange} aria-label="search tabs" centered={true} >
                        <Tab icon={<LocalOfferSharpIcon />}
                            label="Filter by tag"
                            iconPosition='start'
                            style={{ minHeight: "30%" }}
                            {...a11yProps(0)}
                        />
                        <Tab icon={<SearchSharpIcon />}
                            label="Free text search"
                            iconPosition='start'
                            style={{ minHeight: "30%" }}
                            {...a11yProps(1)}
                        />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <FilterByTags />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Autocomplete
                            size="small"
                            freeSolo
                            id="free-solo-search"
                            disableClearable
                            options={recipes.map((option) => option.name)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search input"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                />
                            )}
                        />
                    </TabPanel>
                </>
            </Container>
        </Box>
    )

}

export default SearchTabPanel