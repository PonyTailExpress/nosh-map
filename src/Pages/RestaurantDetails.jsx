import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/restaurant/${id}.json`);
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
