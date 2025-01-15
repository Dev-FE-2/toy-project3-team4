import { useState, ChangeEvent } from 'react';
import { Input } from '@/components';

const SearchInput = () => {
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
      isBorder={false}
      bgColor="#ebeef1"
    />
  );
};

export default SearchInput;
