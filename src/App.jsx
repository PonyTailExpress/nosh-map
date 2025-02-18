import { useState } from 'react';
import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { HomePage } from "./components/HomePage";
import { AboutUs } from "./Pages/AboutPage/AboutUs";
import { AddRestaurantPage } from "./Pages/AddRestaurantPage/AddRestaurantPage";
import { TableBooking } from "./Pages/BookTablePage/TableBooking";
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="book-a-table" element={<TableBooking/>} />
        <Route path="details" element={<RestaurantDetailsPage/>} />
        <Route path="add-restaurant" element={<AddRestaurantPage/>} />
        <Route path="*" element={<NotFoundPage/>} /> {/* 404 Page */}
       </Routes>
    </Router>
  );
}

  

export default App
