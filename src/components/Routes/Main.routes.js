import React from "react";
import { useRoutes } from 'react-router-dom';
import HomeLayout from "../../layouts/HomeLayout";
import HomePage from "../AuthenticatedApp/HomePage/HomePage";

function MainRoutes() {
  const dashboardRoutes = {
    path: '/',
    element: <HomeLayout/>,
    children: [
      { path: '/', element: <HomePage /> },
    ]
  };
    const routing = useRoutes([dashboardRoutes]);
  return <>{routing}</>
}

export default MainRoutes;
