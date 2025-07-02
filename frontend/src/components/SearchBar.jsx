import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [subletOnly, setSubletOnly] = useState(false);
  const [moveInDate, setMoveInDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({ minPrice, maxPrice, subletOnly, moveInDate });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-md">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={e => setMinPrice(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={moveInDate}
        onChange={e => setMoveInDate(e.target.value)}
        className="border p-2 rounded"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={subletOnly}
          onChange={e => setSubletOnly(e.target.checked)}
        />
        Sublets only
      </label>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
