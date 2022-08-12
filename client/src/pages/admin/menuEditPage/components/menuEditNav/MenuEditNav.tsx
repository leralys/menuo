import Typography from '@mui/material/Typography';
import { DayOrWeekEnum } from '../../../../../utilities/types/enums';
import Nav, { IAdminNavWithDate } from '../../../../../components/nav/Nav';
import DatePicker from '../../../../../components/datePicker/DatePicker';

import {
  UppercasedTypography,
  NavBarContentWrapper,
} from '../../../../../styles/sharedStyles';

const MenuEditNav = ({
  toggleDatePicker,
  handleDateChange,
  isDatePickerOpen,
  selectedDate,
  setIsDatePickerOpen,
  location,
}: IAdminNavWithDate) => {
  return (
    <Nav location={location}>
      <NavBarContentWrapper>
        <UppercasedTypography variant='h5' sx={{ fontWeight: 600 }}>
          {location}
        </UppercasedTypography>
        <Typography sx={{ textAlign: 'center', fontSize: '18px' }}>
          Pick a {DayOrWeekEnum.DAY} to add/edit
        </Typography>
        <DatePicker
          toggleDatePicker={toggleDatePicker}
          handleDateChange={handleDateChange}
          isDatePickerOpen={isDatePickerOpen}
          selectedDate={selectedDate}
          setIsDatePickerOpen={setIsDatePickerOpen}
        />
      </NavBarContentWrapper>
    </Nav>
  );
};

export default MenuEditNav;
