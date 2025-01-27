import React from "react";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    description: "Experience the city of love",
    price: 899,
    image: "/api/placeholder/400/300",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    description: "Paradise island getaway",
    price: 799,
    image: "/api/placeholder/400/300",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    description: "Modern meets traditional",
    price: 999,
    image: "/api/placeholder/400/300",
  },
];

const FeaturedDestinations = () => {
  return (
    <section className="destinations">
      <h2 className="section-title">Popular Destinations</h2>
      <div className="destination-grid">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <div className="card-content">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              <p className="price">From ${destination.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
