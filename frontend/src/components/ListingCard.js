import React from 'react';
import './ListingCard.css';

function ListingCard({ listing }) {
  return (
    <div className="listing-card">
      <h3>{listing.title}</h3>
      <p><strong>Price:</strong> ${listing.price}</p>
      <p><strong>Available from:</strong> {listing.available_from}</p>
      <p><strong>Location:</strong> {listing.location}</p>
      <p><strong>Landlord/Company:</strong> {listing.owner}</p>
      {listing.sublet && <p className="sublet-label">Sublet</p>}
      <a href={listing.url} target="_blank" rel="noopener noreferrer">
        View Listing
      </a>
    </div>
  );
}

export default ListingCard;
