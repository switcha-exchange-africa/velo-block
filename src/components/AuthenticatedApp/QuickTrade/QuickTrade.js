import React, { useState, useEffect } from "react";
import styled from "styled-components";
import InputField from "../../ReusableComponents/InputField/InputField";
import { ReactComponent as USDTLogoIcon } from "../../../assets/Icons/USDTLogoIcon.svg";
//import {ReactComponent as SwapIcon} from "../../../assets/Icons/SwapIconPg.svg";
import { ReactComponent as BTC } from "../../../assets/Icons/BTC.svg";
import { ReactComponent as DownArrowIcon } from "../../../assets/Icons/DownArrowIcon.svg";
import { ReactComponent as EthIconDropdown } from "../../../assets/Icons/EthIconDropdown.svg";
import { ReactComponent as USDCIcon } from "../../../assets/Icons/USDCIcon.svg";
import ConfirmQuickTrade from "./ConfirmQuickTrade";
import NotifySeller from "./NotifySeller";

export default function QuickTrade() {
  const [view, setView] = useState(1);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [inputValues, setInputValues] = useState({
    amount: 0,
    fromCoin: "USDT",
    toCoin: "ETH",
    convertAmount: 0,
    convertPrice: 0,
  });
  const [fee, setFee] = useState(0)

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: parseInt(value),
      convertAmount: parseInt(value) * inputValues.convertPrice
    });
  };

  const goToConfirm = (e) => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      setPage(e)
    }, 1500)

  }
  const getIcon = (text) => {
    switch (text) {
      case "USDT":
        return <USDTLogoIcon />;
      case "USDC":
        return <USDCIcon />;
      case "ETH":
        return <EthIconDropdown />;
      case "BTC":
        return <BTC />;
      default:
        return <USDCIcon />;
    }
  };
  const setFromCoin = (e) => {
    setInputValues({
      ...inputValues,
      fromCoin: e,
    });
    setShowFromDropdown(false);
  };
  const setToCoin = (e) => {
    setInputValues({
        ...inputValues,
        toCoin: e
    })
    setShowToDropdown(false)
  }


  useEffect(()=>{
    const{fromCoin, toCoin} = inputValues
    if(fromCoin === "USDT" && toCoin === "USDC"){
      setInputValues({
        ...inputValues,
        convertPrice: 100
      })
    }
    if(fromCoin === "USDT" && toCoin === "ETH"){
      setInputValues({
        ...inputValues,
        convertPrice: 200
      })
    }
    if(fromCoin === "USDT" && toCoin === "BTC"){
      setInputValues({
        ...inputValues,
        convertPrice: 300
      })
    }
    if(fromCoin === "USDT" && toCoin === "USDT"){
      setInputValues({
        ...inputValues,
        convertPrice: 100
      })
    }
    if(fromCoin === "USDC" && toCoin === "ETH"){
      setInputValues({
        ...inputValues,
        convertPrice: 200
      })
    }
    if(fromCoin === "USDC" && toCoin === "BTC"){
      setInputValues({
        ...inputValues,
        convertPrice: 300
      })
    }
    if(fromCoin === "ETH" && toCoin === "USDT"){
      setInputValues({
        ...inputValues,
        convertPrice: 100
      })
    }
    if(fromCoin === "ETH" && toCoin === "USDC"){
      setInputValues({
        ...inputValues,
        convertPrice: 200
      })
    }
    if(fromCoin === "ETH" && toCoin === "BTC"){
      setInputValues({
        ...inputValues,
        convertPrice: 300
      })
    }
    if(fromCoin === "BTC" && toCoin === "USDT"){
      setInputValues({
        ...inputValues,
        convertPrice: 100
      })
    }
    if(fromCoin === "BTC" && toCoin === "USDC"){
      setInputValues({
        ...inputValues,
        convertPrice: 200
      })
    }
    if(fromCoin === "BTC" && toCoin === "ETH"){
      setInputValues({
        ...inputValues,
        convertPrice: 300
      })
    }

  },[inputValues.fromCoin, inputValues.toCoin])

  return (
        <>
            {page === 1 && (
                <QuickTradeView>
                    <div className="flex">
                        <BuySellButton onClick={()=> setView(1)} active={view === 1}>
                        <h4> Buy </h4>
                        </BuySellButton>
                        <BuySellButton onClick={()=> setView(2)} active={view === 2}>
                        <h4> Sell </h4>
                        </BuySellButton>
                    </div>
                    <div className="p-3">
                        <div className="mt-3 conversion-card">
                            <div className="flex justify-between from-to">
                                <div className="">I want to pay</div>
                            </div>
                            <div className="relative">
                                <div className="input-box mt-2 p-2 flex align-center">
                                    <div className="flex justify-between align-center p-2">
                                        <div className="from-to width-100">
                                            <InputField
                                                className= "formInput"
                                                placeholder="Enter An Amount"
                                                type="number"
                                                onChange={handleInput}
                                                value = {inputValues.amount}
                                                min={2}
                                                label= {""}
                                                bodyClass={"mr-2 align-start mt-3 mr-2 "}
                                                name={"amount"}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-1 pl-2 flex justify-between">
                                        <div className="flex dropdown-check-icon align-center">
                                            {getIcon(inputValues.fromCoin)}
                                        </div>
                                        <div className="logo-icon ml-2 flex align-center">{inputValues.fromCoin}</div>
                                        <div className="ml-2 flex align-center cursor-pointer" onClick={ () => setShowFromDropdown(!showFromDropdown)}><DownArrowIcon/></div>
                                    </div>
                                </div>
                                {showFromDropdown && (
                                    <div className="dropdown">
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setFromCoin("USDT")}>
                                            <div className="flex align-center icon"><USDTLogoIcon/> </div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">USDT</div>
                                        </div>
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setFromCoin("BTC")}>
                                            <div className="flex align-center icon"><BTC/> </div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">BTC</div>
                                        </div>
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setFromCoin("ETH")}>
                                            <div className="flex align-center icon"><EthIconDropdown/> </div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">ETH</div>
                                        </div>
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setFromCoin("USDC")}>
                                            <div className="flex align-center icon"><USDCIcon/> </div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">USDC</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-3 conversion-card">
                            <div className="flex justify-between from-to">
                                <div className="">I will receive</div>
                            </div>
                            <div className="relative">
                                <div className="input-box mt-2 p-2 flex align-center">
                                    <div className="flex justify-between align-center p-2">
                                        <div className="from-to width-100">
                                            <InputField
                                                className= "formInput"
                                                placeholder="0"
                                                type="number"
                                                //onChange={handleInput}
                                                value = {inputValues.convertAmount}
                                                // min={2}
                                                label= {""}
                                                bodyClass={"mr-2 align-start mt-3 mr-2 "}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="p-1 pl-2 flex justify-between">
                                        <div className="flex dropdown-check-icon align-center">
                                            {getIcon(inputValues.toCoin)}
                                        </div>
                                        <div className="logo-icon ml-2 flex align-center">{inputValues.toCoin}</div>
                                        <div className="ml-2 flex align-center cursor-pointer" onClick={ () => setShowToDropdown(!showToDropdown)}><DownArrowIcon/></div>
                                    </div>
                                </div>
                                {showToDropdown && (
                                    <div className="dropdown">
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setToCoin("USDT")}>
                                            <div className="flex align-center icon"><USDTLogoIcon/> </div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">USDT</div>
                                        </div>
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setToCoin("BTC")}>
                                            <div className="flex align-center icon"><BTC/> </div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">BTC</div>
                                        </div>
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setToCoin("ETH")}>
                                            <div className="flex align-center icon"><EthIconDropdown/> </div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">ETH</div>
                                        </div>
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setToCoin("USDC")}>
                                            <div className="flex align-center icon"><USDCIcon/> </div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">USDC</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-3 rate">
                            <p>Rate per dollar {inputValues.convertPrice}</p>
                        </div>
                        <button className ={`mt-3 flex justify-center align-center buy ${loading? "form-loading ": inputValues.amount > 0 ? "cursor-pointer ": "disabled "}`} onClick={() => goToConfirm(2)}> 
                            <span>Buy with {fee} fee</span>
                        </button>
                    </div>
                </QuickTradeView>
            )}
            {page === 2 && (
                <ConfirmQuickTrade
                  goToConfirm={()=> goToConfirm(3)}
                  loading={loading}
                />
            )}
            {page === 3 && (
                <NotifySeller/>
            )}
            
        </>
    );
}

//export default QuickTrade;

const QuickTradeView = styled.div`
  width: 451px;
  min-height: 435px;
  background: #ffffff;
  margin: auto;
  margin-top: 100px;
  .conversion-card {
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
  }
  .from-to {
    font-style: normal;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #8B8CA7;
  }
  .input-box {
    width: 100%;
    height: 56px;
    left: 0px;
    top: 32px;
    border: 1px solid #3b3c4e;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .width-20 {
    width: 23%;
  }
  .width-80 {
    width: 77%;
  }
  .icon {
    > svg {
      height: 20px;
      width: 20px;
    }
  }
  .dropdown-check {
    border-left: 1px solid #8e9bae;
  }
  .dropdown-check-icon {
    > svg {
      width: 28px;
      height: 28px;
    }
  }
  .dropdown-item {
    width: 23%;
    border-bottom: 0.5px solid #8e9bae;
  }
  .orange-text {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #fb5e04;
  }
  .logo-icon {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #090a0b;
  }
  .dropdown-logo-icon {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #090a0b;
  }
  .conversion-info {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #8b8ca7;
    text-align: left;
  }
  .dropdown {
    z-index: 300;
    min-width: 24%;
    min-height: 100px;
    position: absolute;
    margin-top: 2px;
    right: 0px;
    border-radius: 10px;
    white-space: nowrap;
    background: #fff;
    border: 1px solid rgba(219, 220, 224, 1);
    box-shadow: 15px 30px 40px rgb(64 25 109 / 7%);
    padding: 0px 10px 10px 10px;
  }
  .bck-btn {
    width: 48%;
    height: 56px;
    background: #e2e8f0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #64748b;
  }
  .swap-btn {
    width: 48%;
    height: 56px;
    background: #fb5e04;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  .label {
    margin-top: 0px !important;
  }
  .formInput {
    font-size: 18px;
    padding:15px 30px 15px 10px;
  }
  .form-section {
    border: none !important;
    margin-top: 0px !important;
    max-height: 50px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 24px !important;
    color: #8b8ca7 !important;
    input:focus {
      outline: none !important;
      border: 1px solid #ffffff !important;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      background: #ffffff !important;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input [type="number"] {
      -moz-appearance: textfield;
    }

    input {
      ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #8e9bae;
        opacity: 1; /* Firefox */
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #8e9bae;
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #8e9bae;
      }

      :-webkit-autofill {
        -webkit-text-fill-background: #ffffff !important;
      }
    }
  }
  .relative {
    position: relative;
  }
  .rate {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #8B8CA7;
  }
  .buy {
    width: 100%;
    height: 56px;
    background: #22C36B;
    border-radius: 5px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
  .disabled {
    opacity: 0.7;
    pointer-events: none;
  }
`;

const BuySellButton = styled.div`
  width: 50%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  color: #000000;
  background: ${(props) => (props.active ? "#ffffff" : "#F1F5F9")};
`;
