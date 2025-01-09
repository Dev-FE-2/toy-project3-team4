import styled from 'styled-components';
import { padding, height, border } from '../../../styles';

export const MobileNavBar = styled.aside`
  border-top: ${border.default};
`;

export const Navigation = styled.nav`
  ul {
    width: 100%;
    height: ${height.mobile.nav};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${padding.md};

    @media (min-width: 768px) {
      display: none;
    }

    li {
      height: 100%;

      > a {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const NavItem = styled.li``;
