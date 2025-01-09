import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { colors, padding, border } from '@/styles';

export const SideNavBar = styled.aside`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    min-width: 280px;
    border-right: ${border.default};
    color: ${colors.semantic.text.nav};
  }
`;

export const Navigation = styled.nav`
  flex: 1;
  border: ${border.radius.xs};
`;

export const NavItem = styled.div<{ $padding: string }>`
  height: 44px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all ease 0.2s;
  color: ${colors.semantic.primary};
  padding: 0 ${(props) => props.$padding};

  > * {
    display: flex;
    gap: ${padding.sm};
  }

  &.active {
    color: ${colors.semantic.primary};
  }

  &:hover {
    color: ${colors.semantic.text.white};
    background-color: ${colors.semantic.hover.primary};
  }

  &.sub-nav {
    margin-left: ${padding.lg};
  }

  &.has-sub-nav {
    display: flex;
    justify-content: space-between;
  }

  &.has-sub-nav.selected {
    background-color: ${hexToRgba(colors.semantic.primary, 0.05)};
    border-right: 3px solid ${colors.semantic.primary};
  }
`;

export const Themore = styled.div<{ $padding: string }>`
  padding: ${(props) => props.$padding} 0;
`;
