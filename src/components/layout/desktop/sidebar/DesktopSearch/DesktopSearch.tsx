import { forwardRef, RefObject } from 'react';
import { createPortal } from 'react-dom';
import { SearchForm, SearchHistory } from '@/components/search';
import * as S from './DesktopSearch.styles';

interface ISearchFormSideDropdown {
  id: string;
  isVisible: boolean;
  ref: RefObject<HTMLElement>;
  resetVisibility: () => void;
}

const DesktopSearch = forwardRef<
  HTMLDivElement | null,
  ISearchFormSideDropdown
>(({ id, isVisible, resetVisibility }, ref) => {
  const handleClick = (event: React.MouseEvent) => {
    console.log(event);
  };

  return createPortal(
    <S.SearchFormSideDropdown
      ref={ref}
      id={id}
      role="menu"
      aria-hidden={!isVisible}
      $isVisible={isVisible}
    >
      <S.SearchFormHeader>
        <h3 className="search-title">검색</h3>
        <SearchForm onClick={handleClick} resetVisibility={resetVisibility} />
      </S.SearchFormHeader>
      <SearchHistory resetVisibility={resetVisibility} />
    </S.SearchFormSideDropdown>,
    document.querySelector('#sideNavBar') as Element,
  );
});

export default DesktopSearch;
