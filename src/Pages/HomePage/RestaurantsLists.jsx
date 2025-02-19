import React, { useState } from "react";
import axios from "axios";

function RestaurantList({ restaurants, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://nosh-map-default-rtdb.europe-west1.firebasedatabase.app/restaurant/${id}.json`
      );
      onDelete(id); // Notify parent component to refresh the list
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };

  // Handle Edit Button Click
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

  // Handle Update Form Submit
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://nosh-map-default-rtdb.europe-west1.firebasedatabase.app/restaurant/${currentRestaurant.id}.json`,
        currentRestaurant
      );
      onUpdate(); // Notify parent component to refresh the list
      setIsEditing(false); // Close the edit form
    } catch (error) {
      console.error("Error updating restaurant:", error);
    }
  };

  return (
    <div className="restaurant-list">
      <h4>Restaurant List</h4>
      {/* Edit Form */}
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
              <div>
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
