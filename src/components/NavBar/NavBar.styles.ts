import styled from 'styled-components';
import { hexToRgba } from '../../utils';
import { colors, padding } from '../../styles';

export const Navigation = styled.nav<{ padding: string }>`
  flex: 1;

  hr {
    border: none;
    border-top: 1px solid ${colors.semantic.border.light};
    margin: 20px 36px 19px;
  }

  & > * {
    padding: 0 ${(props) => props.padding};
  }
`;

export const NavItem = styled.div<{ isToggle?: boolean }>`
  height: 44px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color ease 0.2s;

  &.active {
    color: ${colors.semantic.primary};
  }

  &:hover {
    color: ${colors.semantic.hover.primary};
  }

  &.sub-nav {
    margin-left: ${padding.lg};
  }

  &.has-sub-nav {
    display: flex;
    justify-content: space-between;
  }

  ${(props) =>
    props.isToggle &&
    `
        .material-symbols-outlined {
          transform: rotate(180deg);
        }      
      `}

  &.has-sub-nav.selected {
    background-color: ${hexToRgba(colors.semantic.primary, 0.05)};
    border-right: 3px solid ${colors.semantic.primary};
  }
`;
