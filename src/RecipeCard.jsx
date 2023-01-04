import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalPizzaSharpIcon from "@mui/icons-material/LocalPizzaSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Avatar,
  IconButton,
  MenuItem,
  Divider,
  Collapse,
  Menu,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { styled, alpha } from "@mui/material/styles";
import { React, useState } from "react";

//TODO
const ExpandMore = styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

//TODO - wtf is this
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

function RecipeCard() {
  //Dummy data until integrated into backend - TODO
  let author = "Uploader: DM1st";

  //State for the expansion dropdown on the recipe cards
  const [expanded, setExpanded] = useState(false);
  //Update state of RecipeCard expansion when arrow is clicked
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //State for thumbs up/down on the Recipe card.
  const [countUp, setCountUp] = useState(5);
  const [countDown, setCountDown] = useState(2);

  //Define state for the basic menu.
  //A basic menu opens over the anchor element by default (and ensures all items are visible. )
  const [anchorEl, setAnchorEl] = useState(null);
  //Use boolean to track wheter menu should be open or closed based on the anchor state.
  const open = Boolean(anchorEl);
  //Set the anchor for the basic menu to be over the button that was clicked
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //Choosing an option should immediatley commit the option and close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
            <LocalPizzaSharpIcon />
          </Avatar>
        }
        title="Recipe Title"
        subheader={author}
        action={
          <>
            <IconButton
              id="customized-hamburger-button"
              aria-controls={open ? "customized-hamburger-menu" : undefined}
              aria-label="settings"
              onClick={handleClick}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
            >
              <MoreVertIcon />
            </IconButton>
            <StyledMenu
              id="customized-hamburger-menu"
              MenuListProps={{
                "aria-labelledby": "customized-hamburger-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <EditIcon />
                Edit
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={handleClose} disableRipple disabled>
                <DeleteSharpIcon />
                Delete
              </MenuItem>
            </StyledMenu>
          </>
        }
      />
      <CardMedia
        sx={{ paddingTop: "56.25%" }} //16:9
        image="https://source.unsplash.com/ykThMylLsbY"
        title="Image title"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography>
          This is a recipe card. You can use this section to big up the recipe and tempt people to
          click it.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button onClick={() => setCountUp(countUp + 1)}>
          <ThumbUpIcon />
          {`${countUp === 0 ? " " : countUp}`}
        </Button>
        <Button onClick={() => setCountDown(countDown + 1)}>
          <ThumbDownIcon />
          {`${countDown === 0 ? " " : countDown}`}
        </Button>
        <ExpandMore
          expand={expanded ? 1 : 0}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeCard;
