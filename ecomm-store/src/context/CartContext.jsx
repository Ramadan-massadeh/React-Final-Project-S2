import { createContext, useState, useEffect } from "react";

// 1. Create the context object for the cart
export const CartContext = createContext();

// 2. Create the provider component to wrap the app and provide cart state
export function CartProvider({ children }) {
  // 3. Initialize cart state from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  // 4. Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // 5. Function to add product to the cart (or increase quantity if already in cart)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If product already exists, increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If product is new, add it with quantity = 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // 6. Function to remove one unit of a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove item if quantity is 0
    });
  };

  // 7. Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // 8. Increase the quantity of a product by 1
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // 9. Decrease the quantity of a product by 1 (remove if quantity becomes 0)
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 10. Provide all cart state and functions to child components
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
