import React, {useState} from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import { Typography, Link, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Fab, Autocomplete, TextField, CardHeader, Tabs, Tab, Tooltip} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import LocalPizzaSharpIcon from '@mui/icons-material/LocalPizzaSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocalOfferSharpIcon from '@mui/icons-material/LocalOfferSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ClickAwayListener from '@mui/material/ClickAwayListener';


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

const App = () => {

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

    return <>
        <CssBaseline />
        <AppBar position="relative">
            <Grid container direction='row' alignItems='center' justifyContent='space-between'>
                <Toolbar>
                    <MenuBookIcon sx={{marginRight:'20px'}} />
                </Toolbar>
                <Typography variant="h6">
                        Eatsy Recipe App
                </Typography>
                <Toolbar sx={{paddingTop:'4px'}}>
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
        <Fab sx={{ 
            position: "fixed", 
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2)
            }} 
            color="secondary" 
            aria-label="add">
            <AddIcon />
        </Fab>
            <Box sx={{bgcolor: 'background.paper'}}>
                <Container sx={{marginTop: '20px'}} maxWidth="sm">
                    <div >
                    <Tabs sx={{padding:'0px', margin:'0px'}}  value={value} onChange={handleChange} aria-label="search tabs" centered="true" >
                        <Tab icon={<LocalOfferSharpIcon />} 
                            label="Filter by tag" 
                            iconPosition='start'
                            style={{minHeight:"30%"}}                            
                            />
                        <Tab icon={<SearchSharpIcon />} 
                            label= "Free text search"
                            iconPosition='start'
                            style={{minHeight:"30%"}}
                            />
                    </Tabs>
                        <Grid sx={{marginTop: '8px'}} justifyContent="center">
                            <Grid item>
                                <Autocomplete
                                    multiple
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
                            </Grid>
                        </Grid>
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
                                    subheader= {author} />
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