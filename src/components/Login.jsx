import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username, //kminchelle
        password, //0lelplR
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        toast("Login successfully");
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error) {
      toast.warning("invalid Credentials");
      console.log(error);
    }
  };

  return (
    <>
      <div className=" w-full mx-auto  bg-gray-400 flex justify-center items-center h-screen ">
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col text-center gap-12"
        >
          <label className=" text-4xl font-semibold">Login</label>
          <input
            type="text"
            value={username}
            placeholder="Enter Name kminchelle"
            className=" p-3 rounded-md outline-none"
            required
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            value={password}
            placeholder="Enter password 0lelplR"
            className=" p-3 rounded-md outline-none"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className=" px-6 py-3 border-1 bg-purple-500 font-bold rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
