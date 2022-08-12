import styled from 'styled-components';
import { Link } from 'react-router-dom';
import COLORS from '../../styles/colors';
import { MenuOrScheduleEnum } from '../../utilities/types/enums';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { AppBar } from '@mui/material';
import { FlexRow } from '../../styles/sharedStyles';

export const StyledAppBar = styled(AppBar)<{ location: MenuOrScheduleEnum }>`
  background: ${({ location }) =>
    location === MenuOrScheduleEnum.MENU
      ? COLORS.moveoLightBlue
      : COLORS.moveoRed} !important;
  justify-content: space-between;
  align-items: center;
  height: 240px;
  padding: 1.5rem 1.5rem 2rem;
  color: ${COLORS.moveoWhite};,
`;

export const StyledScheduleIcon = styled(ScheduleIcon)`
  margin-right: 0.8rem;
  color: ${COLORS.moveoWhite};
`;

export const StyledNavLinkLight = styled(Link)`
  ${FlexRow};
  padding-bottom: 0.3rem;
  gap: 0.5rem;
  color: ${COLORS.moveoWhite};
  border-bottom: 1px solid ${COLORS.moveoWhite};
`;
