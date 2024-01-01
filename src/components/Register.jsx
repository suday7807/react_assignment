import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password, address);
  };
  return (
    <div className=" w-full mx-auto h-screen bg-pink-400 ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-center items-center h-screen gap-12"
      >
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          className=" p-3 rounded-md outline-none"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Enter email"
          className=" p-3 rounded-md outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Enter password"
          className=" p-3 rounded-md outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          value={address}
          placeholder="Enter Address"
          className=" p-3 rounded-md outline-none"
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          type="submit"
          className=" px-6 py-3 border-1 bg-purple-500 font-bold rounded-md"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
