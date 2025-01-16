import { forwardRef, RefObject } from 'react';
import { createPortal } from 'react-dom';
import { SearchHistoryList } from '@/components';
import * as S from './SearchHistoryDropdown.styles';

interface ISearchHistoryDropdown {
  id: string;
  isVisible: boolean;
  ref: RefObject<HTMLElement>;
}

const SearchHistoryDropdown = forwardRef<
  HTMLDivElement | null,
  ISearchHistoryDropdown
>(({ id, isVisible }, ref) => {
  return createPortal(
    <S.SearchHistoryDropdown
      ref={ref}
      id={id}
      role="menu"
      aria-hidden={!isVisible}
      $isVisible={isVisible}
    >
      <SearchHistoryList />
    </S.SearchHistoryDropdown>,
    document.querySelector('#mobileHedaer') as Element,
  );
});

export default SearchHistoryDropdown;
