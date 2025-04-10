import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./Products.module.css";

function Products() {
  // State to store products
  const [products, setProducts] = useState([]);

  // Access the addToCart function from context
  const { addToCart } = useContext(CartContext);

  // Fetch product data from JSON server when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5001/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛍️ All Products</h2>

      {/* Show loading message if products are not yet loaded */}
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Render each product card */}
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <h4 className={styles.title}>{product.title}</h4>
              <p className={styles.description}>
                {product.description.slice(0, 100)}
              </p>
              <p className={styles.price}>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className={styles.button}
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
