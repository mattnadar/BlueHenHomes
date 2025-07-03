import React, { useState } from 'react';
import NavBar from '../components/NavBar'; 
import SearchBar from '../components/SearchBar';
import ListingCard from '../components/ListingCard'; 
const dummyListings = [
  {
    id: 1,
    title: '2BR Apartment on Main St',
    price: 1100,
    available_from: '2025-08-01',
    location: 'Newark, DE',
    owner: 'John Doe',
    sublet: true,
    size: '2BR',
    description: 'Spacious 2-bedroom apartment with modern amenities.',
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
    ],
    pets_allowed: true,
    utilities_included: true,
    parking_available: true,
    url: 'https://example.com/listing1',
  },
  {
    id: 2,
    title: '1BR Studio near UD Campus',
    price: 875,
    available_from: '2025-07-15',
    location: 'Newark, DE',
    owner: 'Jane Smith',
    sublet: false,
    size: '1BR',
    description: 'Cozy studio apartment within walking distance to campus.',
    images: [
      'https://example.com/image3.jpg',
      'https://example.com/image4.jpg',
    ],
    pets_allowed: false,
    utilities_included: false,
    parking_available: false,
    url: 'https://example.com/listing2',
  },
];

function HomePage() {
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

export default HomePage;
