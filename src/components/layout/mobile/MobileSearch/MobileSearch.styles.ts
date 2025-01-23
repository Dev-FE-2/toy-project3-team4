import styled from 'styled-components';
import { colors, padding, height, border } from '@/styles';

export const MobileSearchBox = styled.div`
  position: relative;
  width: 100%;
`;
export const MobileSearch = styled.article`
  z-index: 1;
  position: absolute;
  top: ${height.mobile.header};
  right: 0;
  width: 100%;
  padding: 0 ${padding.md};
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  background-color: ${colors.semantic.background.white};
  border-radius: 0 0 ${border.radius.sm} ${border.radius.sm};
  overflow: hidden;
  font-size: 14px;

  @media (width >= 768px) {
    display: none;
  }
`;
