import { Box, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useStyles } from 'app/modules/QueryBuilder/style';
import {
  ColorlibStepIcon,
  CustomStep,
  CustomStepLabel,
  CustomStepper,
  getStepContent,
  getSteps,
} from 'app/modules/QueryBuilder/utils';

export const QueryBuilderStepper = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set<number>());
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const steps = getSteps();

  function totalSteps() {
    return getSteps().length;
  }

  function isStepOptional(step: number) {
    return step === 1;
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function skippedSteps() {
    return skipped.size;
  }

  function completedSteps() {
    return completed.size;
  }

  function allStepsCompleted() {
    return completedSteps() === totalSteps() - skippedSteps();
  }

  function isLastStep() {
    return activeStep === totalSteps() - 1;
  }

  function handleNext() {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  function isStepComplete(step: number) {
    return completed.has(step);
  }

  return (
    <>
      <Box height="40px" width="100%" />
      <CustomStepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const buttonProps: { optional?: React.ReactNode } = {};

          return (
            <CustomStep key={label}>
              <CustomStepLabel
                StepIconComponent={ColorlibStepIcon}
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </CustomStepLabel>
            </CustomStep>
          );
        })}
      </CustomStepper>
      <Box height="40px" width="100%" />
      <>{getStepContent(activeStep)}</>
      <Box height="40px" width="100%" />

      <Grid container justify="space-between" alignItems="flex-end">
        {activeStep > 0 && (
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
          </Grid>
        )}

        {activeStep !== 3 && (
          <>
            <Box style={{ width: 'calc(100%-130px)' }} />
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleNext}>
                next
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};
