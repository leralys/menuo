import styled from 'styled-components';
import { Paper } from '@mui/material';
import { FlexColumn, FlexRow } from '../../../styles/sharedStyles';
import COLORS from '../../../styles/colors';

export const MenuPageContentWrapper = styled.div<{ shouldHaveHight: number }>`
  ${FlexColumn};
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  height: ${({ shouldHaveHight }) => (shouldHaveHight < 1 ? '300px' : '')};
`;
