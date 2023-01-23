import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Typography, AppBar, Grid, Toolbar, Tooltip } from "@mui/material";
import { React, useContext } from "react";
import { Constants } from "../assets/Constants";
import { AppBarTooltipContext } from "../contexts/AppBarTooltipContext";

/**
 * App Header Bar used throughout the UI
 * Contains an application icon, title and information tooltip
 */
export default function EatsyAppBar() {
  //Access the Tooltip state from the Tooltip context(gloabl level) API
  const { tooltipOpen, changeTooltipOpenStatus } = useContext(AppBarTooltipContext);

  return (
    <AppBar position="relative">
      <Grid container direction="row" alignItems="center" justifyContent="space-between">
        <Toolbar>
          <MenuBookIcon sx={{ marginRight: "15px" }} />
        </Toolbar>
        <Typography variant="h6">Eatsy Recipes</Typography>
        <Toolbar sx={{ paddingTop: "4px", marginLeft: "0px" }}>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClick={changeTooltipOpenStatus}
            open={tooltipOpen}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={Constants.TOOLTIP.DESCRIPTION}
          >
            <InfoOutlinedIcon />
          </Tooltip>
        </Toolbar>
      </Grid>
    </AppBar>
  );
}
