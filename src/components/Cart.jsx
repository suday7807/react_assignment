import React, { useContext } from "react";
import { Context } from "./CartContext"; // Assuming your context file is named CartContext.js
import Products from "./Products"; // Make sure to import your Products component

const Cart = () => {
  const { products } = useContext(Context);

  return (
    <div>
      {products.map((item) => (
        <Products key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Cart;
