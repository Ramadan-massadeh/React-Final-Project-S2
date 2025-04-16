import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Cart() {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const navigate = useNavigate();

  // Calculate total price of items in the cart
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });
  total = total.toFixed(2);

  // Handle placing the order
  const handlePlaceOrder = () => {
    toast.success("Order placed successfully! Redirecting...");
    clearCart();

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Your Cart</h2>
        <p>🛒 Your cart is empty.</p>
      </div>
    );
  }

  const qtyButtonStyle = {
    padding: "4px 10px",
    fontSize: "16px",
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
            borderBottom: "1px solid #ddd",
            paddingBottom: "1rem",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ width: "60px", marginRight: "1rem" }}
          />
          <div style={{ flex: 1 }}>
            {/* Product Title and Price Calculation */}
            <h4>{item.title}</h4>
            <p>
              ${item.price} × {item.quantity} ={" "}
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
            </p>

            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <button
                onClick={() => decreaseQuantity(item.id)}
                style={qtyButtonStyle}
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                style={qtyButtonStyle}
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button
        onClick={handlePlaceOrder}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Cart;
