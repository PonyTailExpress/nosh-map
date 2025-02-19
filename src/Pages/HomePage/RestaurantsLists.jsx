function RestaurantList({ restaurants }) {
  return (
    <div className="restaurant-list">
      <div className="restaurant-items">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <h5>{restaurant.name}</h5>
            <p>{restaurant.address}</p>
            <a
              href={restaurant.website}
              target="_blank"
              rel="noopener noreferrer"
              className="website-link"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
