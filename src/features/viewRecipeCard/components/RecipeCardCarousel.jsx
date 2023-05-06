import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
//import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { UseRecipeImageModelsState } from "../hooks/UseRecipeImageModelsState";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function RecipeCardCarousel({ recipeKey }) {
  //Get the recipeModels
  const { recipeImageModels } = UseRecipeImageModelsState(recipeKey);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = recipeImageModels.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        {/* <Typography>{recipeImageModels[activeStep].imageName}</Typography>  */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {recipeImageModels.map((currentRecipeImageModel, index) => (
          <div key={currentRecipeImageModel.key}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  objectFit: "contain",
                  height: "100%",
                  display: "block",
                  maxWidth: 400,
                  overflow: "hidden",
                  width: "100%",
                }}
                src={"http://localhost:8080/api/get/image/" + currentRecipeImageModel.key}
                alt={currentRecipeImageModel.imageName}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}

//Check required props are provided and of the correct type.
RecipeCardCarousel.propTypes = {
  recipeKey: PropTypes.string.isRequired,
};
