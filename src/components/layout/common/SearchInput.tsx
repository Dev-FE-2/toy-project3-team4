import { Input } from '@/components/core';
import { useState, ChangeEvent } from 'react';

interface ISearchInput {
  onClick?: (event: React.MouseEvent) => void;
}

const SearchInput = ({ onClick }: ISearchInput) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <Input
      type="search"
      value={searchInput}
      placeholder="검색"
      onChange={handleChange}
      onClick={onClick}
      $isBorder={false}
      $bgColor="#ebeef1"
    />
  );
};

export default SearchInput;
