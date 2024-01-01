import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const Context = createContext(null);

const CartContext = (props) => {
  const [products, setProducts] = useState([]);

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
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <Context.Provider value={{ products, setProducts }}>
      {props.children}
    </Context.Provider>
  );
};

export default CartContext;
