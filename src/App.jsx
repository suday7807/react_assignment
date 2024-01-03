import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartContext>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute Home={Home} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </CartContext>
  );
}

export default App;
