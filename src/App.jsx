import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Link, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Fab, Stack, Autocomplete, TextField, CardHeader} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { green } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';


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

    const [countUp, setCountUp] = useState(0)
    const [countDown, setCountDown] = useState(0)

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
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
                <Toolbar sx={{marginRight:'40px'}}  />
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
                    <Typography variant="body1" align="center" color="textSecondary" paragraph>
                        Share your best creations or try something new!
                    </Typography>
                    <div >
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
                                            label="filterSelectedOptions"
                                            placeholder="Dessert"
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
                                        <MenuBookIcon/>
                                        </Avatar>
                                    }
                                    title="Recipe Title"
                                    subheader="December 21, 2022">

                            </CardHeader>
                            <CardMedia sx={{paddingTop: '56.25%' }} //16:9
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent sx= {{flexGrow: 1}}>
                                <Typography>
                                    This is a recipe card. You can use this section to big up the recipe and tempt people to click it. 
                                </Typography>
                            </CardContent>   
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
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
        <footer sx={{bgcolor: 'background.paper', p: 6}}>
            <Typography variant='h6' align = 'center' gutterBottom>
                Created by DM1st.
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                <Link href="https://github.com/DM1st/eatsy-react-ui">
                    The Source Code
                </Link>
            </Typography>
        </footer>
    </>;
}

export default App;