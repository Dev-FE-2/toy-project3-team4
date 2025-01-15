import { forwardRef, RefObject } from 'react';
import { createPortal } from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';
import { SearchInput } from '@/components';
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
        <h2 className="search-title">검색</h2>
        <SearchInput />
      </S.SearchFormHeader>
      <S.SearchHistory>
        <h3 className="search-history-title">최근 검색 항목</h3>
        <ul>
          <li>
            내용{' '}
            <i>
              <RiCloseLine size="1.8rem" />
            </i>
          </li>
          <li>
            내용{' '}
            <i>
              <RiCloseLine size="1.8rem" />
            </i>
          </li>
          <li>
            내용{' '}
            <i>
              <RiCloseLine size="1.8rem" />
            </i>
          </li>
        </ul>
      </S.SearchHistory>
    </S.SearchFormSideDropdown>,
    document.querySelector('#sideNavBar') as Element,
  );
});

export default SearchFormSideDropdown;
