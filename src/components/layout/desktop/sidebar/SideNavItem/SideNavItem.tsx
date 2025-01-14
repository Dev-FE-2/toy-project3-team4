import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './SideNavItem.styles';

interface ISideNavItem {
  children: ReactNode;
  link?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const SideNavItem = ({ link, children, onClick }: ISideNavItem) => {
  return link ? (
    <S.SideNavItem as={NavLink} to={link}>
      {children}
    </S.SideNavItem>
  ) : (
    <S.SideNavItem type="button" onClick={onClick}>
      {children}
    </S.SideNavItem>
  );
};

export default SideNavItem;
