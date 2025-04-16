// Navbar test
// submission date: Apr 13, 2025
// author: Valeriia Holotiuk
import React from "react";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { MemoryRouter } from "react-router-dom";

test("Navbar shows MyStore and links: Home, Cart, Contact", () => {
  render(
    <CartContext.Provider value={{ cartItems: [] }}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </CartContext.Provider>
  );

  expect(screen.getByText(/MyStore/i)).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
});
