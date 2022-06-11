import React, {useState, useEffect} from "react";
import styled from "styled-components";
import QRCode from "qrcode";
import { useDispatch, useSelector } from "react-redux";
import { showWithdrawModal  } from "../../redux/swap/actions";
import InputField from "../ReusableComponents/InputField/InputField";
import {ReactComponent as USDTLogoIcon} from "../../assets/Icons/USDTLogoIcon.svg";
import {ReactComponent as SwapIcon} from "../../assets/Icons/SwapIconPg.svg";
import {ReactComponent as BTC} from "../../assets/Icons/BTC.svg";
import {ReactComponent as DownArrowIcon} from "../../assets/Icons/DownArrowIcon.svg";
import {ReactComponent as EthIconDropdown} from "../../assets/Icons/EthIconDropdown.svg";
import {ReactComponent as USDCIcon} from "../../assets/Icons/USDCIcon.svg"

function WithdrawModal() {
    const dispatch = useDispatch();
    const { depositItem } = useSelector(state => state.swapState);
    const [inputValues, setInputValues] = useState({
        amount: 0,
        address: ""
    });
    const [showDropdown, setShowDropDown] = useState(false);
    const [coin, setCoin] = useState(depositItem.coin);
    const [page, setPage] = useState(1);

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
                return "Bitcoin";
            default : 
                return "Naira";
        }
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        console.log(value, "value")
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }
    
    const withdrawCoin = (e) => {

    }

    const closeModal = () => {
        dispatch(showWithdrawModal(false))
    }

    return (
        <WithdrawModalView>
            {page === 1 && (
                <>
                    <div>
                        <p className="heading">Withdraw {getName(depositItem.coin)}</p>
                        <p className="sub-heading mt-2">Paste address or scan QR code to withdraw {getName(depositItem.coin)}</p>
                    </div> 
                    <div className="back" onClick={closeModal}> x </div>
                    <div className="relative mt-5">
                        <div className="input-box mt-2 p-2 flex align-center">
                            <div className="width-80 flex justify-between align-center p-1">
                                <div className="from-to width-100">
                                <InputField
                                    className= "formInput"
                                    placeholder="Enter An Amount"
                                    type="number"
                                    onChange={handleChange}
                                    value = {inputValues.amount }
                                    label= {""}
                                    bodyClass={"mr-2 align-start mt-3 mr-2"}
                                    name={"name"}
                                />
                                </div>
                            </div>
                            <div className="width-20 dropdown-check p-1 pl-2 flex justify-between cursor-pointer" onClick={ () => setShowDropDown(!showDropdown)}>
                                <div className="flex align-center dropdown-check-icon">{getIcon(coin)}</div>
                                <div className="logo-icon ml-2 flex align-center">{coin}</div>
                                <div className="ml-2 flex align-center" ><DownArrowIcon/></div>
                            </div>
                        </div>
                        {showDropdown && (
                            <div className="dropdown">
                                {wallets && (
                                    wallets.map((item, index) => (
                                        <div className="width-100 dropdown-item py-2 flex cursor-pointer" onClick={() => setCoin(item.coin)} key={index}>
                                            <div className="flex align-center icon">{getIcon(item.coin)}</div>
                                            <div className="dropdown-logo-icon ml-2 flex align-center">{item.coin}</div>
                                        </div>
                                    )
                                ))}
                            </div>
                        )}
                    </div>
                    <div className=" mt-2 flex align-center">
                        <div className="width-100 flex justify-between align-center mt-5">
                            <div className="from-to width-100 ">
                                <InputField
                                    className= "formInput input-box mt-3"
                                    placeholder="Enter Address"
                                    type="text"
                                    onChange={handleChange}
                                    value = {inputValues.address }
                                    label= {"To"}
                                    bodyClass={" mr-2 align-start mt-3 mr-2 "}
                                    name={"address"}
                                />
                            </div>
                        </div>
                    </div>

                    <button className="copy-btn tooltip" onClick={withdrawCoin}>
                        <span>Next</span>
                    </button>
                </>
            )}
            {page === 2  && (
                <>
                </>
            )}

        </WithdrawModalView>
    )
}

export default WithdrawModal;

const WithdrawModalView = styled.div`
    /* position: relative; */
    width: 100%;
    .heading {
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 40px;
        text-transform: capitalize;
        color: #10192D;
        margin: 0px;
    }
    .sub-heading {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #464255;
    }
    .qr-code {

    }
    .address-heading {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #8E9BAE;
        margin: 0px;
        text-align: center;
        
    }
    .address {
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
        margin: 0px;
        word-break: break-all;
        align-items: center;
    }
    .copy-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        width: 100%;
        height: 56px;
        border: none;
        background: #FB5E04;
        border-radius: 5px;
        margin-top: 140px;
        bottom: 0px;
        position: relative;
        >span{
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
            margin: 0px;
        }
    }
    .qr-code >img {
        height: 224px;
        width: 224px;
        margin: 50px 0px;
    }

    .tooltip {
        display: inline-block;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 140px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 150%;
        left: 50%;
        margin-left: -75px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
    .back {
        position: absolute;
        top: 10px;
        right: 17px;
        font-size: 30px;
        cursor: pointer;

    }
    .sub-heading {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
    .conversion-card {
        max-width: 626px;
        min-height: 407px;
        background: #FFFFFF;
        padding: 24px 48px;
        border-radius: 8px;
        @media (max-width: 900px) {
            padding: 0px;
        }
        
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
        max-width: 23%;
    }
    .width-80 {
        max-width: 77%;
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

