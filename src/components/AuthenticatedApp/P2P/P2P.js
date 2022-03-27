import React, {useState} from "react";
import styled from "styled-components";
import { LeaderBoardView } from "../HomePage/HomePage";

function P2P() {
    const [pageView, setPageView] = useState("buy");
    const [filterType, setFilterType] = useState("btc");

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
        <P2PView>
             <div className="advert-section flex flex-column width-100">
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
        </P2PView>
    )
}

export default P2P;

const P2PView = styled.div`
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
`
