import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>🛒 MyStore</h2>
      <ul className={styles.navLinks}>
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
