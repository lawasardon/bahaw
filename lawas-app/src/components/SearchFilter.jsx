// src/components/SearchFilter.js
import React, { useState, useEffect } from 'react';

const SearchFilter = ({ onFilter }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onFilter(searchQuery);
  }, [searchQuery, onFilter]);

  return (
    <div  className="search-filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;



