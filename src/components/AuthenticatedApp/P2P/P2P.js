import React, {useLayoutEffect, useState} from "react";
import styled from "styled-components";
import { LeaderBoardView } from "../HomePage/HomePage";
import SearchField from "../../ReusableComponents/SearchField/SearchField";

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
            tradeType: 1,
            amount: 400
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1,
            amount: 300
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1,
            amount: 800
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1,
            amount: 800
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1,
            amount: 900
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 1,
            amount: 200
        },
        {
            username: "Maximus",
            orders: "1234",
            completionRate: "98",
            price: "1,235",
            availableAmount: "2,902",
            limit: "200 - 400",
            paymentType: "Bank Transfer",
            tradeType: 2,
            amount: 400
        },
    ]

    const [inputValues, setInputValues] = useState({
        amount: "",
        initialList: adverts,
        list: "",
    })
    const filterByAmount = (e) => {
        const {value} = e.target
        if(value > 0){
            const filteredList = inputValues.initialList.filter(
                (item) => item.amount < value
            );
            setInputValues({
                ...inputValues,
                list: filteredList,
                amount: value
            })
        }else if(value === 0 || value === ""){
            setInputValues({
                ...inputValues,
                list: inputValues.initialList,
                amount: value
            })
        }

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

    useLayoutEffect(()=>{
        setInputValues({
            ...inputValues,
            list: adverts
        })
    },[])
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
                <div className="mt-3 flex search-field">
                    <SearchField
                        className= "formInput mt-2"
                        placeholder="Enter amount NGN"
                        type="number"
                        onChange={filterByAmount}
                        value = {inputValues.amount}
                        min={2}
                        bodyClass={"align-start "}
                        name={"name"}
                    />
                    <button className="search-btn mt-2">
                        Search
                    </button>
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
                    {inputValues.list && inputValues.list.map((item, index) => (
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
    .search-btn {
        width: 85px;
        height: 39px;
        background: #FFFFFF;
        border: 0.88px solid #8E9BAE;
        box-sizing: border-box;
        border-radius: 0px 5px 5px 0px;
        display: flex;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #FB5E04;
        justify-content: center;
        align-items: center;
    }
    .search-field {
        .formInput {
            width: 175px;
            border-radius: 5px 0px 0px 5px;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #8E9BAE;
        }
        .form-section {
            width: 175px;
        }
    }
`
