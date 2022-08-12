import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import COLORS from './colors';
import { IRTLCheck } from '../utilities/isRTL';

// generate css from a string
export const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

// shared styled components
export const FlexColumnFull = styled.div`
  ${FlexColumn};
  align-items: center;
  width: 100%;
`;
export const FlexColumnCenterFull = styled.div`
  ${FlexColumn};
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const FlexRowFull = styled.div`
  ${FlexRow};
  align-items: center;
  width: 100%;
`;

export const StyledPageContainer = styled.div`
  ${FlexColumn};
  width: 100%;
  min-height: -webkit-fill-available;
  align-items: center;
  padding: 1.5rem 1rem;
`;

export const StyledAdminPageContainer = styled.div`
  ${FlexColumn};
  max-width: 32rem;
  align-items: center;
  padding: 1.5rem 1rem;
  max-height: 55vh;
  overflow-y: auto;
  margin-bottom: 3.5;
  margin: 0 auto;
`;

export const UnderscoredLinkMain = styled(Link)`
  border-bottom: 1px solid ${COLORS.moveoLightBlue};
  margin-block: 0.5rem;
`;

export const StyledMainButton = styled(Button)`
&& {
  background: ${COLORS.moveoDarkBlue};
  width: 7.25rem;
  borderRadius: 0.5rem;
  margin-top: 1rem;
  &:hover{
    background: ${COLORS.moveoDarkBlue};
    filter: brightness(120%);
  }
}}`;

export const BulletPoint = styled.div`
  ${FlexRow};
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  width: 1.25rem;
  &:before {
    content: '◦';
    font-size: 1.5rem;
  }
  color: ${COLORS.moveoDarkBlue};
  margin-inline: 0.5rem;
`;

export const UppercasedTypography = styled(Typography)`
  text-transform: uppercase;
`;

export const StyledUL = styled.ul<{ isRTLText: IRTLCheck }>`
  ${FlexColumn};
  // height: 45vh;
  overflow-y: auto;
  align-self: ${({ isRTLText }) =>
    isRTLText.isRTL ? 'flex-end' : 'flex-start'};
  margin-block: 2rem;
  width: 100%;
  gap: 0.8rem;
`;

export const NavBarContentWrapper = styled(FlexColumnCenterFull)`
  justify-content: space-between;
  gap: 1rem;
`;
