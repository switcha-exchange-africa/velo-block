import React from 'react';
import styled from 'styled-components';
import { AddWalletView } from '../AddWallet/AddWallet';
import Button from '../../ReusableComponents/Button/Button';
import {ReactComponent as BackArrowIcon} from  "../../../assets/Icons/BackArrowIcon.svg";
import {ReactComponent as BtcIcon} from  "../../../assets/Icons/BtcIcon.svg";
import {ReactComponent as NairaFlag} from "../../../assets/Icons/NairaFlag.svg";
import {ReactComponent as LockIcon} from "../../../assets/Icons/lockIcon.svg";

function PreviewOrder() {
  return (
    <PreviewOrderView>
        <div className="width-100 justify-between flex">
            <BackArrowIcon/>
            <div className="normal-text bold align-center flex">Order Preview</div>
            <div className="flex align-center justify-center hide">
                -------
            </div>
        </div>
        <div className="sm-text flex justify-center align-center mt-5">Balance</div>
        <div className="heading flex justify-center align-center text-center mt-2 mb-5">
            NGN 245,789
        </div>
        <div className="order-info ">
            <div className="amount-info flex align-center">
                <div className="order-logo flex justify-center align-center"><BtcIcon/></div>
                <div className="ml-3 flex-column justify-between align-center width-100">
                    <div className="flex justify-between align-center ">
                        <div className="bold-text">Bitcoin</div>
                        <div className="bold-text">NGN 567.09</div>
                    </div>
                    <div className="flex justify-between align-center">
                        <div className="sm-text">BTC</div>
                        <div className="sm-text">1.3453232 BTC</div>
                    </div>
                </div>
            </div>
            <div className="amount-info flex align-center">
                <div className="flex justify-between align-center width-100">
                    <div className="sm-text md-text">Payment method</div>
                    <div className="sm-bold-text flex align-center">Naira Wallet <span className="ml-3"><NairaFlag/></span> </div>
                </div>
            </div>
            <div className="amount-info flex flex-column align-center justify-center">
                <div className="flex justify-between align-center width-100">
                    <div className="sm-text md-text">Purchase Price</div>
                    <div className="sm-bold-text flex align-center">NGN 168.00 </div>
                </div>
                <div className="flex justify-between align-center width-100 mt-2">
                    <div className="sm-text md-text">Fee (%0.5)</div>
                    <div className="sm-bold-text flex align-center">NGN 30.46</div>
                </div>
            </div>
            <div className="flex justify-between align-center width-100 mt-2">
                <div className="sm-text md-text">Total</div>
                <div className="bold-text flex align-center">NGN 168.00 </div>
            </div>
        </div>
        <div className="flex justify-center align-center orange sm-text mt-3"> View More Details</div>
        <div className="flex p-3 mt-3">
            <div className="lock"> <LockIcon/> </div>
            <div className="sm-text md-text ml-3 text-left">Processed by Switcha every purchases secured by the <span className="orange">Privacy Policy</span></div>
        </div>
        <div className="mt-3 ">
            <Button text={"Confirm Order"} className={"mt-4 "}/>
        </div>
    </PreviewOrderView>
  )
}

export default PreviewOrder

const PreviewOrderView=styled(AddWalletView)`
    background: #F8FAFC;
    .hide{
        opacity: 0.1%;
    }
    .lock{
        >svg{
            height: 18px;
            width: 18px
        }
    }
    .order-info{
        min-height: 338.5px;
        background: #FFFFFF;
        box-shadow: 0px 27px 20px rgba(0, 0, 0, 0.02);
        border-radius: 16px;
        padding: 20px;
    }
    .amount-info{
        border-bottom: 1px solid #F1F5F9;
        min-height: 98px
    }
    .order-logo{
        width: 50px;
        height: 50px;
        background: #F8FAFC;
        border-radius: 12px;
        >svg{
            height: 24px;
            width: 24px
        }
    }
    .bold-text{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        text-align: center;
        color: #10192D;
    }
    .sm-bold-text{
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #10192D;
    }
    .md-text{
        font-size: 14px !important;
    }
    .text-left{
        text-align: left !important;
    }
`