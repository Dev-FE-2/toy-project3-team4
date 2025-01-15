import styled from 'styled-components';
import { padding, border, height } from '@/styles';

export const MobileHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${padding.md};
  padding: 0 ${padding.md};
  border-bottom: ${border.default};
  height: ${height.mobile.header};

  @media (width >= 768px) {
    display: none;
  }
`;
