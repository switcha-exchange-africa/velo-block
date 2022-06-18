import React,{useEffect} from "react";
import Cookies from "js-cookie";
import { useRoutes } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import HomeLayout from "../../layouts/HomeLayout";
import HomePage from "../AuthenticatedApp/HomePage/HomePage";
import Swap from "../AuthenticatedApp/Swap/Swap";
import P2P from "../AuthenticatedApp/P2P/P2P";
import QuickTrade from "../AuthenticatedApp/QuickTrade/QuickTrade";
import Wallet from "../AuthenticatedApp/Wallet/Wallet";

function MainRoutes() {
  const {logout} = useSelector(state =>  state.accountState);
  const navigate = useNavigate();

  const logUserOut = () => {
    if(logout) {
      Cookies.remove("switchaAppToken")
      navigate("/login")
    }
  }

  

  useEffect (()=> {
    logUserOut()
  },[logout])

  const dashboardRoutes = {
    path: '/',
    element: <HomeLayout/>,
    children: [
      { path: 'dashboard', element: <HomePage /> },
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
