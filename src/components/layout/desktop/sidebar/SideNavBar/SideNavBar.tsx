import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { DESKTOP_NAV_ITEMS, NAV_ICON_SIZE, URL } from '@/constant';
import { Logo, NavMenu, SideNavItem, ConfigMenuDropdown } from '@/components';
import * as S from './SideNavBar.styles';

const SideNavBar = () => {
  const dropdownRef = useRef(null);
  const { isVisible: isVisibleMoreMenu, toggleVisibility: toggleMoreMenu } =
    useVisibilityToggle({
      ref: dropdownRef,
    });

  return (
    <S.SideNavBar>
      <S.LogoWrap>
        <Logo width="14rem" />
      </S.LogoWrap>

      <S.Navigation>
        <nav>
          <ul>
            {DESKTOP_NAV_ITEMS.map((navItem, index) => (
              <li key={`${index}-${navItem.text}`}>
                <SideNavItem
                  {...(navItem.link === URL.SEARCH.link
                    ? { onClick: toggleMoreMenu }
                    : { link: navItem.link })}
                >
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
        </nav>

        <nav>follows 네비 영역</nav>

        <nav>
          <S.ThemoreWrap>
            <ConfigMenuDropdown
              id="configMenu"
              ref={dropdownRef}
              isVisible={isVisibleMoreMenu}
            />
            <SideNavItem
              aria-expanded={isVisibleMoreMenu}
              aria-controls="configMenu"
              onClick={toggleMoreMenu}
            >
              <NavMenu iconName="menu" text="더보기" size={NAV_ICON_SIZE} />
            </SideNavItem>
          </S.ThemoreWrap>
        </nav>
      </S.Navigation>
    </S.SideNavBar>
  );
};

export default SideNavBar;
