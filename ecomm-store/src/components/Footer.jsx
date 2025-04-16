import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>🛍️ MyStore</h2>
        <p>Your favorite place to shop premium products online.</p>
      </div>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="/contact">Contact Us</a>
      </div>

      <div className="footer-social">
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

      <p className="footer-copy">&copy; 2025 MyStore. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
