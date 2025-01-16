import { useState, ChangeEvent, useRef, FormEvent, MouseEvent } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useSearchHistoryActions } from '@/store';
import * as S from './SearchForm.styles';

interface ISearchForm {
  onClick: (event: React.MouseEvent) => void;
  resetVisibility: () => void;
}

const SearchForm = ({ onClick, resetVisibility }: ISearchForm) => {
  const [keyword, setKeyword] = useState('');
  const keywordRef = useRef<HTMLInputElement>(null);
  const { addSearchHistory } = useSearchHistoryActions();
  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setKeyword(target.value);
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    resetVisibility();
    setKeyword('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetVisibility();
    addSearchHistory(keyword);
    navigate({
      pathname: './search',
      search: createSearchParams({ keyword }).toString(),
    });
    setKeyword('');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Label>
        <S.SearchInput
          type="search"
          placeholder="검색"
          value={keyword}
          ref={keywordRef}
          onChange={handleChange}
          onClick={onClick}
        />
        {keyword && (
          <S.DeleteButton
            $bgColor="disabled"
            $size="xs"
            type="button"
            onClick={handleClick}
          >
            <RiCloseLine size="1.8rem" />
          </S.DeleteButton>
        )}
      </S.Label>
    </S.Form>
  );
};

export default SearchForm;
