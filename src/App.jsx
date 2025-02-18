import { useState } from 'react';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import AddRestaurant from './Pages/AddResturant/AddRestaurant';
import BookTable from './Pages/BookTable/BookTable';
import AboutUs from './Pages/AboutUs';
import NotFoundPage from './components/NotFoundPage';
import RestaurantDetails from './Pages/RestaurantDetails/RestaurantDetails';


function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="book-a-table" element={<BookTable/>} />
        <Route path="details" element={<RestaurantDetails/>} />
        <Route path="add-restaurant" element={<AddRestaurant/>} />
        <Route path="*" element={<NotFoundPage/>} /> {/* 404 Page */}
       </Routes>
    </Router>
  );
}

  

export default App
