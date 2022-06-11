import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import {ReactComponent as QuickTradeIcon} from "../../../assets/Icons/QuickTradeIcon.svg";
import {ReactComponent as P2PIcon} from "../../../assets/Icons/P2PIcon.svg";
import {ReactComponent as SwapIcon} from "../../../assets/Icons/SwapIcon.svg";
import {ReactComponent as WalletIcon} from "../../../assets/Icons/WalletIcon.svg";
import {ReactComponent as FAQIcon} from "../../../assets/Icons/FAQIcon.svg";
import {ReactComponent as SettingsIcon} from "../../../assets/Icons/SettingsIcon.svg";

function Sidebar() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const gotoRoute = (route)=>{
      navigate(route)
    }
    const SidebarItems = [
        {
            name: "Home",
            icon: <QuickTradeIcon/>,
            path: "/"
        },
        {
            name: "Quick Trade",
            icon: <QuickTradeIcon/>,
            path: "/quick-trade"

        },
        {
            name: "P2P",
            icon: <P2PIcon/>,
            path: "/p2p"
        },
        {
            name: "Swap",
            icon: <SwapIcon/>,
            path: "/swap"
        },
        {
            name: "Wallet",
            icon: <WalletIcon/>,
            path: "/wallet"
        },
        {
            name: "FAQs",
            icon: <FAQIcon/>,
            path: "/faq"
        },
        {
            name: "Settings",
            icon: <SettingsIcon/>,
            path: "/settings"
        },
    ]
    const SideBarItem = ({Icon, Name, onClick, path}) => {
        return (
            <div className={`sidebar-item flex p-3 align-center mt-3 cursor-pointer ${pathname === path ? "active": ""}`} onClick={onClick}>
                <div className="flex justify-center align-center mr-3">{Icon}</div>
                <div className="flex justify-center align-center">{Name}</div>
            </div>
        )
    }

    return (
        <SidebarView>
            {SidebarItems.map((item, index) => (
                <SideBarItem key={index} Icon={item.icon} Name={item.name} path={item.path} pathname={pathname} onClick={()=> gotoRoute(item.path)} />
            ))}
        </SidebarView>
    );
}

export default Sidebar;

const SidebarView = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: fixed;
    min-width: 15%;
    max-width: 15%;
    background: white;
    padding: 10px;

    .sidebar-item {
        height: 56px;
        width: 100%;
        border-radius: 4px;
        :hover{
            /* background-image: linear-gradient(to right, #FB5E04, #F88379); */
            box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
            color: #ffffff;
            transform: scale(1.07);
            background: #FB5E04;
        }
    }
    .active {
        background: #FB5E04;
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
        color: #ffffff;
        transform: scale(1.07)
    }
    @media (max-width: 900px) {
        display: none;
    }
`
