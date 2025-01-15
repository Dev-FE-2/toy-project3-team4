import { forwardRef, RefObject } from 'react';
import { useAuth } from '@/hooks';
import { useUser } from '@/store';
import { THEMORE_NAV_ITEMS, URL } from '@/constant';
import { NavMenu, SideNavItem } from '@/components/layout';
import * as S from './ConfigMenuDropdown.styles';

interface IConfigMenuDropdown {
  id: string;
  isVisible: boolean;
  ref: RefObject<HTMLElement>;
  positionLeft?: string;
  positionRight?: string;
  positionTop?: string;
  positionBottom?: string;
}

const ConfigMenuDropdown = forwardRef<
  HTMLUListElement | null,
  IConfigMenuDropdown
>(
  (
    { id, isVisible, positionLeft, positionRight, positionTop, positionBottom },
    ref,
  ) => {
    const { logout } = useAuth();
    const user = useUser();

    return (
      <S.MenuDropdown
        ref={ref}
        id={id}
        role="menu"
        aria-hidden={!isVisible}
        $isVisible={isVisible}
        $left={positionLeft}
        $right={positionRight}
        $top={positionTop}
        $bottom={positionBottom}
      >
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
