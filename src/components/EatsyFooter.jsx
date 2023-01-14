import { Box, Grid, Typography, Link } from "@mui/material";
import { React } from "react";
import { Constants } from "../assets/Constants";
import GithubSvg from "../assets/GithubSvg";

/**
 * Global Footer for the Eatsy App UI.
 */
export default function EatsyFooter() {
  return (
    <Box
      sx={{
        py: 2,
        mt: "auto", //pushes element to the bottom, given the main box flexes vertically
        backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800]),
      }}
    >
      <Grid container justifyContent="center">
        <GithubSvg />
        <Typography variant="subtitle1" align="center" color="textSecondary">
          <Link variant="body2" href={Constants.FOOTER.DMistGithubLink}>
            {Constants.FOOTER.DESCRIPTION}
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
}
