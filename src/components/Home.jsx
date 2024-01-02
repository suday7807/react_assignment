import React, { useContext, useState } from "react";
import { Context } from "./CartContext";
import Products from "./Products";
import Navbar from "./Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const { products } = useContext(Context);

  return (
    <>
      <Navbar />
      <form className="flex justify-center items-center m-5 mx-auto max-w-screen-md">
        <input
          type="text"
          className="outline-none w-full border-2 p-2 border-gray-400 rounded-xl"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="grid grid-cols-4 mx-auto max-w-screen-xl">
        {products
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map((item) => (
            <div key={item.id} className="m-2">
              <Products data={item} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
