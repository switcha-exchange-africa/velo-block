import React from 'react';
import styled from 'styled-components';
import { LoginPageView } from '../../GettingStarted/Login/loginPage';
import {ReactComponent as HelpIcon} from "../../../assets/Icons/HelpIcon.svg";
import {ReactComponent as BackArrowIcon} from  "../../../assets/Icons/BackArrowIcon.svg";
import {ReactComponent as NairaFlag} from "../../../assets/Icons/NairaFlag.svg";
import {ReactComponent as BtcIcon} from  "../../../assets/Icons/BtcIcon.svg";
import {ReactComponent as EthIcon} from "../../../assets/Icons/EthIcon.svg";
import {ReactComponent as LtcIcon} from "../../../assets/Icons/LtcIcon.svg";
import Button from '../../ReusableComponents/Button/Button';


function AddWallet() {
    const paymentMethod = [
        {
            name: "Naira Wallet",
            logo: <NairaFlag/>
        },
        {
            name: "BTC",
            logo: <BtcIcon/>
        },
        {
            name: "ETH",
            logo: <EthIcon/>
        },
        {
            name: "LTC",
            logo: <LtcIcon/>
        },
    ]
  return (
    <AddWalletView>
        <div className="width-100 justify-between flex">
            <BackArrowIcon/>
            <div className="normal-text bold align-center flex">Buy</div>
            <div className="flex align-center justif-center">
            <HelpIcon/>
            </div>
        </div>
        <div className="heading flex justify-center align-center text-center mt-4 mb-5">
            Select your method of payment
        </div>
        {paymentMethod &&
            paymentMethod.map((item, index)=>(
                <div key={index}className="mt-2 flex justify-between align-center mb-2 wallet-type">
                    {item.logo}
                    <div className="">
                        <div className="bold-text">{item.name}</div>
                        <div className="sm-text">Available: NGN 200,000</div>
                    </div>
                    <div className="top-up flex align-center justify-center">Top up</div>
                </div>
            )
        )}
        <div className="mt-5 bottom">
            <Button text={"Continue"} className={"mt-5 "}/>
        </div>
        
    </AddWalletView>
  )
}

export default AddWallet;

export const AddWalletView = styled(LoginPageView)`
    padding: 24px;
    .bold{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 150%;
        color: #10192D;
    }
    .bold-text{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        color: #10192D;
    }
    .sm-text{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        text-align: right;
        color: #64748B;
    }
    .top-up{
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        color: #FB5E04;
        width: 55px;
        height: 24px;
        background: #FFF7F2;
        border-radius: 3px;
    }
    .wallet-type{
        min-height: 70px;
    }
    .bottom{
        position: relative;
    }
`;