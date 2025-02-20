import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantsLists";
import apiClient from "../../Services/api";

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const response = await apiClient.get("/restaurant.json");
      console.log("Fetched restaurants:", response.data);
      const restaurantList = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      setRestaurants(restaurantList);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const handleRestaurantDeleted = (id) => {
    setRestaurants((prev) => prev.filter((restaurant) => restaurant.id !== id));
  };

  const handleRestaurantUpdated = () => {
    fetchRestaurants();
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Nosh Map!</h1>

      <RestaurantList
        restaurants={restaurants}
        onDelete={handleRestaurantDeleted}
        onUpdate={handleRestaurantUpdated}
      />
    </div>
  );
}

export default HomePage;
