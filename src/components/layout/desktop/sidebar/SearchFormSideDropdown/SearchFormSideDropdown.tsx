import { forwardRef, RefObject } from 'react';
import { createPortal } from 'react-dom';
import { SearchInput, SearchHistoryList } from '@/components';
import * as S from './SearchFormSideDropdown.styles';

interface ISearchFormSideDropdown {
  id: string;
  isVisible: boolean;
  ref: RefObject<HTMLElement>;
}

const SearchFormSideDropdown = forwardRef<
  HTMLDivElement | null,
  ISearchFormSideDropdown
>(({ id, isVisible }, ref) => {
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
        <SearchInput />
      </S.SearchFormHeader>
      <SearchHistoryList />
    </S.SearchFormSideDropdown>,
    document.querySelector('#sideNavBar') as Element,
  );
});

export default SearchFormSideDropdown;
