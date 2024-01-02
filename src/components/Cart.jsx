import React, { useContext } from "react";
import { Context } from "./CartContext";
import Navbar from "./Navbar";

const Cart = () => {
  const { cart } = useContext(Context);
  console.log(cart);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="m-5 text-center mx-auto max-w-screen-md ">
        <h1 className=" mb-5 font-bold">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="">
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className=" flex justify-around items-center h-20 "
                >
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className=" w-[100px] h-10"
                  />
                  <li> {item.title} </li>
                  <li> ${item.price}</li>
                </li>
              ))}
            </ul>
            <div className="flex justify-around h-20 items-center">
              <p className=" text-center font-bold">
                Total: ${calculateTotal()}
              </p>
              <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center">
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
