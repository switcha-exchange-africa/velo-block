import React, {useState, useEffect} from "react";
import styled from "styled-components";
import QRCode from "qrcode";
import { useDispatch, useSelector } from "react-redux";
import { showDepositModal } from "../../redux/swap/actions";

function DepositModal() {
    const dispatch = useDispatch()
    const [qrcode, setQrCode] = useState("");
    const { depositItem } = useSelector(state => state.swapState)

    const GenerateQRCode = () => {
        QRCode.toDataURL(depositItem.address, (err, url) => {
            if(err) return console.error(err)
            setQrCode(url)
        })
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

    function copyText() {
         /* Copy the text inside the text field */
        navigator.clipboard.writeText(depositItem.address);
      
        /* Alert the copied text */
        let tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied: " + `${depositItem.address}`;
    }

    const closeModal = () => {
        dispatch(showDepositModal(false))
    }
    useEffect(()=>{
        GenerateQRCode()
    },[])
    return (
        <DepositModalView>
            <div>
                <p className="heading">Deposit {getName(depositItem.coin)}</p>
                <p className="sub-heading mt-2">Copy address or scan Qr code to deposit {getName(depositItem.coin)}</p>
            </div> 
            <div className="back" onClick={closeModal}> x </div>
            <div className="flex justify-center align-center qr-code">
                <img src={qrcode} alt ="" />
            </div>
            <p className="address-heading">{depositItem.coin} Deposit Address</p>
            <p className="address mt-1">{depositItem.address}</p>

            <button className="copy-btn tooltip" onClick={copyText}>
                <span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
                <p>Copy Address</p>
            </button>

        </DepositModalView>
    )
}

export default DepositModal;

const DepositModalView = styled.div`
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
        background: #10192D;
        border-radius: 5px;
        margin-top: 150px;
        bottom: 0px;
        >p {
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
        top: 12px;
        right: 15px;
        font-size: 30px;
        cursor: pointer;

    }
`;
