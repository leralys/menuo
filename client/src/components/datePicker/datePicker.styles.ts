import styled from 'styled-components';
import { FlexRow } from '../../styles/sharedStyles';
import COLORS from '../../styles/colors';

export const DatePickerContainer = styled.div`
  ${FlexRow};
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: ${COLORS.moveoWhite};
  height: 100%;
  border-radius: 0.5rem;
  color: ${COLORS.moveoDarkBlue};
  min-width: 18rem;
  max-width: 18rem;
  cursor: pointer;
  font-size: 1.2rem;
`;
