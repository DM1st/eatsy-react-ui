import React from 'react';
import { Typography, Link, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Fab, Stack, Autocomplete, TextField} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';

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

const App = () => {

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