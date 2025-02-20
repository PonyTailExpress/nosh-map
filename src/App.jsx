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

          {/* Route for /restaurant/:id to show details of a specific restaurant */}
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />

          <Route path="about" element={<AboutUs />} />
          <Route path="book-a-table" element={<BookTable />} />
          <Route path="add-restaurant" element={<AddRestaurant />} />

          {/* Handle 404 - Not Found route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
