import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { colors, padding } from '@/styles';

export interface IMenuDropdown {
  $isVisible: boolean;
  $left?: string;
  $right?: string;
  $top?: string;
  $bottom?: string;
}

export const MenuDropdown = styled.ul<IMenuDropdown>`
  z-index: 2;
  position: absolute;
  inset: ${(props) => props.$top ?? 'auto'} ${(props) => props.$right ?? 'auto'}
    ${(props) => props.$bottom ?? 'auto'} ${(props) => props.$left ?? 'auto'};
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: space-between;
  min-width: 22.3rem;
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  background-color: ${colors.semantic.background.white};
  border-radius: 16px;
  overflow: hidden;
  padding: ${padding.sm};
  font-size: 14px;

  hr {
    border: none;
    height: 6px;
    width: 150%;
    background-color: ${hexToRgba(colors.semantic.primary, 0.05)};
    margin: 8px -12px;
  }
`;
