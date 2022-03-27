import React from "react";
import { useRoutes } from 'react-router-dom';
import HomeLayout from "../../layouts/HomeLayout";
import HomePage from "../AuthenticatedApp/HomePage/HomePage";
import Swap from "../AuthenticatedApp/Swap/Swap";

function MainRoutes() {
  const dashboardRoutes = {
    path: '/',
    element: <HomeLayout/>,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'swap', element: <Swap /> }
    ]
  };

    const routing = useRoutes([dashboardRoutes]);
  return <>{routing}</>
}

export default MainRoutes;
