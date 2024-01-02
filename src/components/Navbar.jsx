import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "./CartContext";

const Navbar = () => {
  const { cart } = useContext(Context);
  const cartCount = cart.length;
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
          <Link
            to="/home"
            className=" flex items-center  self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >
            <FaCartShopping className=" mr-2" />
            Ecommerce
          </Link>
          <div className="flex items-center space-x-6 decoranone">
            <Link
              to="/cart"
              href="tel:5541251234"
              className="text-gray-900 text-xl font-semibold dark:text-white "
            >
              🛒({cartCount})
            </Link>
            <button
              onClick={handleLogout}
              className="text-white bg-red-700 hover:bg-red-800 outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
