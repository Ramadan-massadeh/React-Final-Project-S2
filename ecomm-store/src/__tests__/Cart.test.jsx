// Cart test
// submission date: Apr 13, 2025
// author: Valeriia Holotiuk
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "vitest";
import Cart from "../pages/Cart";
import { CartContext } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";

test("displays empty cart message", () => {
  render(
    <MemoryRouter>
      <CartContext.Provider value={{ cartItems: [] }}>
        <Cart />
      </CartContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
});
