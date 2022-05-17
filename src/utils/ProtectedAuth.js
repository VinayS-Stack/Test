import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  if (user) {
    return true;
  } else {
    return false;
  }
};

const ProtectedRoutes = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  // const auth = useAuth();
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
