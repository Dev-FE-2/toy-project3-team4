import styled from 'styled-components';
import { padding, border } from '@/styles';

export const MobileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${padding.md};
  padding: 0 ${padding.md};
  border-bottom: ${border.default};
  height: 48px;

  @media (min-width: 768px) {
    display: none;
  }
`;
