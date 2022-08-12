import styled from 'styled-components';
import { FlexRow, StyledMainButton } from '../../../../../styles/sharedStyles';
import { Typography } from '@mui/material';

export const StyledAddSchedule = styled.div`
  ${FlexRow};
  align-items: center;
  width: 100%;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    padding-left: 0rem;
  }
`;

export const StyledExplanation = styled(Typography)`
  text-align: center;
  width: 100%;
  font-size: 18px !important;
  font-weight: 600 !important;
`;

export const AddButton = styled(StyledMainButton)`
  margin-bottom: 1rem !important;
  height: 2.8rem;
  width: 5rem !important;
`;
