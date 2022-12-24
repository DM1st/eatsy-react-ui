import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@mui/material/SvgIcon';
import { styled, alpha  } from '@mui/material/styles';
import { Typography, Link, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Fab, Autocomplete, TextField, CardHeader, Tabs, Tab, Tooltip, ListItem} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { green } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import LocalPizzaSharpIcon from '@mui/icons-material/LocalPizzaSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import Dialog from '@mui/material/Dialog';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CollectionsIcon from '@mui/icons-material/Collections';


const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

const cards = [1,2,3,4,5,6,7,8,9];

const tags = [
    {tag:'Dessert'},
    {tag:'Cake'},
    {tag:'Christmas'},
    {tag:'Food'},
    {tag:'Drink'},
    {tag:'Healthy'},
    {tag:'Slow Cooker'},

]

const recipes = [
    {name:'Pasta Bake'},
    {name:'Pulled pork'},
    {name:'Homemade lemonade'},
    {name:'Gammon in COla'},
    {name:'Treacle sponge'},
    {name:'Chocolate pudding'},
    {name:'Turkey Tagine'},

]

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

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

const App = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    let author ='Uploader: DM1st';
    
    const [countUp, setCountUp] = useState(5)
    const [countDown, setCountDown] = useState(2)

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

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

    const [dialogOpen, setDialogOpen] = React.useState(false);

    const handleClickOpen = () => {
        setDialogOpen(true);
      };
    
      const handleCloseDialog = () => {
        setDialogOpen(false);
      };


//Functions for the add Recipe dialog

      const SelectAvatar = () => {

        //Define the handle click here

        return (
          <Container sx={{width:'100%', padding:'0px', display:'flex', alignItems:'center', justifyContent: 'space-between'}}>
            <Typography color="textSecondary">Select your avatar</Typography>
                <Fab component="span" sx={{color:blue[700], backgroundColor:'white'}}>
                  <CollectionsIcon />
                </Fab>
          </Container>
        );

      };

      const RecipePhoto =() => {
        //Define the handle click here

        return (
          <Container sx={{width:'100%', padding:'0px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography color="textSecondary">Add recipe photo</Typography>
            <Container sx={{display:'none'}}>
                          <input 
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            /*onChange={this.handleUploadClick}*/
                          />
              </Container>
              <label htmlFor="contained-button-file">
                <Fab component="span" sx={{color:blue[700], backgroundColor:'white'}}>
                  <AddPhotoAlternateIcon />
                </Fab>
              </label>
          </Container>
        );

      };

      const SaveRecipe = () => {

        //Define handle click here

        return(

          <Container sx={{width:'100%', display:'flex', align:'center', paddingTop:'20px', justifyContent:'end', paddingRight:'0', paddingLeft:'0'}}>
                <Button variant="contained" >
                  Save Recipe
                </Button>
          </Container>

        );


      };

      const AddIngredients = () => {

        //Define handle click here

        return(

          <Container sx={{width:'100%', display:'flex', justifyContent:'space-between', align:'center', paddingTop:'5px', paddingBottom:'5px', paddingRight:'0', paddingLeft:'0'}}>
                <Typography color="textSecondary">Add ingredients</Typography>
                <Button variant="outlined" >
                  Ingredients
                </Button>
          </Container>

        );


      };

//Filter by tags function here

const FilterByTags = () => {

  return(
    <Autocomplete
      fullWidth
      size="small"
      multiple
      limitTags={2}
      id="tags-outlined"
      options={tags}
      getOptionLabel={(option) => option.tag}
      filterSelectedOptions
      renderInput={(params) => (
          <TextField
              {...params}
              label="filter by tags"                                   
          />
      )}
    />
  );
  
};

      const AddMethod = () => {

        //Define handle click here

        return(

          <Container sx={{width:'100%', display:'flex', align:'center', paddingTop:'5px', paddingBottom:'5px', justifyContent:'space-between', paddingRight:'0', paddingLeft:'0'}}>
                <Typography color="textSecondary">Add recipe method</Typography>
                <Button variant="outlined" >
                  Method
                </Button>
          </Container>

        );


      };

    return <>
        <CssBaseline />
        <AppBar position="relative">
            <Grid container direction='row' alignItems='center' justifyContent='space-between'>
                <Toolbar>
                    <MenuBookIcon sx={{marginRight:'15px'}} />
                </Toolbar>
                <Typography variant="h6">
                        Eatsy Recipe App
                </Typography>
                <Toolbar sx={{paddingTop:'4px', marginLeft:'0px'}}>
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
                                title = "Eatsy is an online recipe book to allow users to find, create and share their favourite recipes with other cooking and baking enthusiasts!"
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
                onClick={handleClickOpen}
                >
                <AddIcon />
            </Fab>
            <Dialog fullWidth open={dialogOpen} onClose={handleCloseDialog}>                
                <Box fullWidth p={4} display='flex' flexDirection='column' alignItems='start' gap='2'>
                <Typography variant="h5" sx={{marginBottom:'10px'}}>
                  New Recipe
                </Typography>
                <ListItem sx={{paddingRight:'0', paddingLeft:'0'}} divider>
                  <TextField margin="dense" id="Recipe title" label="Add recipe title" type="text" fullWidth />
                </ListItem>
                <ListItem sx={{paddingRight:'0', paddingLeft:'0'}} divider>
                <TextField margin="dense" id="Uploader name" label="Uploader (your name)" type="text" fullWidth />
                </ListItem>
                <ListItem sx={{paddingRight:'0', paddingLeft:'0'}} divider>
                  <SelectAvatar />
                </ListItem>
                <ListItem sx={{paddingRight:'0', paddingLeft:'0'}} divider>
                  <RecipePhoto />
                </ListItem>
                <ListItem sx={{paddingRight:'0', paddingLeft:'0'}} divider>
                  <TextField margin="dense" id="Recipe description" label="Add recipe description" type="text" fullWidth />
                </ListItem>
                <ListItem sx={{paddingRight:'0', paddingLeft:'0'}} divider>
                  <AddIngredients />
                </ListItem>
                <ListItem sx={{paddingRight:'0', paddingLeft:'0'}} divider>
                  <AddMethod />
                </ListItem>
                <ListItem sx={{paddingRight:'0', paddingLeft:'0'}} divider>
                  <FilterByTags />
                </ListItem>
                <SaveRecipe />
                </Box>
            </Dialog>
        </div>
            <Box sx={{bgcolor: 'background.paper'}}>
                <Container sx={{marginTop: '20px'}} maxWidth="sm">
                    <div >
                        <Tabs value={value} onChange={handleChange} aria-label="search tabs" centered="true" >
                            <Tab icon={<LocalOfferSharpIcon />} 
                                label="Filter by tag" 
                                iconPosition='start'
                                style={{minHeight:"30%"}} 
                                {...a11yProps(0)}                          
                                />
                            <Tab icon={<SearchSharpIcon />} 
                                label= "Free text search"
                                iconPosition='start'
                                style={{minHeight:"30%"}}
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
            <Container maxWidth="md" sx={{padding: '20px 0'}}>
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                            <CardHeader
                                avatar={
                                        <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                                        <LocalPizzaSharpIcon/>
                                        </Avatar>
                                    }
                                    title="Recipe Title"
                                    subheader= {author} 
                                    action={
                                        <div>
                                            <IconButton 
                                            id="customized-hamburger-button"
                                            aria-controls={open2 ? 'customized-hamburger-menu' : undefined}
                                            aria-label="settings" 
                                            onClick={handleClick} 
                                            aria-haspopup="true"
                                            aria-expanded={open2 ? 'true' : undefined}
                                            variant="contained" 
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                                <StyledMenu
                                                    id="customized-hamburger-menu"
                                                    MenuListProps={{
                                                    'aria-labelledby': 'customized-hamburger-button',
                                                    }}
                                                    anchorEl={anchorEl}
                                                    open={open2}
                                                    onClose={handleClose}
                                                >
                                                    <MenuItem onClick={handleClose} disableRipple>
                                                        <EditIcon />
                                                        Edit
                                                    </MenuItem>
                                                    <Divider sx={{ my: 0.5 }} />
                                                    <MenuItem onClick={handleClose} disableRipple disabled='true'>
                                                        <DeleteSharpIcon />
                                                        Delete
                                                    </MenuItem>
                                                </StyledMenu>  
                                        </div>
                                      }                                   
                            />
                            <CardMedia sx={{paddingTop: '56.25%' }} //16:9
                            image="https://source.unsplash.com/ykThMylLsbY"
                            title="Image title"
                            />
                            <CardContent sx= {{flexGrow: 1}}>
                                <Typography>
                                    This is a recipe card. You can use this section to big up the recipe and tempt people to click it. 
                                </Typography>
                            </CardContent>   
                            <CardActions disableSpacing>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton> 
                                <Button onClick={() => setCountUp(countUp + 1)}>
                                    <ThumbUpIcon />
                                    {`${countUp === 0 ? ' ' : countUp}`} 
                                </Button>
                                <Button onClick={() => setCountDown(countDown +1)}>
                                    <ThumbDownIcon />
                                    {`${countDown === 0 ? ' ' : countDown}`}
                                </Button>  
                                <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        >
                                    <ExpandMoreIcon />
                                </ExpandMore>           
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                            </CardContent>
                        </Collapse>                         
                        </Card>
                    </Grid>
                    ))} 
                </Grid>
            </Container>
        </main>
        <footer sx={{bgcolor: 'background.paper'}}>
            <Grid sx={{marginBottom:'10px'}} container justifyContent="center" >
                <SvgIcon>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </SvgIcon>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    <Link variant='body2' href="https://github.com/DM1st">
                        Created by DM1st
                    </Link>
                </Typography>
            </Grid>
        </footer>
    </>;
}

export default App;