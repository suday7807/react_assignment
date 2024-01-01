import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
          <span className=" flex items-center  self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <FaCartShopping className=" mr-2" />
            Ecommerce
          </span>
          <div className="flex items-center space-x-6 decoranone">
            <Link
              to="/cart"
              href="tel:5541251234"
              className="text-gray-900 text-xl font-semibold dark:text-white "
            >
              🛒
            </Link>
            <button
              onClick={handleLogout}
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
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
