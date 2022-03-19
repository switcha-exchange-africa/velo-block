import React from 'react';
import styled from 'styled-components';
import { AddWalletView } from '../AddWallet/AddWallet';
import InputField from '../../ReusableComponents/InputField/InputField';
import Button from '../../ReusableComponents/Button/Button';
import {ReactComponent as BackArrowIcon} from  "../../../assets/Icons/BackArrowIcon.svg";
import {ReactComponent as HelpIcon} from "../../../assets/Icons/HelpIcon.svg";
import {ReactComponent as NairaFlag} from "../../../assets/Icons/NairaFlag.svg";
import {ReactComponent as BtcIcon} from  "../../../assets/Icons/BtcIcon.svg";
import {ReactComponent as EthIcon} from "../../../assets/Icons/EthIcon.svg";
import {ReactComponent as LtcIcon} from "../../../assets/Icons/LtcIcon.svg";


function BuyCoin() {
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
    <BuyCoinView>
        <div className="width-100 justify-between flex">
            <BackArrowIcon/>
            <div className="normal-text bold align-center flex">Buy</div>
            <div className="flex align-center justify-center">
            <HelpIcon/>
            </div>
        </div>
        <div className="heading flex justify-center align-center text-center mt-4 mb-5">
            How much Bitcoin would you like to buy?
        </div>
        <div className="flex">
            <InputField
                className= "formInput"
                placeholder="Amount"
                type="number"
            // onChange={handleChange}
                //value = {tournamentValues.name}
                min={2}
                label= {"Name"}
                bodyClass={"mr-2 align-start mt-3 mr-2 "}
                name={"name"}
            />
        </div>
        <div className="flex  align-center mb-2 wallet-type mt-4">
            {paymentMethod[0].logo}
            <div className="ml-3">
                <div className="bold-text">{paymentMethod[0].name}</div>
                <div className="sm-text">Available: NGN 200,000</div>
            </div>
        </div>
        <div className="mt-5 bottom">
            <Button text={"Continue"} className={"mt-5 "}/>
        </div>
    </BuyCoinView>
  )
}

export default BuyCoin

const BuyCoinView = styled(AddWalletView)`
    .wallet-type{
        background: #F8FAFC;
        box-shadow: 0px 18px 20px rgba(210, 210, 210, 0.05);
        border-radius: 20px;
        padding: 0px 10px;
    }
    .bottom{
        position: initial;
    }
`