import React from "react";
import styled from "styled-components";

function ConfirmSuccessPaymentModal({accountName, accountNumber, bankName}) {
    return (
        <ConfirmSuccessPaymentModalView>
            <h4 className="heading">Confirm Successful Payment</h4>
            <p className="px-3 warning-text pb-2"> Please confirm that payment has been made to the seller, Malicious clicks will lead to account frozen</p>
            <div className="width-100 content-section mb-2">
                <p className="transfer-type">Bank Transfer</p>
                <div className="content-heading mb-3">Recommended</div>
                <div className="content-value mb-3">Maximus Decimus Meridus</div>
                <div className="content-heading mb-3">Bank Account Number</div>
                <div className="content-value mb-3">98382882882</div>
                <div className="content-heading mb-3">Bank Name </div>
                <div className="content-value mb-3">Go Money</div>
                <div className="content-heading mb-3">Please Note </div>
                <div className="content-value mb-3">No crypto related words on payment description</div>
            </div>
            <div className="warning-section">
                <p>WARNING! If you click on "Transferred, next" without making the payment (you need to transfer the money with the payment account, not on Binance). Your account will potentially be suspended. The platform reserve the rights to claim any damage caused.</p>
            </div>
            <div className="flex my-3 justify-center">
                <button className="cancel-btn mr-2">Cancel</button>
                <button className="confirm-btn ml-2">Confirm</button>
            </div>
            
        </ConfirmSuccessPaymentModalView>
    );
}

export default ConfirmSuccessPaymentModal;

const ConfirmSuccessPaymentModalView = styled.div`
    min-width: 596px;
    max-width: 596px;
    min-height: 717px;
    .heading {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #000000;
        text-align: center;
    }
    .warning-text {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
    .content-section {
        border-top: 1px solid #8E9BAE;
        border-bottom: 1px solid #8E9BAE;
        padding: 24px;
    }
    .transfer-type {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 36px;
        color: #060A1D;
    }
    .content-head {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #8E9BAE;
    }
    .content-value {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
    }
    .warning-section {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        padding: 24px;
    }
    .confirm-btn {
        width: 268px;
        height: 41px;
        background: #FB5E04;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }
    .cancel-btn {
        width: 268px;
        height: 41px;
        background: #FFFFFF;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
        border: 1px solid #8E9BAE;
        cursor: pointer;
    }
`;
