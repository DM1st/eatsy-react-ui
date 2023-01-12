import BakeryDiningIcon from "@mui/icons-material/BakeryDiningSharp";
import CakeIcon from "@mui/icons-material/Cake";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { green, teal, blue, red, lime, indigo, amber, cyan, deepPurple, deepOrange, yellow } from "@mui/material/colors";

import { React } from "react";

/**
 * The pre-configured options for a recipe uploader to choose from
 * when selecting an avatar in the SelectAvatarDialog component
 */
export const PresetSelectAvatarOptions = {
  rowOne: {
    avatarOne: {
      color: green[500],
      label: "pizza avatar",
      icon: <LocalPizzaIcon />,
    },
    avatarTwo: {
      color: red[500],
      label: "ice cream avatar",
      icon: <IcecreamIcon />,
    },
    avatarThree: {
      color: indigo[500],
      label: "soup kitchen avatar",
      icon: <SoupKitchenIcon />,
    },
    avatarFour: {
      color: teal[500],
      label: "Local Bar avatar",
      icon: <LocalBarIcon />,
    },
  },
  rowTwo: {
    avatarOne: {
      color: amber[500],
      label: "Ramen Dinning avatar",
      icon: <RamenDiningIcon />,
    },
    avatarTwo: {
      color: lime[500],
      label: "Fast food avatar",
      icon: <FastfoodIcon />,
    },
    avatarThree: {
      color: blue[500],
      label: "Cake avatar",
      icon: <CakeIcon />,
    },
    avatarFour: {
      color: yellow[500],
      label: "Bakery Dinning avatar",
      icon: <BakeryDiningIcon />,
    },
  },
  rowThree: {
    avatarOne: {
      color: green[500],
      label: "DM initials avatar",
      icon: "DM",
    },
    avatarTwo: {
      color: deepOrange[500],
      label: "OM initials avatar",
      icon: "OM",
    },
    avatarThree: {
      color: deepPurple[500],
      label: "LM initials",
      icon: "LM",
    },
    avatarFour: {
      color: cyan[500],
      label: "TH initials",
      icon: "TH",
    },
  },
};
