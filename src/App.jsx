import React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import useStyles from './styles';


const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <MenuBookIcon className={classes.icon} />
                    <Typography variant="h6">
                        Eatsy Recipe App
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Eatsy Recipe App
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Welcome to the Eatsy Recipe App for all your favourite recipes! Share your best creations or try the recommendations from other people!
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
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
                </div>
            </main>
        </>
    );
}

export default App;