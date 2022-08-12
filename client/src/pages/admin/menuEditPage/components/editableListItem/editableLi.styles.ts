import styled from 'styled-components';
import { FlexRowFull } from '../../../../../styles/sharedStyles';
import { IRTLCheck } from '../../../../../utilities/isRTL';

export const ListContentWrapper = styled(FlexRowFull)<{ isRTLText: IRTLCheck }>`
  flex-direction: ${({ isRTLText }) =>
    isRTLText.isRTL ? 'row-reverse' : 'row'};
  width: 100%;
  justify-content: center;
`;
