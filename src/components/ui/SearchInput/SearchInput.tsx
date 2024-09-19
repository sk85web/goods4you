import React, { useState } from 'react';
import styles from './SearchInput.module.css';

const SearchInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className={styles.search}
      placeholder="Search by title"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
