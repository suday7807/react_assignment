import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";
import CartContext from "./components/CartContext";

function App() {
  return (
    <CartContext>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute Home={Home} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContext>
  );
}

export default App;
