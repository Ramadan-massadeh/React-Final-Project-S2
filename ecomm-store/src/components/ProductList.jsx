import useProducts from "../hooks/useProducts";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import "../styles/productList.css";

function ProductList() {
  const { products, loading } = useProducts();
  const { addToCart } = useContext(CartContext);

  if (loading) {
    return <p className="product-loading">Loading products...</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <h3 className="product-title">{product.title}</h3>

          <p className="product-description">{product.description}</p>

          <p className="product-price">${product.price}</p>

          <button
            className="product-button"
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
