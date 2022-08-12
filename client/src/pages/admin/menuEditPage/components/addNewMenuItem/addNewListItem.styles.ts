import styled from 'styled-components';
import { Input } from '@mui/material/';
import COLORS from '../../../../../styles/colors';

export const InputStyled = styled(Input)`
  border-radius: 0.5rem;
  border: 1px solid ${COLORS.moveoLightBlue};
  width: 90%;
`;
