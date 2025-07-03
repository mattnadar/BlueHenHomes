import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [subletOnly, setSubletOnly] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ minPrice, maxPrice, moveInDate, subletOnly });
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <input
        type="date"
        value={moveInDate}
        onChange={(e) => setMoveInDate(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={subletOnly}
          onChange={(e) => setSubletOnly(e.target.checked)}
        />
        Sublets only
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
