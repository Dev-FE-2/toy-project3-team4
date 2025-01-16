import { useState, ChangeEvent, useRef, FormEvent } from 'react';
import { RiCloseLine } from 'react-icons/ri';
import { createSearchParams, useNavigate } from 'react-router-dom';
import * as S from './SearchForm.styles';

interface ISearchForm {
  onClick: (event: React.MouseEvent) => void;
}

const SearchForm = ({ onClick }: ISearchForm) => {
  const [keyword, setKeyword] = useState('');
  const keywordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setKeyword(target.value);
  };

  const handleClick = () => {
    setKeyword('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({
      pathname: './search',
      search: createSearchParams({ keyword }).toString(),
    });
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
        <S.DeleteButton
          $bgColor="disabled"
          $size="xs"
          type="button"
          onClick={handleClick}
        >
          <RiCloseLine size="1.8rem" />
        </S.DeleteButton>
      </S.Label>
    </S.Form>
  );
};

export default SearchForm;
