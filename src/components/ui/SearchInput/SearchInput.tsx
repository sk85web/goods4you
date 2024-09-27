import React, { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

import styles from './SearchInput.module.css';

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    debounce(() => {
      onSearch(inputValue);
    }, 500);
  }, [inputValue, onSearch]);

  useEffect(() => {
    const searchProcess = setTimeout(() => {
      onSearch(inputValue);
    }, 500);
    return () => {
      clearTimeout(searchProcess);
    };
  }, [inputValue, onSearch]);

  return (
    <input
      className={styles.search}
      placeholder="Search by title"
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
