import useProducts from "../hooks/useProducts";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styles from "./ProductList.module.css";
import { toast } from "react-toastify";

function ProductList() {
  const { products, loading } = useProducts();

  const { addToCart } = useContext(CartContext);

  if (loading) {
    return <p className={styles.loading}>Loading products...</p>;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />

          <h3 className={styles.title}>{product.title}</h3>

          <p className={styles.description}>{product.description}</p>

          <p className={styles.price}>${product.price}</p>

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
