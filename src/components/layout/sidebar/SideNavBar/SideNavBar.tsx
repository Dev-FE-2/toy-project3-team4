import { useState } from 'react';
import { DESKTOP_NAV_ITEMS, NAV_ICON_SIZE } from '@/constant';
import { Logo, NavMenu, NavItem, MoreMenu } from '@/components';
import * as S from './SideNavBar.styles';

const SideNavBar = () => {
  const [isVisibleMoreMenu, setIsVisibleMoreMenu] = useState(false);

  return (
    <S.SideNavBar>
      <S.LogoWrap>
        <Logo width="14rem" />
      </S.LogoWrap>

      <S.Navigation>
        <ul>
          {DESKTOP_NAV_ITEMS.map((navItem, index) => (
            <li key={`${index}-${navItem.text}`}>
              <NavItem link={navItem.link}>
                <NavMenu
                  iconName={navItem.iconName}
                  text={navItem.text}
                  size={NAV_ICON_SIZE}
                  link={navItem.link}
                />
              </NavItem>
            </li>
          ))}
        </ul>

        <S.ThemoreWrap>
          <MoreMenu isVisible={isVisibleMoreMenu} />
          <NavItem onClick={() => setIsVisibleMoreMenu(!isVisibleMoreMenu)}>
            <NavMenu iconName="menu" text="더보기" size={NAV_ICON_SIZE} />
          </NavItem>
        </S.ThemoreWrap>
      </S.Navigation>
    </S.SideNavBar>
  );
};

export default SideNavBar;
