import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { createPortal } from 'react-dom';
import { SearchForm, SearchHistory } from '@/components/search';
import * as S from './MobileSearch.styles';

const MobileSearch = () => {
  const dropdownRef = useRef(null);
  const { isVisible, showVisibility } = useVisibilityToggle({
    ref: dropdownRef,
  });

  return (
    <>
      <SearchForm onClick={showVisibility} />

      {isVisible &&
        createPortal(
          <S.MobileSearch
            ref={dropdownRef}
            id={'searchHistory'}
            role="menu"
            aria-hidden={!isVisible}
          >
            <SearchHistory />
          </S.MobileSearch>,
          document.querySelector('#mobileHedaer') as Element,
        )}
    </>
  );
};

export default MobileSearch;
