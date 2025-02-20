import { useState, useEffect } from "react";
import RestaurantList from "./RestaurantsLists";
import apiClient from "../../Services/api";
import { useNavigate } from "react-router-dom";
import GoogleMapComponent from "../../components/GoogleMap";

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  // Function to fetch coordinates using Geocoding API
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

      // If geocoding fails or no results, return null coordinates
      return { lat: null, lng: null };
    } catch (error) {
      console.error("Error fetching geocode data:", error);
      return { lat: null, lng: null };
    }
  };

  // Fetch restaurants and their coordinates
  const fetchRestaurants = async () => {
    try {
      const response = await apiClient.get("/restaurant.json");
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
    navigate(`/restaurant/${id}`); // Navigates to the details page with the restaurant's id
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="homepage" style={{ textAlign: "center", padding: "20px" }}>
      <h2>Your Fave Nosh Gems</h2>

      {/* Restaurant list */}
      <RestaurantList
        restaurants={restaurants}
        onDelete={handleRestaurantDeleted}
        onUpdate={handleRestaurantUpdated}
        onClick={handleRestaurantClick} // Pass this handler for restaurant click
      />

      {/* Google Map below the restaurant list */}
      <GoogleMapComponent restaurants={restaurants} />
    </div>
  );
}

export default HomePage;
