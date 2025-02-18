import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AddRestaurant from './Pages/AddResturant/AddRestaurant';
import BookTable from './Pages/BookTable/BookTable';
import AboutUs from './Pages/AboutUs';
import NotFoundPage from './components/NotFoundPage';
import RestaurantDetails from './Pages/RestaurantDetails/RestaurantDetails';
import HomePage from './Pages/HomePage/HomePage';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="book-a-table" element={<BookTable/>} />
        <Route path="details" element={<RestaurantDetails/>} />
        <Route path="add-restaurant" element={<AddRestaurant/>} />
        <Route path="*" element={<NotFoundPage/>} />
       </Routes>
    </>
     
  );
}

  

export default App
