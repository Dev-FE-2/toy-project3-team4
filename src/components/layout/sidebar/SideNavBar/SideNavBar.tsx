import { useEffect, useState, useRef } from 'react';
import { DESKTOP_NAV_ITEMS, NAV_ICON_SIZE } from '@/constant';
import { Logo, NavMenu, SideNavItem, MoreMenu } from '@/components';
import * as S from './SideNavBar.styles';

const SideNavBar = () => {
  const [isVisibleMoreMenu, setIsVisibleMoreMenu] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const toggleMoreMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsVisibleMoreMenu(!isVisibleMoreMenu);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        dropdownRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setIsVisibleMoreMenu(false);
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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
          <SideNavItem onClick={toggleMoreMenu}>
            <NavMenu iconName="menu" text="더보기" size={NAV_ICON_SIZE} />
          </SideNavItem>
        </S.ThemoreWrap>
      </S.Navigation>
    </S.SideNavBar>
  );
};

export default SideNavBar;
