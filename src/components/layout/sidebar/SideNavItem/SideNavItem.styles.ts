import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { colors, padding, border, height } from '@/styles';

const paddingXHalf = `${padding.values.lg / 2 / 10}rem`;

export const NavItem = styled.div`
  height: ${height.desktop.navItem};
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  color: ${colors.semantic.primary};
  padding: 0 ${paddingXHalf};
  border-radius: ${border.radius.sm};

  &.active {
    font-weight: 700;
  }

  &:hover {
    background-color: ${hexToRgba(colors.semantic.primary, 0.05)};
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
    border-right: 0.3rem solid ${colors.semantic.primary};
  }
`;
