import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <MenuBookIcon />
                    <Typography variant="h6">
                        Eatsy Recipe App
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default App;