import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { NAV_ICON_SIZE } from '@/constant';
import { NavMenu, ConfigMenuDropdown } from '@/components';
import { height, padding } from '@/styles';

const MobileMoreWrap = () => {
  const dropdownRef = useRef(null);
  const { isVisible: isVisibleMoreMenu, toggleVisibility: toggleMoreMenu } =
    useVisibilityToggle({
      ref: dropdownRef,
    });

  return (
    <>
      <button
        aria-expanded={isVisibleMoreMenu}
        aria-controls="configMenu"
        onClick={toggleMoreMenu}
      >
        <NavMenu iconName="menu" size={NAV_ICON_SIZE} />
      </button>

      {isVisibleMoreMenu && (
        <ConfigMenuDropdown
          id="configMenu"
          ref={dropdownRef}
          isVisible={isVisibleMoreMenu}
          positionTop={height.mobile.header}
          positionRight={padding.sm}
          potalParentId="#mobileHedaer"
        />
      )}
    </>
  );
};

export default MobileMoreWrap;
