import {React, useState} from 'react';

import { Typography, Box, Container, Fab, ListItem, Dialog, IconButton, Stack, Avatar} from '@mui/material';
import { green, teal, blue, red, lime, indigo, amber, cyan, deepPurple, deepOrange, yellow } from '@mui/material/colors';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CollectionsIcon from '@mui/icons-material/Collections';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import IcecreamIcon from '@mui/icons-material/Icecream';
import CakeIcon from '@mui/icons-material/Cake';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import BakeryDiningIcon from '@mui/icons-material/BakeryDiningSharp';


function  SelectAvatar() {

        const [open, setOpen] = useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

        return (
                <Container sx={{ width: '100%', padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography color="textSecondary">Select your avatar</Typography>
                    <Fab onClick={handleOpen} component="span" sx={{ color: blue[700], backgroundColor: 'white' }}>
                        <CollectionsIcon />
                    </Fab>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-dialog-title"
                        aria-describedby="child-dialog-description"
                    >
                        <Box sx={{ padding: '5px' }}>
                            <Typography id="child-dialog-description" variant="h7" sx={{ padding: '20px' }}>
                                Pick a pre-set Avatar:
                            </Typography>
                            <ListItem divider>
                                <Stack direction="row" spacing={2} padding={2} >
                                    <IconButton><Avatar sx={{ bgcolor: green[500] }} aria-label="pizza avatar"> <LocalPizzaIcon /> </Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: red[500] }} aria-label="ice cream avatar"> <IcecreamIcon /> </Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: indigo[500] }} aria-label="soup kitchen avatar"> <SoupKitchenIcon /> </Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: teal[500] }} aria-label="Local Bar avatar"> <LocalBarIcon /> </Avatar></IconButton>
                                </Stack>
                            </ListItem>
                            <ListItem divider>
                                <Stack direction="row" spacing={2} padding={2} >
                                    <IconButton><Avatar sx={{ bgcolor: amber[500] }} aria-label="Ramen Dinning avatar"> <RamenDiningIcon /></Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: lime[500] }} aria-label="Ramen Dinning avatar"> <FastfoodIcon /></Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: blue[500] }} aria-label="Ramen Dinning avatar"> <CakeIcon /></Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: yellow[500] }} aria-label="Ramen Dinning avatar"> <BakeryDiningIcon /></Avatar></IconButton>
                                </Stack>
                            </ListItem>
                            <ListItem divider>
                                <Stack direction="row" spacing={2} padding={2}>
                                    <IconButton><Avatar sx={{ bgcolor: green[500] }}>DM</Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: deepOrange[500] }}>LM</Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: deepPurple[500] }}>TH</Avatar></IconButton>
                                    <IconButton><Avatar sx={{ bgcolor: cyan[500] }}>TP</Avatar></IconButton>
                                </Stack>
                            </ListItem>
                            <Stack direction="row" spacing={2} padding={2}>
                                <Container sx={{ padding: '0px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Typography color="textSecondary">Or, upload your custom Avatar:</Typography>
                                    <Container sx={{ display: 'none' }}>
                                        <input
                                            accept="image/*"
                                            id="contained-button-avatar"
                                            multiple
                                            type="file"
                                        /*onChange={this.handleUploadClick}*/
                                        />
                                    </Container>
                                    <label htmlFor="contained-button-avatar">
                                        <Fab component="span" size='small' sx={{ color: blue[700], backgroundColor: 'white' }}>
                                            <AddPhotoAlternateIcon />
                                        </Fab>
                                    </label>
                                </Container>
                            </Stack>
                        </Box>
                    </Dialog>
                </Container>
        );

    };

    export default SelectAvatar;