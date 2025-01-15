import styled from 'styled-components';
import { colors, padding, height, border } from '@/styles';

export const SearchHistoryDropdown = styled.article<{ $isVisible: boolean }>`
  z-index: 1;
  position: absolute;
  top: ${height.mobile.header};
  right: ${padding.md};
  width: 30rem;
  padding: 0 ${padding.md};
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  background-color: ${colors.semantic.background.white};
  border-radius: ${border.radius.sm};
  overflow: hidden;
  font-size: 14px;
  display: ${(props) => (props.$isVisible ? 'block' : 'none')};
`;
