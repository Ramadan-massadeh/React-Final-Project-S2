import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/navbar.css";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">🛒 MyStore</h2>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span>({cartItems.length})</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
