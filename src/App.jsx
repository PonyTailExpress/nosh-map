import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import AddRestaurant from "./Pages/AddResturant/AddRestaurant";
import BookTable from "./Pages/BookTable/BookTable";
import AboutUs from "./Pages/AboutUs";
import NotFoundPage from "./components/NotFoundPage";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RestaurantList from "./Pages/HomePage/RestaurantsLists";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          {/* Redirect root ("/") to "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          {/* Route for /home path */}
          <Route path="/home" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="book-a-table" element={<BookTable />} />
          <Route path="details" element={<RestaurantDetails />} />
          <Route path="add-restaurant" element={<AddRestaurant />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
