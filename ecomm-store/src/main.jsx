import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
        <ToastContainer position="top-right" autoClose={2000} />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
