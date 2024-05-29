import React from 'react';

const SearchBox = ({ searchBook, setSearchBook }) => {
  const handleSearch = (e) => {
    setSearchBook(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a book..."
      value={searchBook}
      onChange={handleSearch}
      style={{ marginBottom: '20px', padding: '10px', width: '300px' }}
    />
  );
};

export default SearchBox;
