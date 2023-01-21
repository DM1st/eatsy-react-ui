import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

import { React } from "react";

/**
 * The StyledExpandMoreIcon is a custom component that recieves a prop called 'expand'
 * which is used for rotating the ExpandMore icon 180 degress when the expand prop is true and 0 degrees when it is false.
 * It uses the theme object to create a transition with the key "transform" that has duration set to shortest.
 * marginLeft is also set to "auto" to align the icon to the right.
 *
 * The component also receives multiple props that are destructured using the spread operator, in this case called other (...other)
 * These other props are passed down to the IconButton component and the ExpandMore component. Expand is destructured from
 * the other props to prevent the "Received 'false' for a non-boolean attribute `expand` warning" in the console.
 * This then results in an eslint error which has been explicitly disabled for the specific line as in this case it is incorrect
 * and it is more important to address the above mentioned legitimite console warning by preventing props meant to be consumed by
 * styled components from being passed to the underlying React node or rendered to the DOM element.
 *
 * This custom component is created by using the `styled` API provided by the `@mui/material/styles` package.
 * The `styled` function takes two arguments: the first is a functional component that receives the `props`
 * and the second is a function that receives the `theme` object and the `expand` prop.
 * This function returns an object that defines the styles for the new component.
 * The `styled` function returns a new component that renders the functional component passed as the first argument,
 * but with the styles defined in the second argument.
 * This allows for the creation of reusable, modular and consistent UI custom themed/animated components.
 */
export const StyledExpandMoreIcon = styled((props) => {
  /* eslint-disable-next-line no-unused-vars */
  const { expand, ...other } = props;
  return (
    <IconButton {...other}>
      <ExpandMoreIcon />
    </IconButton>
  );
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
