export default function ListingCard({ listing }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{listing.title}</h2>
      <p>Price: ${listing.price}</p>
      <p>Available from: {listing.available_from}</p>
      <p>Location: {listing.location}</p>
      {listing.sublet && <span className="text-sm text-green-600 font-bold">Sublet</span>}
      <a
        href={listing.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 block"
      >
        View Listing
      </a>
    </div>
  );
}
