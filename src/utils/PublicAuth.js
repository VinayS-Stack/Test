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

const PublicRoutes = () => {
  const auth = useAuth();
  return auth ? <Navigate to="/Dashboard" /> : <Outlet />;
};

export default PublicRoutes;
