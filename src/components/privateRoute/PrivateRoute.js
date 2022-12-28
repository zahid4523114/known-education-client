import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (loader) {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  if (user && user.uid) {
    return children;
  } else {
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
