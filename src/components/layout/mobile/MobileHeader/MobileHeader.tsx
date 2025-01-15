import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { Logo, SearchInput, SearchHistoryDropdown } from '@/components';
import * as S from './MobileHeader.styles';

const MobileHeader = () => {
  const dropdownRef = useRef(null);
  const {
    isVisible: isVisibleSearchHistory,
    showVisibility: showSearchHistory,
  } = useVisibilityToggle({
    ref: dropdownRef,
  });

  return (
    <S.MobileHeader id="mobileHedaer">
      <Logo width="12rem" />
      <SearchInput onClick={showSearchHistory} />

      {isVisibleSearchHistory && (
        <SearchHistoryDropdown
          ref={dropdownRef}
          id="searchHistory"
          isVisible={isVisibleSearchHistory}
        />
      )}
    </S.MobileHeader>
  );
};

export default MobileHeader;
