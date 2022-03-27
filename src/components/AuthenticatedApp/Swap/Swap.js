import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {ReactComponent as USDTLogoIcon} from "../../../assets/Icons/USDTLogoIcon.svg";
import {ReactComponent as SwapIcon} from "../../../assets/Icons/SwapIconPg.svg";
import {ReactComponent as BTC} from "../../../assets/Icons/BTC.svg";
import {ReactComponent as DownArrowIcon} from "../../../assets/Icons/DownArrowIcon.svg";
import {ReactComponent as EthIconDropdown} from "../../../assets/Icons/EthIconDropdown.svg";
import {ReactComponent as USDCIcon} from "../../../assets/Icons/USDCIcon.svg"
import InputField from "../../ReusableComponents/InputField/InputField";
import { showSwapSuccessModal } from "../../../redux/swap/actions";



function Swap() {
    const dispatch = useDispatch()
    const swapRate = 0.0000234
    // const [swapRate, setSwapRate] = useState(0.0000234);
    const [showFromDropdown,setShowFromDropdown] = useState(true);
    const [showToDropdown, setShowToDropDown] = useState(false);
    const [swapLoading, setSwapLoading] = useState(false)
    const [inputValues, setInputValues] = useState({
        amount: 0,
        fromCoin: "USDT",
        toCoin: "ETH",
    })


    const handleInput = (e)=> {
        const {name,value} = e.target
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

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

    const swapCoin = () => {
        setSwapLoading(true)
        const{amount, fromCoin, toCoin} = inputValues
        const fromAmount = `${amount} ${" "} ${fromCoin}`
        const toAmount = `${swapRate* amount} ${" "}  ${toCoin}`
        const showModal =  true

        const payload ={
            fromAmount,
            toAmount,
            showModal
        }
        setTimeout(()=>{
            setSwapLoading(false)
            dispatch(showSwapSuccessModal(payload))
        }, 4000)
        
    }

    const setFromCoin = (e) => {
        setInputValues({
            ...inputValues,
            fromCoin: e
        })
        setShowFromDropdown(false)
    }
    const setToCoin = (e) => {
        setInputValues({
            ...inputValues,
            toCoin: e
        })
        setShowToDropDown(false)
    }

    useEffect(()=>{
        
    },[])
  return (
      <SwapView>
        <div className="heading">
            Convert
        </div>
        <div className="sub-heading">Convert your crypto within seconds</div>
        <div className="mt-5 conversion-card">
            <div className="flex justify-between from-to">
                <div className="">From</div>
                <div className="">Available:-- USDT</div>
            </div>
            <div className="relative">
                <div className="input-box mt-2 p-2 flex align-center">
                    <div className="width-80 flex justify-between align-center p-2">
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
                        <div className="orange-text">
                            MAX
                        </div>
                    </div>
                    <div className="width-20 dropdown-check p-1 pl-2 flex justify-between">
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
            <div className="mt-4 flex justify-center align-center">
                <SwapIcon/>
            </div>
            <div className="flex justify-between from-to mt-3">
                <div className="">To</div>
            </div>


            <div className="relative">
                <div className="input-box mt-2 p-2 flex align-center">
                    <div className="width-80 flex justify-between align-center p-1">
                        <div className="from-to width-100">
                        <InputField
                            className= "formInput"
                            placeholder="Enter An Amount"
                            type="number"
                            // onChange={handleChange}
                            value = {inputValues.amount * swapRate }
                            label= {""}
                            bodyClass={"mr-2 align-start mt-3 mr-2 "}
                            name={"name"}
                            readOnly
                        />
                        </div>
                    </div>
                    <div className="width-20 dropdown-check p-1 pl-2 flex justify-between cursor-pointer">
                        <div className="flex align-center dropdown-check-icon">{getIcon(inputValues.toCoin)}</div>
                        <div className="logo-icon ml-2 flex align-center">{inputValues.toCoin}</div>
                        <div className="ml-2 flex align-center" onClick={ () => setShowToDropDown(!showToDropdown)}><DownArrowIcon/></div>
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
            <div className="flex justify-between mt-5">
                <div className="">Price</div>
                <div className="">1USDT = {swapRate}BTC</div>
            </div>
            <div className="flex justify-between mt-2">
                <div className="">Inverse Price</div>
                <div className="">1BTC = {1/swapRate} USDT</div>
            </div>
            <div className="flex justify-between mt-2">
                <div className="">You will receive</div>
                <div className="orange-text">{inputValues.amount * swapRate} BTC</div>
            </div>
            <div className="mt-5 flex justify-between">
                <div className="bck-btn">Back</div>
                <div className={`swap-btn cursor-pointer ${swapLoading && "form-loading"}`}onClick={swapCoin}><span>Swap</span></div>
            </div>
        </div>
      </SwapView>
  )
}

export default Swap;

const SwapView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .heading{
        font-style: normal;
        font-weight: 800;
        font-size: 59px;
        line-height: 59px;
        color: #000000;
    }
    .sub-heading {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
    .conversion-card {
        width: 626px;
        min-height: 407px;
        background: #FFFFFF;
        padding: 24px 48px;
        border-radius: 8px;
    }
    .from-to {
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
        border: 1px solid #3B3C4E;
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
        >svg {
            height: 20px;
            width: 20px;
        }
    }
    .dropdown-check {
        width: 23%;
        border-left: 1px solid #8E9BAE;
    }
    .dropdown-check-icon {
        >svg {
            width: 28px;
            height: 28px;
        }
    }
    .dropdown-item {
        width: 23%;
        border-bottom: 0.5px solid #8E9BAE;
    }
    .orange-text {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #FB5E04;
    }
    .logo-icon {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #090A0B;
    }
    .dropdown-logo-icon {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #090A0B;
    }
    .conversion-info {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #8B8CA7;
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
        border: 1px solid rgba(219,220,224,1);
        box-shadow: 15px 30px 40px rgb(64 25 109 / 7%);
        padding: 0px 10px 10px 10px;
    }
    .bck-btn {
        width: 48%;
        height: 56px;
        background: #E2E8F0;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #64748B;
    }
    .swap-btn {
        width: 48%;
        height: 56px;
        background: #FB5E04;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }
    .label {
        margin-top: 0px !important;
    }
    .formInput {
        font-size: 18px;
    }
    .form-section {
        border: none !important;
        margin-top: 0px !important;
        max-height: 50px !important;
        font-style: normal !important;
        font-weight: 700 !important;
        font-size: 16px !important;
        line-height: 24px !important;
        color: #8B8CA7 !important;
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
        input [type=number] {
            -moz-appearance: textfield;
        }
        
        input{

        
            ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: #8E9BAE;
                opacity: 1; /* Firefox */
            }

            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: #8E9BAE;
            }

            ::-ms-input-placeholder { /* Microsoft Edge */
                color: #8E9BAE;
            }

            :-webkit-autofill{
                -webkit-text-fill-background: #ffffff !important;
            }
        }
    }
    .relative {
        position: relative
    }
`;