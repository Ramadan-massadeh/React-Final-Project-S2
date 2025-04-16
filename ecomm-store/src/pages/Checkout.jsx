import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems } = useContext(CartContext);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const navigate = useNavigate();

  // Calculate the total price of all items in the cart
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });
  total = total.toFixed(2);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Checkout</h2>
        <p>🛒 Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Checkout</h2>

      {!orderPlaced ? (
        <>
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
        <h3 style={{ color: "green", marginTop: "2rem" }}>
          Order Placed Successfully! Redirecting...
        </h3>
      )}
    </div>
  );
}

export default Checkout;
