import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './NavItem.styles';

type NavItemProps = {
  children: ReactNode;
  link?: string;
  onClick?: () => void;
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
