import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledMainButton } from '../../../../../styles/sharedStyles';
import COLORS from '../../../../../styles/colors';

export const stepsNum = 3;

const steps = [
  {
    label: 'Nice! You selected the lunch start time',
    description: `this is the time when the lunch starts - it will be the same every week.`,
  },
  {
    label: 'Add teams and their lunch duration',
    description: `Add teams in the CORRECT ORDER, and their lunch duration in minutes.
      The schedule will be created for you.
      Every week teams will get the same lunch duration,
      and next team will start their lunch after previous team finishes. `,
  },
  {
    label: 'Save schedule',
    description: `Save schedule - the rotation will be done automatically every Saturday.
      Remember, if you change the schedule during the week, new schedule will always be based on this week's schedule.
      We are working on a feature when you will be able to create temporary schedule if needed.`,
  },
];

export interface IVerticalStepperProps {
  isVisible: boolean;
  setIsVisible: (bool: boolean) => void;
  setIsCanCreate: (bool: boolean) => void;
  activeStep: number;
  setActiveStep: any;
}

const VerticalStepper = ({
  setIsVisible,
  setIsCanCreate,
  activeStep,
  setActiveStep,
}: IVerticalStepperProps) => {
  const handleFinish = () => {
    setIsVisible(false);
    setIsCanCreate(true);
    setActiveStep(steps.length);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep: number) => activeStep + 1);
    if (activeStep === steps.length - 1) {
      handleFinish();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep: number) => activeStep - 1);
  };

  return (
    <Box sx={{ maxWidth: '350px' }}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant='body2'>Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography sx={{ fontSize: '18px' }}>
                {step.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {index !== steps.length - 1 && (
                    <StyledMainButton
                      variant='contained'
                      onClick={handleNext}
                      sx={{ mr: 1 }}
                    >
                      Continue
                    </StyledMainButton>
                  )}
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 2.5, color: `${COLORS.moveoLightBlue}` }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <StyledMainButton
        variant='contained'
        onClick={handleFinish}
        disabled={activeStep !== 2}
        style={{ marginLeft: '13.5rem' }}
      >
        Finish
      </StyledMainButton>
    </Box>
  );
};
export default VerticalStepper;
