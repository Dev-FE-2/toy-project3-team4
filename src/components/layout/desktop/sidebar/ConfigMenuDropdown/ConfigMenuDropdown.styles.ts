import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { colors, height, padding } from '@/styles';

const boxPadding = `calc(${padding.md} / 2);`;

export const MenuDropdown = styled.ul<{ $isVisible: boolean }>`
  position: absolute;
  bottom: ${height.desktop.navItem};
  left: ${boxPadding};
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  min-width: 22.3rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  background-color: ${colors.semantic.background.white};
  border-radius: 16px;
  overflow: hidden;
  padding: ${boxPadding};
  font-size: 14px;

  hr {
    border: none;
    height: 6px;
    width: 150%;
    background-color: ${hexToRgba(colors.semantic.primary, 0.05)};
    margin: 8px -12px;
  }
`;
