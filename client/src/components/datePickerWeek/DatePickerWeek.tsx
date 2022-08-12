import { useEffect, useState } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import TextField from '@mui/material/TextField';

import { endOfWeek, isSameDay, isWithinInterval, startOfWeek } from 'date-fns';

import { formatDate } from '../../utilities/dateHelpers';
import { IDatePickerProps } from '../../components/datePicker/DatePicker';
import { DatePickerContainer } from '../datePicker/datePicker.styles';
import { CustomPickersDay } from './datePickerWeek.styles';

export type CustomPickerDayProps = PickersDayProps<Date> & {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
};

const DatePickerWeek = ({
  toggleDatePicker,
  handleDateChange,
  isDatePickerOpen,
  selectedDate,
  setIsDatePickerOpen,
}: IDatePickerProps) => {
  const [weekOf, setWeekOf] = useState<string>('...');

  useEffect(() => {
    if (selectedDate) setWeekOf(formatDate(selectedDate));
  }, [selectedDate]);

  const renderWeekPickerDay = (
    date: Date,
    selectedDates: Array<Date | null>,
    pickersDayProps: PickersDayProps<Date>
  ) => {
    if (!selectedDate) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek(selectedDate);
    const end = endOfWeek(selectedDate);

    const dayIsBetween = isWithinInterval(date, { start, end });
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        disableFuture={true}
        showToolbar={false}
        inputFormat="'Week of' dd/MM"
        value={selectedDate}
        toolbarTitle={`Week of ${weekOf}`}
        onChange={handleDateChange}
        open={isDatePickerOpen}
        onOpen={toggleDatePicker}
        onClose={toggleDatePicker}
        renderDay={renderWeekPickerDay}
        InputProps={{
          disableUnderline: true,
        }}
        renderInput={(params) => (
          <DatePickerContainer onClick={() => setIsDatePickerOpen(true)}>
            {selectedDate ? '' : 'Week'}
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
            <DateRangeRoundedIcon />
          </DatePickerContainer>
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerWeek;
