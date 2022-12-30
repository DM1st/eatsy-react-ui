import {React, useState } from 'react';

import { Typography, AppBar, Grid, Toolbar, Tooltip } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import MenuBookIcon from '@mui/icons-material/MenuBook';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function EatsyAppBar() {

    const [open, setOpen] = useState(false);

    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };

    <AppBar position="relative">
        <Grid container direction='row' alignItems='center' justifyContent='space-between'>
          <Toolbar>
            <MenuBookIcon sx={{ marginRight: '15px' }} />
          </Toolbar>
          <Typography variant="h6">
            Eatsy Recipe App
          </Typography>
          <Toolbar sx={{ paddingTop: '4px', marginLeft: '0px' }}>
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
                  title="Eatsy is an online recipe book to allow users to find, create and share their favourite recipes with other cooking and baking enthusiasts!"
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

}

export default EatsyAppBar