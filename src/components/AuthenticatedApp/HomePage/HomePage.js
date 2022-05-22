import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {ReactComponent as PointerIcon} from "../../../assets/Icons/PointerIcon.svg";
import {ReactComponent as P2PIcon} from "../../../assets/Icons/P2PIcon.svg";

import {ReactComponent as WalletIcon} from "../../../assets/Icons/WalletIcon.svg";
import { useDispatch, useSelector } from 'react-redux';
import { getUsersWallets } from '../../../redux/sigup/actions';
import Cookies from 'js-cookie';


function HomePage() {
    const dispatch= useDispatch()
    const [pageView, setPageView] = useState("buy");
    const [filterType, setFilterType] = useState("btc");
    const {user} = useSelector(state => state.accountState)


    const ActionItems = [
        {
            header: "P2P Trading",
            subheading: "Bank Transfer, Digital Wallet Transfer.",
            icon: <P2PIcon/>
        },
        {
            header: "Quick Trade",
            subheading: "Bank Transfer, Digital Wallet Transfer.",
            icon: <P2PIcon/>
        },
        {
            header: "Deposit",
            subheading: "Bank Transfer, Digital Wallet Transfer.",
            icon: <WalletIcon/>
        },
        {
            header: "Withdraw",
            subheading: "Bank Transfer, Digital Wallet Transfer.",
            icon: <WalletIcon/>
        },
        
    ]

    const PriceList = [
        {
            conversionType: "BTC/USDT",
            trend: "negative",
            trendPercent: "0.60%",
            amount: 22454.24
        },
        {
            conversionType: "BTC/USDT",
            trend: "positive",
            trendPercent: "0.10%",
            amount: 24524.24
        },
        {
            conversionType: "BTC/USDT",
            trend: "negative",
            trendPercent: "0.10%",
            amount: 24524.24
        },
        {
            conversionType: "BTC/USDT",
            trend: "positive",
            trendPercent: "0.10%",
            amount: 2124.24
        },
        {
            conversionType: "BTC/USDT",
            trend: "positive",
            trendPercent: "0.10%",
            amount: 24524.24
        },
        {
            conversionType: "BTC/USDT",
            trend: "positive",
            trendPercent: "0.10%",
            amount: 24524.24
        },
    ]

    const adverts = [
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1
        },
    ]

    const ActionItemCard = ({Heading, SubHeading, Icon}) => {
        return (
            <div className="action-card">
                <div className="action-card-heading">{Heading}</div>
                <div className="sub-heading mt-2">{SubHeading}</div>
                <div className="flex justify-between mt-4">
                    <div className="">{Icon}</div>
                    <div className="flex justify-center align-center"><PointerIcon/></div>
                </div>
            </div>
        )
    }

    const PriceCard =({ConversionType, Trend, TrendPercent, Amount}) => {
        return (
            <div className="price-card">
                <div className="flex heading">
                    <div className="mr-2">{ConversionType}</div>
                    <div className={`${Trend}`}>{TrendPercent}</div>
                </div>
                <div className={`amount ${Trend}`}>
                    {Amount}
                </div>
            </div>
        )
    }

    const LeaderBoard =({Username, Orders, CompletionRate, Price, AvailableAmount, Limit, PaymentType, TradeType}) => {
        return (
            <LeaderBoardView>
                <div className="leaderboard-body flex align-center">
                    <div className="width-2 flex">
                        <div className="icon flex justify-center align-center mr-2">M</div>
                        <div>
                            <div className="user-name">{Username}</div>
                            <div className="user-quality">{Orders} orders | {CompletionRate}% completion</div>
                        </div>
                    </div>
                    <div className="width-1 flex align-center leaderboard-text">{Price} <span className="subscript ml-2">NGN</span></div>
                    <div className="width-1 flex align-center leaderboard-text">{AvailableAmount}</div>
                    <div className="width-1 flex align-center leaderboard-text">{Limit} USD</div>
                    <div className="width-1 flex align-center">
                        <div className="payment-type">{PaymentType}</div>
                    </div>
                    <div className="width-1 flex align-center">
                        <div className="trade-type">{TradeType === 1 ? "Buy BTC" : "Sell BTC"}</div>
                    </div>
                </div>
            </LeaderBoardView>
        )
    }

    return (
        <HomePageView>
            <div className=" flex justify-between">
                {ActionItems.map((item, index) => (
                    <ActionItemCard key={index} Heading={item.header} SubHeading={item.subheading} Icon={item.icon}/>
                ))}
            </div>

            <div className=" flex justify-between mt-5 width-80">
                {PriceList.map((item, index) => (
                    <PriceCard key={index} ConversionType={item.conversionType} Trend={item.trend} TrendPercent={item.trendPercent} Amount={item.amount} />
                ))}
            </div>
            <div className="advert-section flex flex-column width-100 mt-5">
                <div className="flex justify-between mt-2">
                    <div className="flex buy-sell cursor-pointer crypto">
                        <div className={`${pageView === "buy" ? "black " : ""} mr-2`} onClick={()=> setPageView("buy") }>Buy </div> |
                        <div className={`${pageView === "sell" ? "black " : ""} ml-2`} onClick={()=> setPageView("sell") }>Sell </div>
                    </div>
                    
                </div>
                <div className="coins flex mt-4 cursor-pointer">
                    <div className={`mr-5 ${filterType === "btc" ? "active" : ""}`} onClick={()=> setFilterType("btc")}>BTC</div>
                    <div className={`mr-5 ${filterType === "eth" ? "active" : ""}`} onClick={()=> setFilterType("eth")}>ETH</div>
                    <div className={`mr-5 ${filterType === "usdt" ? "active" : ""}`} onClick={()=> setFilterType("usdt")}>USDT</div>
                    <div className={`mr-5 ${filterType === "usdc" ? "active" : ""}`} onClick={()=> setFilterType("usdc")}>USDC</div>
                </div>
                <LeaderBoardView>
                    <div className="header flex align-center">
                        <div className="width-2">Advertiser</div>
                        <div className="width-1">Price</div>
                        <div className="width-1">Available</div>
                        <div className="width-1">Limit</div>
                        <div className="width-1">Payment</div>
                        <div className="width-1">Trade</div>
                    </div>
                    {adverts.map((item, index) => (
                        <LeaderBoard  key={index} Username={item.username} Orders={item.orders} CompletionRate={item.completionRate} Price={item.price} AvailableAmount={item.availableAmount} Limit={item.limit} PaymentType={item.paymentType} TradeType={item.tradeType}/>
                    ))}
                </LeaderBoardView>
            </div>
        </HomePageView>
    )
}

export default HomePage;

const HomePageView = styled.div`
    max-width: 100%;
    .action-card {
        min-width: 20%;
        max-width: 20%;
        min-height: 143px;
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.1);
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(5px);
        border-radius: 10px;
        padding: 16px 28px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        .action-card-heading {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            color: #000000;
        }
        .sub-heading {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
        }
        :hover {
            transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
            box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.2);
            background: #FFFFFF;
        }

    }
    .price-card {
        min-width: 108px;
        min-height: 60px;
        .heading  {
            font-style: normal;
            font-weight: 700;
            font-size: 13px;
            line-height: 16px;
            color: #000000;
        }
        .negative {
            color: #E95455 !important;
        }
        .positive {
            color: #22C36B !important;
        }
        .amount {
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
        }
    }
    .width-80 {
        max-width: 80%;
        margin: auto;
    }
    .advert-section {
        width: 100%;
        min-height: 463px;
        background: #ffffff;
        border-radius: 10px;
        padding: 9px 28px;
         
        .buy-sell {
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 25px;
            color: #8B8CA7;
        }
        .black {
            color: #000000;
        }
    }
    .coins {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
    .active {
        border-bottom: 1px solid #FB5E04;
    }
`;
export const LeaderBoardView = styled.div`
    margin-top: 10px;
    .header {
        min-height: 40px;
        min-width: 100%;
        border-top: 1px solid #E2E8F0;
        border-bottom: 1px solid #E2E8F0;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #8E9BAE;
    }
    .width-1 {
        width: 14%;
    }
    .width-2 {
        width: 28%;
    }
    .leaderboard-body {
        min-height: 69px;
        border-bottom: 1px solid #E2E8F0;
    }
    .icon {
        height: 32px;
        width: 32px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;    
        background: #FB5E04;
        border-radius: 100%;
    }
    .user-name {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #FB5E04;
    }
    .user-quality {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #8E9BAE;
    }
    .leaderboard-text {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
    .subscript {
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 10px;
        color: #000000;
    }
    .payment-type {
        width: 81px;
        height: 15px;
        background: #FFF7F2;;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        color: #FB5E04;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .trade-type {
        width: 86px;
        height: 27px;
        background: #22C36B;
        border-radius: 4px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;