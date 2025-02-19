import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantList from "./RestaurantsLists";

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch the list of restaurants from Firebase
  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        "https://nosh-map-default-rtdb.europe-west1.firebasedatabase.app/restaurant.json"
      );
      const restaurantList = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      setRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  // Call fetchRestaurants when component mounts to get initial list
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="homepage">
      <h1>Welcome to the Nosh Map!</h1>

      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default HomePage;
