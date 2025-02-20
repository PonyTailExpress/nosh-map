import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../../Services/api";
import "./RestaurantsLists.css";

function RestaurantList({ restaurants, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await apiClient.delete(`/restaurant/${id}.json`);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };

  const handleEditClick = (restaurant) => {
    setIsEditing(true);
    setCurrentRestaurant({ ...restaurant });
  };

  // Handle Input Changes for Edit Form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentRestaurant((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiClient.put(
        `/restaurant/${currentRestaurant.id}.json`,
        currentRestaurant
      );
      console.log("Updated restaurant:", currentRestaurant);
      onUpdate();
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating restaurant:", error);
    }
  };

  const handleRestaurantClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div className="restaurant-list">
      {isEditing ? (
        <div className="edit-form">
          <h5>Edit Restaurant</h5>
          <form onSubmit={handleUpdateSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={currentRestaurant.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={currentRestaurant.address}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Website:
              <input
                type="url"
                name="website"
                value={currentRestaurant.website}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Update Restaurant</button>
            <button type="button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <ul>
          {restaurants.map((restaurant) => (
            <li key={restaurant.id} className="restaurant-item">
              <div
                onClick={() => handleRestaurantClick(restaurant.id)}
                style={{ cursor: "pointer" }}
              >
                <strong>{restaurant.name}</strong>
                <br />
                {restaurant.address}
                <br />
                <a
                  href={restaurant.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
              <div>
                <button
                  className="edit-btn"
                  onClick={() => handleEditClick(restaurant)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(restaurant.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RestaurantList;
