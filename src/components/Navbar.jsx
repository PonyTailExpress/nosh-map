import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/add-restaurant"> AddRestaurantPage </Link>
        <Link to="/book-a-table"> TableBooking </Link>

      </ul>
    </nav>
  );
}

export default Navbar;
