import { useState } from "react";
import axios from "axios";
import "./AddRestaurant.css";

function AddRestaurant() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newRestaurant = { name, address, website };

    try {
      await axios.post(
        "https://nosh-map-default-rtdb.europe-west1.firebasedatabase.app/restaurant.json",
        newRestaurant
      );

      setName("");
      setAddress("");
      setWebsite("");
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  return (
    <div className="add-restaurant">
      <h4>Foodie Favourites Start Here, Add Yours!</h4>
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
