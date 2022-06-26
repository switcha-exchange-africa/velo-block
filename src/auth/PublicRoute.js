import React from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../utils/userLoggedInCheck";

const PublicRoute = ({Component}) => {
    const auth = isLogin();

    return !auth ? <Component /> : <Navigate to="/dashboard" />
};

export default PublicRoute;
