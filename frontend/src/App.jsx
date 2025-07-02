import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ListingCard from './components/ListingCard';

const dummyListings = [
  {
    id: 1,
    title: 'Cozy 1BR near campus',
    price: 900,
    available_from: '2025-08-01',
    location: 'Newark, DE',
    sublet: false,
    url: 'https://example.com/listing1',
  },
  {
    id: 2,
    title: '2BR Sublet, utilities included',
    price: 1200,
    available_from: '2025-07-15',
    location: 'Newark, DE',
    sublet: true,
    url: 'https://example.com/listing2',
  },
];

export default function App() {
  const [filteredListings, setFilteredListings] = useState(dummyListings);

  const handleSearch = filters => {
    const { minPrice, maxPrice, subletOnly, moveInDate } = filters;
    const filtered = dummyListings.filter(listing => {
      if (minPrice && listing.price < Number(minPrice)) return false;
      if (maxPrice && listing.price > Number(maxPrice)) return false;
      if (subletOnly && !listing.sublet) return false;
      if (moveInDate && listing.available_from < moveInDate) return false;
      return true;
    });
    setFilteredListings(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">BlueHenHomes</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {filteredListings.map(listing => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
