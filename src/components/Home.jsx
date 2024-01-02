import React, { useContext, useState } from "react";
import { Context } from "./CartContext";
import Products from "./Products";
import Navbar from "./Navbar";

const Home = () => {
  const { products } = useContext(Context);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((item) => {
    const meetsSearchCriteria =
      search.toLowerCase() === "" || item.title.toLowerCase().includes(search);

    const meetsPriceCriteria =
      (minPrice === "" || item.price >= parseFloat(minPrice)) &&
      (maxPrice === "" || item.price <= parseFloat(maxPrice));

    return meetsSearchCriteria && meetsPriceCriteria;
  });

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
        <input
          type="number"
          className="outline-none w-1/4 border-2 p-2 border-gray-400 rounded-xl ml-2"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          className="outline-none w-1/4 border-2 p-2 border-gray-400 rounded-xl ml-2"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </form>
      <div className="grid grid-cols-4 mx-auto max-w-screen-xl">
        {filteredProducts.map((item) => (
          <div key={item.id} className="m-2">
            <Products data={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
