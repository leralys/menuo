import styled from 'styled-components';
import { StyledUL } from '../../../../../styles/sharedStyles';

export const ScheduleUl = styled(StyledUL)`
  padding: 0 0.5rem 0.5rem 0.5rem;

  @media only screen and (min-width: 500px) {
    padding: 1rem;
    align-items: center;
    text-align: left;
  }
`;
