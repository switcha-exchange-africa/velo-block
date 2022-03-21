import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utils/userLoggedInCheck";

const PrivateRoute = ({Component}) => {
  const auth = isLogin();

  return auth ? <Component /> : <Navigate to="/login" />
};

export default PrivateRoute;