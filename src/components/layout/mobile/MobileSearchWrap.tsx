import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { SearchInput, SearchHistoryDropdown } from '@/components';

const MobileSearchWrap = () => {
  const dropdownRef = useRef(null);
  const {
    isVisible: isVisibleSearchHistory,
    showVisibility: showSearchHistory,
  } = useVisibilityToggle({
    ref: dropdownRef,
  });

  return (
    <>
      <SearchInput onClick={showSearchHistory} />

      {isVisibleSearchHistory && (
        <SearchHistoryDropdown
          ref={dropdownRef}
          id="searchHistory"
          isVisible={isVisibleSearchHistory}
        />
      )}
    </>
  );
};

export default MobileSearchWrap;
