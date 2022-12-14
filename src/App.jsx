import React from 'react';
import { Typography, Link, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {

    return <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <MenuBookIcon sx={{marginRight: '20px'}} />
                <Typography variant="h6">
                    Eatsy Recipe App
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <Box sx={{bgcolor: 'background.paper'}}>
                <Container sx={{marginTop: '40px'}} maxWidth="sm">
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Eatsy Recipe App
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Welcome to the Eatsy Recipe App for all your favourite recipes! Share your best creations or try the recommendations from other people!
                    </Typography>
                    <div >
                        <Grid sx={{marginTop: '8px'}} container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Add Recipe
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary action
                                </Button>
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
                            <CardMedia sx={{paddingTop: '56.25%' }} //16:9
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent sx= {{flexGrow: 1}}>
                                <Typography gutterBottom variant='h5'>
                                    Recipe Title
                                </Typography>
                                <Typography>
                                    This is a recipe card. You can use this section to describe the recipe. 
                                </Typography>
                            </CardContent>   
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                            </CardActions>                         
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