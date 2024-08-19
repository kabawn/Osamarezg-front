import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected component
  return element;
};

export default ProtectedRoute;
