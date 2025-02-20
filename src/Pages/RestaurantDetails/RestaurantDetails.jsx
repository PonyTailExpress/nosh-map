import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import apiClient from "../../Services/api";

function RestaurantDetails() {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Fetch restaurant details by ID
    const fetchRestaurantDetails = async () => {
      try {
        const response = await apiClient.get(`/restaurant/${id}.json`);
        setRestaurant(response.data);
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  if (!restaurant) return <div>Loading...</div>;

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.address}</p>
      <p>{restaurant.cuisine}</p>
      <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
        Visit Website
      </a>
    </div>
  );
}

export default RestaurantDetails;
