import { useState } from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "../../core-components/Button";
import "./index.scss";

/**
 * General component for Carousel
 */
function Carouse({ banners }: any) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = banners.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className={"main-carousel"}>
      <Box>
        <img
          className={"banner-img"}
          src={banners[activeStep]?.bannerImageUrl}
          alt={banners[activeStep]?.bannerImageAlt}
        />
      </Box>
      <Box className={"slide-change"}>
        <Button
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          text={"Back"}
        />

        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          text={"Next"}
        />
      </Box>
      <MobileStepper
        className={"swiper"}
        steps={banners.length}
        position="static"
        activeStep={activeStep}
        backButton={<span />}
        nextButton={<span />}
      />
    </Box>
  );
}

export default Carouse;
