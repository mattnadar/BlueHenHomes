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
      <p><strong>Size:</strong> {listing.size}</p>
        <p><strong>Description:</strong> {listing.description}</p>
        <div className="listing-images">
        {listing.images && listing.images.length > 0 ? (
            listing.images.map((image, index) => (
            <img key={index} src={image} alt={`Listing image ${index + 1}`} />
            ))
        ) : (
            <p>No images available</p>
        )}
        </div>
        <p><strong>Pets Allowed:</strong> {listing.pets_allowed ? 'Yes' : 'No'}</p>
        <p><strong>Utilities Included:</strong> {listing.utilities_included ? 'Yes' : 'No'}</p>
        <p><strong>Parking Available:</strong> {listing.parking_available ? 'Yes' : 'No'}</p>

      {listing.sublet && <p className="sublet-label">Sublet</p>}
      <a href={listing.url} target="_blank" rel="noopener noreferrer">
        View Listing
      </a>
    </div>
  );
}

export default ListingCard;
