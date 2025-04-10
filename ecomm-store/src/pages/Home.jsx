import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products?_limit=4")
      .then((res) => res.json())
      .then((data) => setFeatured(data))
      .catch((err) => console.error("Failed to fetch featured products:", err));
  }, []);

  return (
    <div className="home">
      {/* ======= Hero Section ======= */}
      <div className="hero-container">
        <div className="overlay">
          <div className="hero-content">
            <h1>
              Welcome to <span>MyStore</span>
            </h1>
            <p>Your favorite place to shop premium products online.</p>
            <Link to="/products">
              <button className="shop-button">🛍️ Start Shopping</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ======= Featured Products Section ======= */}
      <section className="featured-section">
        <h2>✨ Featured Products</h2>
        <div className="featured-products">
          {featured.map((product) => (
            <div key={product.id} className="featured-card">
              <img src={product.image} alt={product.title} />
              <h4>{product.title.slice(0, 60)}...</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>

        <Link to="/products">
          <button className="view-all-button">View All Products</button>
        </Link>
      </section>
    </div>
  );
}

export default Home;
