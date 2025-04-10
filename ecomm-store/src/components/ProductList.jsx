import useProducts from "../hooks/useProducts";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./ProductList.module.css";
import { toast } from "react-toastify";

function ProductList() {
  // Getting products and loading state from custom hook
  const { products, loading } = useProducts();
  // Getting addToCart function from context
  const { addToCart } = useContext(CartContext);

  // Show loading message while products are being fetched
  if (loading) {
    return <p className={styles.loading}>Loading products...</p>;
  }

  return (
    <div className={styles.grid}>
      {/* Mapping through products array and rendering product cards */}
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          {/* Product image */}
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
          {/* Product title */}
          <h3 className={styles.title}>{product.title}</h3>
          {/* Product description */}
          <p className={styles.description}>{product.description}</p>
          {/* Product price */}
          <p className={styles.price}>${product.price}</p>
          {/* Button to add product to cart and show a toast notification */}
          <button
            className={styles.button}
            onClick={() => {
              addToCart(product);
              toast.success("Product added to cart!");
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
