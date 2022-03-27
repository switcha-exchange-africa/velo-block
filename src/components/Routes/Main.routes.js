import React from "react";
import { useRoutes } from 'react-router-dom';
import HomeLayout from "../../layouts/HomeLayout";
import HomePage from "../AuthenticatedApp/HomePage/HomePage";
import Swap from "../AuthenticatedApp/Swap/Swap";
import P2P from "../AuthenticatedApp/P2P/P2P";

function MainRoutes() {
  const dashboardRoutes = {
    path: '/',
    element: <HomeLayout/>,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'swap', element: <Swap /> },
      { path: "p2p", element: <P2P/>}
    ]
  };

    const routing = useRoutes([dashboardRoutes]);
  return <>{routing}</>
}

export default MainRoutes;
