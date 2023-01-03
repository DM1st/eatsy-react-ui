import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Typography, AppBar, Grid, Toolbar, Tooltip } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { React, useState } from "react";



function EatsyAppBar() {

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (

        <AppBar position="relative">
            <Grid container direction='row' alignItems='center' justifyContent='space-between'>
                <Toolbar>
                    <MenuBookIcon sx={{ marginRight: "15px" }} />
                </Toolbar>
                <Typography variant="h6">
          Eatsy Recipe App
                </Typography>
                <Toolbar sx={{ paddingTop: "4px", marginLeft: "0px" }}>
                    <ClickAwayListener onClickAway={handleTooltipClose}>
            
                        <Tooltip
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClick={handleTooltipOpen}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="Eatsy is an online recipe book to allow users to find, create and share their favourite recipes with other cooking and baking enthusiasts!"
                        >
                            <InfoOutlinedIcon />
                        </Tooltip>
            
                    </ClickAwayListener>
                </Toolbar>
            </Grid>
        </AppBar>
    )

}

export default EatsyAppBar