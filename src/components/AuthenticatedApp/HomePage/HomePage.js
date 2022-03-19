import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as NotificationBell} from  "../../../assets/Icons/NotificationBell.svg";
import {ReactComponent as PositiveTrend} from "../../../assets/Icons/PositiveTrend.svg";
import {ReactComponent as BitcoinLogoIcon} from  "../../../assets/Icons/BitcoinLogoIcon.svg";
import {ReactComponent as SellLogoIcon} from  "../../../assets/Icons/SellLogoIcon.svg";
import {ReactComponent as SendLogoIcon} from  "../../../assets/Icons/SendLogoIcon.svg"; 
import {ReactComponent as ReceiveLogoIcon} from  "../../../assets/Icons/ReceiveLogoIcon.svg";
import {ReactComponent as WalletEmptyState} from  "../../../assets/Icons/WalletEmptyState.svg"; 

import {ReactComponent as ActiveHome} from  "../../../assets/Icons/ActiveHome.svg";
import {ReactComponent as InactiveHomeIcon} from "../../../assets/Icons/InactiveHomeIcon.svg";
import {ReactComponent as ActiveSearchIcon} from  "../../../assets/Icons/ActiveSearchIcon.svg";
import {ReactComponent as InactiveSearchIcon} from  "../../../assets/Icons/InactiveSearchIcon.svg";
import {ReactComponent as ActiveSwapIcon} from  "../../../assets/Icons/ActiveSwapIcon.svg"; 
import {ReactComponent as InactiveSwapIcon} from  "../../../assets/Icons/InactiveSwapIcon.svg";
import {ReactComponent as ActiveAccountIcon} from  "../../../assets/Icons/ActiveAccountIcon.svg"; 
import {ReactComponent as InactiveAccountIcon} from  "../../../assets/Icons/InactiveAccountIcon.svg";
import Button from '../../ReusableComponents/Button/Button';

import balanceBackground from "../../../assets/Img/BalanceTrend.png"


function HomePage() {
    const {pathname} = useLocation();

    console.log(pathname);
  return (
    <HomePageView>
    <div className="home-page mb-5">
        <div className="header">
            <div className="profile flex">
                <div className="profileImage mr-2"></div>
                <div className="normal-text flex align-center">Hi, <span className="bold">Dayo</span></div>
            </div>
            <div className="flex align-center"> <NotificationBell/></div>
            
        </div>
        <div className="amount-section mt-5 flex-column justify-center align-center flex">
            <div className="balance-heading">Total Wallet Balance</div>
            <div className="balance mt-2">NGN 200,000 </div>
            <div className="balance-heading"> <PositiveTrend/> <span className="ml-2">3,500 Today</span> </div>
        </div>
        <div className="flex  mt-5 justify-content-around width-80">
            <div>
                <div className="flex justify-center align-center icon-height">
                    <BitcoinLogoIcon/>
                </div>
                <div className="normal-text mt-3 bold"> Buy</div>
            </div>
            <div>
                <div className="flex justify-center align-center icon-height">
                    <SellLogoIcon/>
                </div>
                <div className="normal-text mt-3 bold"> Sell</div>
            </div>
            <div>
                <div className="flex justify-center align-center icon-height">
                    <SendLogoIcon/>
                </div>
                <div className="normal-text mt-3 bold"> Send</div>
            </div>
            <div>
                <div className="flex justify-center align-center icon-height">
                    <ReceiveLogoIcon/>
                </div>
                <div className="normal-text mt-3 bold"> Receive</div>
            </div>
        </div>
        <div className="bold wallet-heading mt-5">My Wallets</div>
        <div className="mt-3">
            <div className="flex justify-center">
            <WalletEmptyState/>
            </div>
            <div className="normal-text color-grey"> You do not have any asset in your wallet</div>
        </div>
        <div className="mt-5">
            <Button text={"Add Wallet"} className={"mb-4 "}/>
        </div>
    </div>
        <div className="bottom-nav flex justify-content-around align-center">
            <div>
                <div className="flex justify-center align-center icon-height">
                    {pathname === "/home" ? <ActiveHome/> : <InactiveHomeIcon/>}
                </div>
                <div className={`nav-bar-text mt-1 bold ${pathname === "/home" && "orange-text"}`}> Home</div>
            </div>

            <div>
                <div className="flex justify-center align-center icon-height">
                    {pathname === "/search" ? <ActiveSearchIcon/> : <InactiveSearchIcon/>}
                </div>
                <div className="nav-bar-text mt-1 bold"> Search</div>
            </div>

            <div>
            <div className="flex justify-center align-center icon-height">
                    {pathname === "/search" ? <ActiveSwapIcon/> : <InactiveSwapIcon/>}
                </div>
                <div className="nav-bar-text mt-1 bold"> Swap</div>
            </div>

            <div>
            <div className="flex justify-center align-center icon-height">
                    {pathname === "/search" ? <ActiveAccountIcon/> : <InactiveAccountIcon/>}
                </div>
                <div className="nav-bar-text mt-1 bold"> Search</div>
            </div>

        </div>
   
    </HomePageView>
  )
}

export default HomePage;

const HomePageView = styled.div`
    .home-page{
        padding: 24px;
    }
    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .profileImage{
        height: 36px;
        width: 36px;
        border-radius: 100%;
        background: grey;
    }
    .normal-text{
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #152C07
    }
    .bold{
        font-weight: bold !important;
    }
    .amount-section{
        width: 100%;
        height: 144px;
        left: 24px;
        top: 134px;
        background: #FB5E04;
        border-radius: 20px;
        background-image: url(${balanceBackground});

    }
    .balance-heading{
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
    }
    .balance{
        font-style: normal;
        font-weight: 800;
        font-size: 28px;
        line-height: 120%;
        text-align: center;
        color: #FFFFFF;
    }
    .icon-height{
        min-height: 25px;
    }
    .width-80 {
        max-width: 80%;
        margin: auto;
    }
    .wallet-heading{
        font-size: 16px;
        line-height: 150%;
        color: #10192D;
    }
    .color-grey{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        color: #64748B;
    }
    .bottom-nav{
        min-height: 90px;
        width: 100%;
        position: fixed;
        bottom: 0;
        background: #ffffff
    }
    .orange-text{
        color: #FB5E04 !important;
    }
    .nav-bar-text{
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 140%;
        text-align: center;
        color: #64748B;
    }
`;