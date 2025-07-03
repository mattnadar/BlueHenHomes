import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ListingCard from './components/ListingCard';

const dummyListings = [
  {
    id: 1,
    title: '2BR Apartment on Main St',
    price: 1100,
    available_from: '2025-08-01',
    location: 'Newark, DE',
    sublet: true,
    url: 'https://example.com/listing1',
  },
  {
    id: 2,
    title: '1BR Studio near UD Campus',
    price: 875,
    available_from: '2025-07-15',
    location: 'Newark, DE',
    sublet: false,
    url: 'https://example.com/listing2',
  },
];

function App() {
  const [filteredListings, setFilteredListings] = useState(dummyListings);

  const handleSearch = (filters) => {
    const { minPrice, maxPrice, moveInDate, subletOnly } = filters;
    const filtered = dummyListings.filter((listing) => {
      if (minPrice && listing.price < Number(minPrice)) return false;
      if (maxPrice && listing.price > Number(maxPrice)) return false;
      if (moveInDate && listing.available_from < moveInDate) return false;
      if (subletOnly && !listing.sublet) return false;
      return true;
    });
    setFilteredListings(filtered);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>BlueHenHomes</h1>
        <p>Find off-campus housing in Newark, DE</p>
      </header>

      <main className="app-main">
        <SearchBar onSearch={handleSearch} />
        <div className="listing-grid">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
