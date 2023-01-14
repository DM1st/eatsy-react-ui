import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Typography, AppBar, Grid, Toolbar, Tooltip } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { React, useState } from "react";
import { Constants } from "../assets/Constants";

/**
 * App Header Bar used throughout the UI
 * Contains an application icon, title and information tooltip
 */
export default function EatsyAppBar() {
  //State for if the information tooltip is open or closed.
  const [tooltipOpen, setOpen] = useState(false);

  //Function to close the tooltip
  const handleTooltipClose = () => {
    setOpen(false);
  };

  //Function to open the tooltip
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="relative">
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Toolbar>
          <MenuBookIcon sx={{ marginRight: "15px" }} />
        </Toolbar>
        <Typography variant="h6">Eatsy Recipes</Typography>
        <Toolbar sx={{ paddingTop: "4px", marginLeft: "0px" }}>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClick={handleTooltipOpen}
              open={tooltipOpen}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={Constants.TOOLTIP.DESCRIPTION}
            >
              <InfoOutlinedIcon />
            </Tooltip>
          </ClickAwayListener>
        </Toolbar>
      </Grid>
    </AppBar>
  );
}
