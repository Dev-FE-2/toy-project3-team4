import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { NAV_ICON_SIZE } from '@/constant';
import { NavMenu, SideNavItem, ConfigMenuDropdown } from '@/components';
import { height, padding } from '@/styles';
import * as S from './MoreNavItems.styles';

const MoreNavItems = () => {
  const dropdownRef = useRef(null);
  const { isVisible: isVisibleMoreMenu, toggleVisibility: toggleMoreMenu } =
    useVisibilityToggle({
      ref: dropdownRef,
    });

  return (
    <S.MoreNavItems aria-label="More Options Menu">
      <SideNavItem
        ariaExpanded={isVisibleMoreMenu}
        ariaControls="configMenu"
        onClick={toggleMoreMenu}
      >
        <NavMenu iconName="menu" text="더보기" size={NAV_ICON_SIZE} />
      </SideNavItem>

      {isVisibleMoreMenu && (
        <ConfigMenuDropdown
          id="configMenu"
          ref={dropdownRef}
          isVisible={isVisibleMoreMenu}
          positionBottom={`calc(${height.desktop.navItem} + ${padding.md})`}
          positionLeft={padding.md}
          potalParentId="#sideNavBar"
        />
      )}
    </S.MoreNavItems>
  );
};

export default MoreNavItems;
