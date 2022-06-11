import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {ReactComponent as SwapIcon} from "../../../assets/Icons/SwapIconPg.svg";
import {ReactComponent as BTC} from "../../../assets/Icons/BTC.svg";
import {ReactComponent as EthIconDropdown} from "../../../assets/Icons/EthIconDropdown.svg";
import {ReactComponent as USDCIcon} from "../../../assets/Icons/USDCIcon.svg"
import {ReactComponent as USDTLogoIcon} from "../../../assets/Icons/USDTLogoIcon.svg";
import { setDepositCoin, showDepositModal, showWithdrawModal } from "../../../redux/swap/actions";

function Wallet() {
    const dispatch = useDispatch()
    const {wallets, transactions} = useSelector(state => state.accountState.user)

    const getIcon = (text) => { 
        switch(text){
            case "USDT":
                return <USDTLogoIcon/>;
            case "USDC":
                return <USDCIcon/>;
            case "ETH":
                return <EthIconDropdown/>;
            case "BTC":
                return <BTC/> ;
            default : 
                return <USDCIcon/>
        }
    }

    const getName = (text) => {
        switch(text){
            case "USDT":
                return "USD Token";
            case "USDC":
                return "USD Coin";
            case "ETH":
                return "Ethereum";
            case "BTC":
                return "Bitcoin" ;
            default : 
                return "Naira"
        }
    }

    const setDepositItem = async (item, type) => {
        await dispatch(setDepositCoin(item))
        if(type === "deposit") {
            dispatch(showDepositModal(true))
        }else{
            dispatch(showWithdrawModal(true))
        }
    }

    return (
        <WalletView>
            <div className="balance-bar width-100 ">
                <div className="width-50 a">
                    <p className="heading">Overall Balance</p>
                    <p className="amount"> 0.0000567 BTC = $500.67</p>
                </div>
                <div className="align-center desktop-flex">
                    <div className="flex">
                        <button className="deposit-btn m-1 cursor-pointer">
                            <p>Deposit</p>
                        </button>
                        <button className="wallet-btn m-1 cursor-pointer">
                            <p>Withdraw</p>
                        </button>
                    </div>
                    <div className="flex">
                        <button className="wallet-btn m-1 cursor-pointer">
                            <p>Transfer</p>
                        </button>
                        <button className="wallet-btn m-1 cursor-pointer">
                            <p>History</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-5 desktop-flex">
                <div className="asset-section">
                    <div className="asset-list-heading width-100">
                        <div className="asset-column">
                            Assets
                        </div>
                        <div className="asset-column">
                            Balance
                        </div>
                        <div className="asset-column-double align-end">
                            Actions
                        </div>
                    </div>
                    {wallets && (
                        wallets.map((item, index) => (
                            <div className="asset-list-item flex justify-between">
                                <div className="asset-column flex align-center">
                                    <div className="icon mr-3">
                                        {getIcon(item.coin)}
                                    </div>
                                    <div className="flex-column">
                                        <div className="coin-title mb-1">{item.coin}</div>
                                        <div className="coin-name">{getName(item.coin)}</div>
                                    </div>
                                </div>
                                <div className="asset-column flex align-center">
                                    <div className="flex-column">
                                        <div className="coin-title mb-1">{item.balance}</div>
                                        {/* <div className="coin-name">= $137.34</div> */}
                                    </div>
                                </div>
                                <div className="desktop-flex align-end justify-between asset-column-double ">
                                    <h1 className="action" >Trade</h1>
                                    <h1 className="action" onClick={() => setDepositItem(item, "deposit")}> Deposit</h1>
                                    <h1 className="action" onClick={() => setDepositItem(item, "withdraw")}>Withdraw</h1>
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <div className="history-section">
                    <div className="history-heading align-center flex">
                       <span> Recent Activity </span>
                    </div>
                    <div className="history-list">
                        {transactions.length > 0 ?(
                            transactions.map((item, index) => (
                                <div className="item flex justify-between mb-4" key={index}>
                                    <div className="asset-column flex align-center">
                                        <div className="small-icon mr-3">
                                            {getIcon(item.coin)}
                                        </div>
                                        <div className="flex-column">
                                            <p className="coin-history-title mb-1">{item.rate?.pair}</p>
                                            <p className="coin-history-name">{item.customTransactionType}</p>
                                        </div>
                                    </div>
                                    <div className="flex-column">
                                        <p className={`history-item-amount ${item.customTransactionType === "sell" ? "red" : ""}`}> {item.currency} {item.amount}</p>
                                        {/* <p className="coin-history-name">Today, 15:00pm</p> */}
                                    </div>
                                </div>
                            )
                        )):(
                            <div className="flex justify-center align-center  mt-5">
                                <p className="coin-history-name"> Sorry, you haven't done any transactions yet. </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </WalletView>
    )
}

export default Wallet;

const WalletView = styled.div`
    .balance-bar {
        display: flex;
        align-items: center;
        padding: 22px 58px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
    }
    .heading {
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 36px;
        color: #000000;
    }
    .amount {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 36px;
        color: #FB5E04;
    }
    .deposit-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 19px 23px;
        width: 125px;
        height: 48px;
        background: #FB5E04;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        >p {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            color: #FFFFFF;
        }
    }
    .wallet-btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 19px 23px;
        width: 125px;
        height: 48px;
        background: #8E9BAE;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        >p {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            color: #FFFFFF;
        }
    }
    .asset-section {
        width: 70%;
        margin-right: 31px;
    }
    .asset-list-heading {
        background: #E2E8F0;
        border: 1px solid #E2E8F0;
        border-radius: 10px 10px 0px 0px;
        height: 43px;
        padding: 11px 42px;
        display: flex;
        justify-content: space-between;
    }
    .asset-list-item {
        background: #ffffff;
        border-bottom: 1px solid #E2E8F0;
        padding: 21px 42px;
    }
    .asset-column {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #64748B;
        width: 30%;
    }
    .asset-column-double {
        width: 40%
    }
    .icon {
        >svg{
            height: 40px;
            width: 40px;
        }
    }
    .small-icon {
        >svg {
            height: 32px;
            width: 32px;
        }
    }
    .coin-title {
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 22px;
        color: #10192D;
    }
    .coin-history-title {
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 20px;
        color: #10192D;
        margin: 0px;
    }
    .coin-history-name {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #64748B;
        margin: 0px;
    }
    .coin-name {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #64748B;
    }
    .action {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #FB5E04;
        cursor: pointer;
    }
    .history-section {
        min-height: 366px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 9px;
        min-width: 376px;
    }
    .history-heading {
        padding-left:20px;
        border-bottom: 1px solid #EAEAEA;
        height: 66px;
        >span{
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            color: #10192D;
            margin: 0px;
        }
    }
    .history-list {
        padding: 21px 25px;
    }
    .history-item-amount {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        text-align: right;
        margin: 0px;
        color: #6FD97A;
    }
    .desktop-flex{
        display: flex;
    }
    .red {
        color: #F65556 !important;
    }
    @media (max-width: 1300px) {
        .desktop-flex{
            display: flex;
            flex-direction: column
        }
    }
    @media (max-width: 1000px) {
        .desktop-flex{
            display: flex;
            flex-direction: column
        }
        .asset-section {
            width: 100%;
            margin-right: 31px;
        }
        .history-section {
            margin-top: 20px;
        }
        .balance-bar {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .width-50 {
            width: 100%;
        }
        .align-end {
            display: flex;
            align-items: flex-end !important;
        }
        .asset-column-double {
            justify-content: end;
        }
        .balance-bar {
            padding: 10px;
        }
        .asset-list-item{
            padding: 0px;
        }
        .asset-list-heading {
            padding: 11px 3px;
        }
        .coin-title {
            font-size: 15px;
        }
        .action {
            font-size: 15px;
        }
        .icon >svg {
            height: 30px;
            width: 30px;
            margin: 5px 0px;
        }
    }

`;