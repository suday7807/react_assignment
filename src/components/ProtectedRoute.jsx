import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ Home }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const login = localStorage.getItem("token");
    if (!login) {
      navigate("/login");
    }
  });

  return (
    <div>
      <Home />
    </div>
  );
};

export default ProtectedRoute;
