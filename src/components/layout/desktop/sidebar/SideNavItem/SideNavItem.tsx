import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './SideNavItem.styles';

type NavItemProps = {
  children: ReactNode;
  link?: string;
  onClick?: (event: React.MouseEvent) => void;
};

const NavItem = ({ link, children, onClick }: NavItemProps) => {
  return link ? (
    <S.NavItem as={NavLink} to={link}>
      {children}
    </S.NavItem>
  ) : (
    <S.NavItem onClick={onClick}>{children}</S.NavItem>
  );
};

export default NavItem;
