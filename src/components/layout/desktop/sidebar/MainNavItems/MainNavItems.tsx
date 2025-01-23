import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { DESKTOP_NAV_ITEMS, NAV_ICON_SIZE, URL, PATH_PARAMS } from '@/constant';
import { DesktopSearch, NavMenu, SideNavItem } from '@/components';
import { useUserSn } from '@/store';

const MainNavItems = () => {
  const userSn = useUserSn();
  const dropdownRef = useRef(null);
  const {
    isVisible: isVisibleSearchForm,
    toggleVisibility: toggleSearchForm,
    resetVisibility,
  } = useVisibilityToggle({
    ref: dropdownRef,
  });

  return (
    <nav aria-label="Main Menu">
      <ul>
        {DESKTOP_NAV_ITEMS.map((navItem, index) => (
          <li key={`${index}-${navItem.text}`}>
            <SideNavItem
              {...(navItem.link === URL.SEARCH.link
                ? {
                    onClick: toggleSearchForm,
                    'aria-expanded': isVisibleSearchForm,
                    'aria-controls': 'searchForm',
                  }
                : {
                    link:
                      navItem.link === URL.PROFILE.link
                        ? userSn
                          ? URL.PROFILE.link.replace(
                              PATH_PARAMS.USER_SN,
                              userSn,
                            )
                          : URL.SIGNIN.link
                        : navItem.link,
                  })}
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

      {isVisibleSearchForm && (
        <DesktopSearch
          id="searchForm"
          ref={dropdownRef}
          isVisible={isVisibleSearchForm}
          resetVisibility={resetVisibility}
        />
      )}
    </nav>
  );
};

export default MainNavItems;
