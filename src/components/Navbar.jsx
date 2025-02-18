import { Link } from "react-router-dom";
import logo from "../assets/image-1.png";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/home">
        <img src={logo} alt="Nosh Map Logo" className="navbar-logo" />
      </Link>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/add-restaurant">Add Restaurant</Link>
          </li>
          <li>
            <Link to="/book-a-table">Book Table</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
