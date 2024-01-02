import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const Context = createContext(null);

const CartContext = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const data = response.data.products;
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAPI();
  }, []);

  const addToCart = (productId, productTitle, productPrice, ProductImg) => {
    // Add the selected product to the cart
    const newCartItem = {
      id: productId,
      title: productTitle,
      price: productPrice,
      images: ProductImg,
    };
    setCart((prevCart) => [...prevCart, newCartItem]);
  };

  return (
    <Context.Provider value={{ products, setProducts, cart, addToCart }}>
      {props.children}
    </Context.Provider>
  );
};

export default CartContext;
