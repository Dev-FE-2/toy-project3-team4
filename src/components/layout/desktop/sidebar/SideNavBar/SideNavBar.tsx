import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { DESKTOP_NAV_ITEMS, NAV_ICON_SIZE } from '@/constant';
import { Logo, NavMenu, SideNavItem, MoreMenu } from '@/components';
import * as S from './SideNavBar.styles';

const SideNavBar = () => {
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const { isVisible: isVisibleMoreMenu, toggleVisibility: toggleDropdown } =
    useVisibilityToggle({
      ref: dropdownRef,
    });

  return (
    <S.SideNavBar>
      <S.LogoWrap>
        <Logo width="14rem" />
      </S.LogoWrap>

      <S.Navigation>
        <ul>
          {DESKTOP_NAV_ITEMS.map((navItem, index) => (
            <li key={`${index}-${navItem.text}`}>
              <SideNavItem link={navItem.link}>
                <NavMenu
                  iconName={navItem.iconName}
                  text={navItem.text}
                  size={NAV_ICON_SIZE}
                  link={navItem.link}
                />
              </SideNavItem>
            </li>
          ))}
        </ul>

        <S.ThemoreWrap>
          <MoreMenu isVisible={isVisibleMoreMenu} ref={dropdownRef} />
          <SideNavItem onClick={toggleDropdown}>
            <NavMenu iconName="menu" text="더보기" size={NAV_ICON_SIZE} />
          </SideNavItem>
        </S.ThemoreWrap>
      </S.Navigation>
    </S.SideNavBar>
  );
};

export default SideNavBar;
