import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {ReactComponent as SwapIcon} from "../../../assets/Icons/SwapIconPg.svg";
import {ReactComponent as BTC} from "../../../assets/Icons/BTC.svg";
import {ReactComponent as EthIconDropdown} from "../../../assets/Icons/EthIconDropdown.svg";
import {ReactComponent as USDCIcon} from "../../../assets/Icons/USDCIcon.svg"
import {ReactComponent as USDTLogoIcon} from "../../../assets/Icons/USDTLogoIcon.svg";

function Wallet() {
    const {wallets} = useSelector(state => state.accountState.user)

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

    return (
        <WalletView>
            <div className="balance-bar width-100 ">
                <div className="width-50 a">
                    <p className="heading">Overall Balance</p>
                    <p className="amount"> 0.0000567 BTC = $500.67</p>
                </div>
                <div className="align-center flex">
                    <button className="deposit-btn m-1">
                        <p>Deposit</p>
                    </button>
                    <button className="wallet-btn m-1">
                        <p>Withdraw</p>
                    </button>
                    <button className="wallet-btn m-1">
                        <p>Transfer</p>
                    </button>
                    <button className="wallet-btn m-1">
                        <p>History</p>
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <div className="asset-section">
                    <div className="asset-list-heading width-100">
                        <div className="asset-column">
                            Assets
                        </div>
                        <div className="asset-column">
                            Balance
                        </div>
                        <div className="asset-column-double ">
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
                                <div className="flex align-center justify-between asset-column-double ">
                                    <h1 className="action">Trade</h1>
                                    <h1 className="action">Deposit</h1>
                                    <h1 className="action">Withdraw</h1>
                                </div>
                            </div>
                        )
                    ))}

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
    .coin-title {
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 22px;
        color: #10192D;
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
        line-height: 22px;
        color: #FB5E04;
    }


`;