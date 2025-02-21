import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantsLists";
import { useNavigate } from "react-router-dom";
import GoogleMapComponent from "../../components/GoogleMap";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  const fetchCoordinates = async (address) => {
    const encodedAddress = encodeURIComponent(address);
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }`;

    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();

      // Check if geocoding was successful and return lat/lng
      if (data.status === "OK" && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
      }

      return { lat: null, lng: null };
    } catch (error) {
      console.error("Error fetching geocode data:", error);
      return { lat: null, lng: null };
    }
  };

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/restaurant.json`);
      console.log("Fetched restaurants:", response.data);

      const restaurantList = await Promise.all(
        Object.keys(response.data).map(async (key) => {
          const restaurant = {
            id: key,
            ...response.data[key],
          };

          // Fetch coordinates dynamically for each restaurant's address
          const { lat, lng } = await fetchCoordinates(restaurant.address);
          return { ...restaurant, latitude: lat, longitude: lng };
        })
      );

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

  const handleRestaurantClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Your Fave Nosh Gems</h2>

      <RestaurantList
        restaurants={restaurants}
        onDelete={handleRestaurantDeleted}
        onUpdate={handleRestaurantUpdated}
        onClick={handleRestaurantClick}
      />

      <GoogleMapComponent restaurants={restaurants} />
    </div>
  );
}

export default HomePage;
