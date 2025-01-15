import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import * as S from './SideNavItem.styles';

interface ISideNavItem {
  children: ReactNode;
  link?: string;
  onClick?: (event: React.MouseEvent) => void;
  ariaExpanded?: boolean;
  ariaControls?: string;
}

const SideNavItem = ({
  link,
  children,
  onClick,
  ariaExpanded,
  ariaControls,
}: ISideNavItem) => {
  return link ? (
    <S.SideNavItem as={NavLink} to={link}>
      {children}
    </S.SideNavItem>
  ) : (
    <S.SideNavItem
      type="button"
      onClick={onClick}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {children}
    </S.SideNavItem>
  );
};

export default SideNavItem;
