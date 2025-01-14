import styled from 'styled-components';
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
  padding-bottom: ${paddingXHalf};

  & > ul {
    display: flex;
    flex-direction: column;
    gap: ${padding.sm};
  }
`;

export const ThemoreWrap = styled.div`
  position: relative;
`;
