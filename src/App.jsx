import {React, useState } from 'react';

import RecipeDialog from './RecipeDialog';
import FilterByTags from './FilterByTags';

import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import { styled, alpha } from '@mui/material/styles';
import { Typography, Link, AppBar, Box, CssBaseline, Grid, Toolbar, Container, Fab, Autocomplete, TextField, Tabs, Tab, Tooltip } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import RecipeCard from './RecipeCard';

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const recipes = [
  { name: 'Pasta Bake' },
  { name: 'Pulled pork' },
  { name: 'Homemade lemonade' },
  { name: 'Gammon in COla' },
  { name: 'Treacle sponge' },
  { name: 'Chocolate pudding' },
  { name: 'Turkey Tagine' },

]


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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {



  





  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };


  //State management for the Recipe Dialog (defined in parent component - App).
  const [openRecipeDialog, setOpenRecipeDialog] = React.useState(false);

  const handleFabClickOpenRecipeDialog = () => {
    setOpenRecipeDialog(true);
  };


  const handleCloseRecipeDialog = () => {
    setOpenRecipeDialog(false);
  };


  // function handleRemoveIngredientClick(key) {

  //   //const updatedIngredientList = ingredients.filter((ingredient) => ingredient.key !== key);
  //   //setIngredients(updatedIngredientList);
  //   alert('dog')

  // };

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Grid container direction='row' alignItems='center' justifyContent='space-between'>
          <Toolbar>
            <MenuBookIcon sx={{ marginRight: '15px' }} />
          </Toolbar>
          <Typography variant="h6">
            Eatsy Recipe App
          </Typography>
          <Toolbar sx={{ paddingTop: '4px', marginLeft: '0px' }}>
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  onClose={handleTooltipClose}
                  open={open}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  title="Eatsy is an online recipe book to allow users to find, create and share their favourite recipes with other cooking and baking enthusiasts!"
                >
                  <iconButton onClick={handleTooltipOpen}>
                    <InfoOutlinedIcon />
                  </iconButton>
                </Tooltip>
              </div>
            </ClickAwayListener>
          </Toolbar>
        </Grid>
      </AppBar>
      <main>
        <div>
          <Fab sx={{
            position: "fixed",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2)
          }}
            color="secondary"
            aria-label="add"
            onClick={handleFabClickOpenRecipeDialog}
          >
            <AddIcon />
          </Fab>
          <RecipeDialog
            openRecipeDialog={handleFabClickOpenRecipeDialog}
            closeRecipeDialog={handleCloseRecipeDialog}
          />
        </div>
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Container sx={{ marginTop: '20px' }} maxWidth="sm">
            <div >
              <Tabs value={value} onChange={handleChange} aria-label="search tabs" centered="true" >
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
            </div>
          </Container>
        </Box>
        <Container maxWidth="md" sx={{ padding: '20px 0' }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <RecipeCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer sx={{ bgcolor: 'background.paper' }}>
        <Grid sx={{ marginBottom: '10px' }} container justifyContent="center" >
          <SvgIcon>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </SvgIcon>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
            <Link variant='body2' href="https://github.com/DM1st">
              Created by DM1st
            </Link>
          </Typography>
        </Grid>
      </footer>
    </div>
  )
};

export default App;