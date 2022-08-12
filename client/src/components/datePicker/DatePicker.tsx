import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { DatePickerContainer } from './datePicker.styles';
import { DateInputType } from '../../utilities/types/types';

export interface IDatePickerProps {
  selectedDate: DateInputType;
  toggleDatePicker: () => void;
  handleDateChange: (value: DateInputType) => void;
  isDatePickerOpen: boolean;
  setIsDatePickerOpen: (bool: boolean) => void;
}

const DatePickerComponent = ({
  toggleDatePicker,
  handleDateChange,
  isDatePickerOpen,
  selectedDate,
  setIsDatePickerOpen,
}: IDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        closeOnSelect
        showToolbar={false}
        orientation='portrait'
        inputFormat='dd/MM/yyyy'
        value={selectedDate}
        onChange={handleDateChange}
        open={isDatePickerOpen}
        onOpen={toggleDatePicker}
        onClose={toggleDatePicker}
        InputProps={{
          disableUnderline: true,
        }}
        PaperProps={{
          sx: {
            borderRadius: '0.5rem',
            marginTop: '0.2rem',
          },
        }}
        PopperProps={{
          placement: 'bottom',
          sx: {
            paddingTop: '0.75rem',
            paddingLeft: selectedDate ? '2rem' : ' 0rem',
          },
        }}
        renderInput={(params) => (
          <DatePickerContainer onClick={() => setIsDatePickerOpen(true)}>
            {selectedDate ? '' : 'Date'}
            <TextField
              variant='standard'
              {...params}
              inputProps={{
                ...params.inputProps,
                placeholder: '',
                readOnly: true,
                sx: { cursor: 'pointer' },
              }}
            />
            <CalendarMonthRoundedIcon />
          </DatePickerContainer>
        )}
      />
    </LocalizationProvider>
  );
};
export default DatePickerComponent;
