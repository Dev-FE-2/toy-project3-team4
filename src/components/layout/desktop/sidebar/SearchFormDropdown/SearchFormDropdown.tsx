import { forwardRef, RefObject, useState, ChangeEvent } from 'react';
import { createPortal } from 'react-dom';
import { RiCloseLine } from 'react-icons/ri';
import { Input } from '@/components';
import * as S from './SearchFormDropdown.styles';

interface ISearchFormDropdown {
  id: string;
  isVisible: boolean;
  ref: RefObject<HTMLElement>;
}

const SearchFormDropdown = forwardRef<
  HTMLDivElement | null,
  ISearchFormDropdown
>(({ id, isVisible }, ref) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return createPortal(
    <S.SearchFormDropdown
      ref={ref}
      id={id}
      role="menu"
      aria-hidden={!isVisible}
      $isVisible={isVisible}
    >
      <S.SearchFormHeader>
        <h2 className="search-title">검색</h2>
        <Input
          type="search"
          value={searchInput}
          placeholder="검색"
          onChange={handleChange}
          isBorder={false}
          bgColor="#ebeef1"
        />
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
    </S.SearchFormDropdown>,
    document.querySelector('#sideNavBar') as Element,
  );
});

export default SearchFormDropdown;
