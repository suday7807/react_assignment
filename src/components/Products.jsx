import React, { useContext } from "react";
import { Context } from "./CartContext";

const Products = ({ data }) => {
  const { addToCart } = useContext(Context);

  return (
    <div className="m-2 w-70 h-[500px] border-2 p-2 border-gray-400">
      <img src={data.images[0]} className="w-full h-[70%]" alt={data.title} />
      <ul className="p-2">
        <li className="font-bold">{data.title}</li>
        <li className="font-semibold py-2">Price: {data.price}₹</li>
        <button
          onClick={() =>
            addToCart(data.id, data.title, data.price, data.images)
          }
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Add to cart
        </button>
      </ul>
    </div>
  );
};

export default Products;
