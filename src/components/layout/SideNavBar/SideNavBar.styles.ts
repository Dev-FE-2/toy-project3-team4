import styled from 'styled-components';
import { hexToRgba } from '@/utils';
import { colors, padding, border, font } from '@/styles';

const paddingY = '4rem';
const paddingXHalf = `${padding.values.lg / 2 / 10}rem`;
const fontSize = `${font.size.values.paragraph}px`; // 모바일 사용 ❌ 16px 고정 값이 필요

export const SideNavBar = styled.aside`
  display: none;

  @media (width >= 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    min-width: 22.3rem;
    border-right: ${border.default};
    color: ${colors.semantic.text.nav};
    padding: 0 ${paddingXHalf};
    font-size: ${fontSize};
    font-weight: 500;
  }
`;

export const LogoWrap = styled.div`
  padding: ${paddingY} ${paddingXHalf};
`;

export const Navigation = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: ${padding.sm};
  }
`;

export const NavItem = styled.div`
  height: 4.8rem;
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
