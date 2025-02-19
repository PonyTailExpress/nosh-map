import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantList from "./RestaurantsLists";
import AddRestaurant from "../AddResturant/AddRestaurant";

const firebaseUrl =
  "https://nosh-map-default-rtdb.europe-west1.firebasedatabase.app/restaurant.json";

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  // Fetch the list of restaurants from Firebase
  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(firebaseUrl);
      const restaurantList = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      setRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  // Handle adding a new restaurant (callback from AddRestaurant)
  const handleRestaurantAdded = () => {
    fetchRestaurants();
  };

  // Handle restaurant deletion
  const handleRestaurantDeleted = (id) => {
    setRestaurants((prev) => prev.filter((restaurant) => restaurant.id !== id));
  };

  // Handle updating a restaurant
  const handleRestaurantUpdated = () => {
    fetchRestaurants(); // Refresh the list after updating a restaurant
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Nosh Map!</h1>

      {/* Add Restaurant Form */}

      {/* Restaurant List */}
      <RestaurantList
        restaurants={restaurants}
        onDelete={handleRestaurantDeleted}
        onUpdate={handleRestaurantUpdated}
      />
    </div>
  );
}

export default HomePage;
