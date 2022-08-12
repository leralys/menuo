import styled from 'styled-components';
import COLORS from '../../styles/colors';
import { FlexRow } from '../../styles/sharedStyles';

export const StyledTimeInput = styled.input`
  border-radius: 0.5rem;
  padding: 1rem 0.8rem;
  border: 1px solid ${COLORS.lightGrey};
  width: 9.5rem;
  font-size: 1.2rem;
  font-family: inherit;
`;

export const TimePickerContainer = styled.div`
  ${FlexRow};
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  background: ${COLORS.moveoWhite};
  height: 100%;
  border-radius: 0.5rem;
  color: ${COLORS.moveoDarkBlue};
  min-width: 18rem;
  max-width: 18rem;
  cursor: pointer;
  font-size: 1.2rem;
`;
