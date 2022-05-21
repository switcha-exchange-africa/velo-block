import React from "react";
import { useRoutes } from 'react-router-dom';
import HomeLayout from "../../layouts/HomeLayout";
import HomePage from "../AuthenticatedApp/HomePage/HomePage";
import Swap from "../AuthenticatedApp/Swap/Swap";
import P2P from "../AuthenticatedApp/P2P/P2P";
import QuickTrade from "../AuthenticatedApp/QuickTrade/QuickTrade";
import Wallet from "../AuthenticatedApp/Wallet/Wallet";

function MainRoutes() {
  const dashboardRoutes = {
    path: '/',
    element: <HomeLayout/>,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'swap', element: <Swap /> },
      { path: "p2p", element: <P2P/>},
      { path: "quick-trade", element: <QuickTrade />},
      { path: "wallet", element: <Wallet/>}
    ]
  };

    const routing = useRoutes([dashboardRoutes]);
  return <>{routing}</>
}

export default MainRoutes;
