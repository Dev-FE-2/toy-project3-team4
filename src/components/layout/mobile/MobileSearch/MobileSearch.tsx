import { useRef } from 'react';
import { useVisibilityToggle } from '@/hooks';
import { createPortal } from 'react-dom';
import { SearchForm, SearchHistory } from '@/components/search';
import * as S from './MobileSearch.styles';
import { useSearchHistory } from '@/store';

const MobileSearch = () => {
  const dropdownRef = useRef(null);
  const { isVisible, showVisibility, resetVisibility } = useVisibilityToggle({
    ref: dropdownRef,
  });
  const history = useSearchHistory();

  return (
    <S.MobileSearchBox>
      <SearchForm onClick={showVisibility} resetVisibility={resetVisibility} />

      {isVisible &&
        history.length > 0 &&
        createPortal(
          <S.MobileSearch
            ref={dropdownRef}
            id={'searchHistory'}
            role="menu"
            aria-hidden={!isVisible}
          >
            <SearchHistory resetVisibility={resetVisibility} />
          </S.MobileSearch>,
          document.querySelector('#mobileHedaer') as Element,
        )}
    </S.MobileSearchBox>
  );
};

export default MobileSearch;
