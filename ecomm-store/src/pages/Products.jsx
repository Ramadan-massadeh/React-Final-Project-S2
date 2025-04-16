import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/products.css";
function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5001/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h2 className="products-header">🛍️ All Products</h2>

      {products.length === 0 ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h4 className="product-title">{product.title}</h4>
              <p className="product-description">
                {product.description.slice(0, 100)}
              </p>
              <p className="product-price">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
