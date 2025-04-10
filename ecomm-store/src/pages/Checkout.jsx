import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  // Access cart items from context
  const { cartItems } = useContext(CartContext);

  // Track whether the order has been placed
  const [orderPlaced, setOrderPlaced] = useState(false);

  const navigate = useNavigate();

  // Calculate the total price of all items in the cart
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });
  total = total.toFixed(2);

  // Function triggered when user clicks "Place Order"
  const handlePlaceOrder = () => {
    setOrderPlaced(true); // Update UI to show success message

    // Redirect user to home page after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // If the cart is empty, show a message
  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Checkout</h2>
        <p>🛒 Your cart is empty.</p>
      </div>
    );
  }

  // If cart has items, show summary and place order button
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Checkout</h2>

      {!orderPlaced ? (
        <>
          {/* Show item count and total price */}
          <p>Items in Cart: {cartItems.length}</p>
          <p>Total Price: ${total}</p>

          <button
            onClick={handlePlaceOrder}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </>
      ) : (
        // Success message shown after order is placed
        <h3 style={{ color: "green", marginTop: "2rem" }}>
          ✅ Order Placed Successfully! Redirecting...
        </h3>
      )}
    </div>
  );
}

export default Checkout;
