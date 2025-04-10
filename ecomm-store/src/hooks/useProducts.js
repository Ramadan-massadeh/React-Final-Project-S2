import { useState, useEffect } from "react";

// Custom hook to fetch products from an API
function useProducts() {
  const [products, setProducts] = useState([]); // Holds the list of products
  const [loading, setLoading] = useState(true); // Indicates loading state

  useEffect(() => {
    // Fetch product data from the API
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products"); // API call
        const data = await res.json(); // Parse JSON response
        setProducts(data); // Update products state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
      }
    }

    fetchProducts(); // Call fetch function when component mounts
  }, []); // Empty dependency array ensures it runs only once

  // Return products and loading state
  return { products, loading };
}

export default useProducts;
