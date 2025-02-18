import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/about"> About Us </Link></li>
        <li><Link to="/add-restaurant"> Add Restaurant </Link></li>
        <li><Link to="/book-a-table"> Table Booking </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
