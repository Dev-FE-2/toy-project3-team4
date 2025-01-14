import { forwardRef } from 'react';
import { useAuth } from '@/hooks';
import { useUser } from '@/store';
import { THEMORE_NAV_ITEMS, URL } from '@/constant';
import { NavMenu, SideNavItem } from '@/components/layout';
import * as S from './ConfigMenuDropdown.styles';

type MoreMenuProps = {
  isVisible: boolean;
};

const ConfigMenuDropdown = forwardRef<HTMLUListElement, MoreMenuProps>(
  ({ isVisible }, ref) => {
    const { logout } = useAuth();
    const user = useUser();

    return (
      <S.MenuDropdown ref={ref} $isVisible={isVisible}>
        {THEMORE_NAV_ITEMS.map((navItem, index) => (
          <li key={`${index}-${navItem.text}`}>
            <SideNavItem link={navItem.link}>
              <NavMenu
                iconName={navItem.iconName}
                text={navItem.text}
                size="1.8rem"
                link={navItem.link}
              />
            </SideNavItem>
          </li>
        ))}

        <hr />

        {user ? (
          <SideNavItem onClick={logout}>로그아웃</SideNavItem>
        ) : (
          <SideNavItem link={URL.SIGNIN.link}>로그인</SideNavItem>
        )}
      </S.MenuDropdown>
    );
  },
);

export default ConfigMenuDropdown;
