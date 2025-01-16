import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { DESKTOP_NAV_ITEMS, NAV_ICON_SIZE, URL } from '@/constant';
import { NavMenu, SideNavItem, SearchFormSideDropdown } from '@/components';

const MainNavItems = () => {
  const dropdownRef = useRef(null);
  const { isVisible: isVisibleSearchForm, toggleVisibility: toggleSearchForm } =
    useVisibilityToggle({
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

      {isVisibleSearchForm && (
        <SearchFormSideDropdown
          id="searchForm"
          ref={dropdownRef}
          isVisible={isVisibleSearchForm}
        />
      )}
    </nav>
  );
};

export default MainNavItems;
