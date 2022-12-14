import React from 'react';
import { Typography, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';



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
        </main>
    </>;
}

export default App;