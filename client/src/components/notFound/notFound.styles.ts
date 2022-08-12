import styled from 'styled-components';
import { UnderscoredLinkMain } from '../../styles/sharedStyles';
import COLORS from '../../styles/colors';

export const StyledLink = styled(UnderscoredLinkMain)`
  margin-block: 2rem;
  transition: 0.3s all ease;
  font-weight: 600;
  color: ${COLORS.moveoRed};
  border-bottom: 1px solid ${COLORS.moveoRed};
  &:hover {
    transform: scale(1.1);
    filter: brightness(120%);
  }
`;
