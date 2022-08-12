import { useCallback } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TextField from '@mui/material/TextField';
import { TimePickerContainer } from './timePicker.styles';
import { DateInputType } from '../../utilities/types/types';

export interface ITimePickerProps {
  selectedTimeDate: DateInputType;
  toggleTimePicker: () => void;
  handleTimeDateChange: (value: DateInputType) => void;
  isTimePickerOpen: boolean;
  setIsTimePickerOpen: (bool: boolean) => void;
  disabled: boolean;
}

const TimePickerComponent = ({
  handleTimeDateChange,
  isTimePickerOpen,
  toggleTimePicker,
  selectedTimeDate,
  setIsTimePickerOpen,
  disabled,
}: ITimePickerProps) => {
  const handleOpenTimePicker = useCallback(() => {
    if (!disabled) {
      setIsTimePickerOpen(true);
    }
  }, [setIsTimePickerOpen, disabled]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileTimePicker
        ampm={false}
        ampmInClock={true}
        value={selectedTimeDate}
        open={isTimePickerOpen}
        disabled={disabled}
        onOpen={toggleTimePicker}
        onClose={toggleTimePicker}
        onChange={(newValue) => {
          handleTimeDateChange(newValue);
        }}
        InputProps={{
          disableUnderline: true,
        }}
        renderInput={(params) => (
          <TimePickerContainer onClick={handleOpenTimePicker}>
            {selectedTimeDate ? '' : 'Time'}
            <TextField
              variant='standard'
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: '',
                readOnly: true,
                sx: {
                  cursor: 'pointer',
                  display: !selectedTimeDate && 'none',
                  padding: 0,
                },
              }}
            />
            <AccessTimeIcon />
          </TimePickerContainer>
        )}
      />
    </LocalizationProvider>
  );
};

export default TimePickerComponent;
