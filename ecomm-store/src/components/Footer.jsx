import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <h2>🛍️ MyStore</h2>
        <p>Your favorite place to shop premium products online.</p>
      </div>

      <div className={styles.links}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div className={styles.social}>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
      </div>

      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
