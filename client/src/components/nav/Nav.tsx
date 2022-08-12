import { MenuOrScheduleEnum } from '../../utilities/types/enums';
import { FlexRowFull } from '../../styles/sharedStyles';
import { Link } from 'react-router-dom';
import { StyledAppBar, StyledNavLinkLight } from './nav.styles';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { IDatePickerProps } from '../../components/datePicker/DatePicker';

interface INavProps {
  location: MenuOrScheduleEnum;
  children: JSX.Element;
}

export interface IAdminNavWithDate extends IDatePickerProps {
  location: MenuOrScheduleEnum;
}

const Nav = ({ location, children }: INavProps) => {
  const isEditMenuPage = location === MenuOrScheduleEnum.MENU ? true : false;
  return (
    <StyledAppBar location={location} position='static'>
      <FlexRowFull style={{ justifyContent: 'space-between' }}>
        <Link to='/'>
          <HomeRoundedIcon />
        </Link>
        {isEditMenuPage ? (
          <StyledNavLinkLight
            to={`/admin/${MenuOrScheduleEnum.SCHEDULE}`}
            className='text-italic'
          >
            Edit {MenuOrScheduleEnum.SCHEDULE}
            <ScheduleRoundedIcon fontSize='small' />
          </StyledNavLinkLight>
        ) : (
          <StyledNavLinkLight
            to={`/admin/${MenuOrScheduleEnum.MENU}`}
            className='text-italic'
          >
            Edit {MenuOrScheduleEnum.MENU}
            <RestaurantMenuRoundedIcon fontSize='small' />
          </StyledNavLinkLight>
        )}
      </FlexRowFull>
      {children}
    </StyledAppBar>
  );
};

export default Nav;
