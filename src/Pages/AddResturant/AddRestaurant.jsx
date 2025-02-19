// src/Pages/AddRestaurant/AddRestaurant.jsx
import React, { useState } from "react";
import axios from "axios";
import "./AddRestaurant.css";

function AddRestaurant({ onRestaurantAdded }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the restaurant object
    const newRestaurant = { name, address, website };

    try {
      // Send the data to Firebase Realtime Database using a POST request
      await axios.post(
        "https://nosh-map-default-rtdb.europe-west1.firebasedatabase.app/restaurant.json",
        newRestaurant
      );

      // Reset form fields
      setName("");
      setAddress("");
      setWebsite("");

      // Trigger the parent callback to update the list
      if (onRestaurantAdded) {
        onRestaurantAdded();
      }
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  return (
    <div className="add-restaurant">
      <h4>Add a New Restaurant</h4>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>Website</label>
        <input
          type="url"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />

        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}

export default AddRestaurant;
