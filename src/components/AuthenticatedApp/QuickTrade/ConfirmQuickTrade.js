import React, {useState} from "react";
import styled from "styled-components";

function ConfirmQuickTrade({goToConfirm, loading}) {
    const [transferType, setTransferType] = useState(0);

    return (
        <ConfirmQuickTradeView>
            <div className ="heading">
                <h7>Confirm Purchase</h7>
            </div>
            <div className ="amount mt-3">
                <h4>N10,000.00</h4>
            </div>
            <div className ="sub-heading mt-1">
                <p className ="sub-heading">I will receive 18.18 USDT</p>
            </div>
            <PaymentMethod activeType={transferType}>
                <p>Select payment method</p>
                <button className="payment-method-selection bank" onClick={()=> setTransferType(1)}>
                    <div className="flex justify-between pl-2 transfer">
                        <div className="purchase-type">Bank Transfer</div>
                        <div className="purchase-amount">  N550.98</div>
                    </div>
                    <div className="align-left orange mt-2">
                        Best Offer
                    </div>
                </button>
                <button className="payment-method-selection wallet mt-2"  onClick={()=> setTransferType(2)}>
                    <div className="flex justify-between pl-2 switcha">
                        <div className="purchase-type">Switcha Ng Wallet</div>
                        <div className="purchase-amount">  N550.98</div>
                    </div>
                    <div className="align-left orange mt-2">
                        Best Offer
                    </div>
                </button>
            </PaymentMethod>
            <button className ={`flex justify-center align-center buy ${transferType === 0 && "disabled", loading && "form-loading"}`} onClick={()=>goToConfirm()}> 
                <span>Confirm Purchase</span>
            </button>
        </ConfirmQuickTradeView>
    )
}

export default ConfirmQuickTrade;

const ConfirmQuickTradeView = styled.div`
    padding: 24px;
    width: 451px;
    margin: auto;
    min-height: 516px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    margin-top: 100px;
    .heading {
        font-style: normal;
        font-weight: 300;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
    }
    .amount {
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 24px;
        color: #000000;
        >h4{
            margin-bottom:0px;
        }
    }
    .sub-heading {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 24px;
        color: #000000;
        >p {
            margin-top: 5px;
        }
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
        margin-top: 110px;
    }
`;

const PaymentMethod = styled.div`
    width: 100%;
    margin-top: 30px;
    .payment-method-selection {
        width: 100%;
        min-height: 56px;
        border: 1px solid;
        border-radius: 4px;
        border-right: 5px solid;
        padding: 10px;
        background: #ffffff;

    }
    .bank {
        border: ${props => props.activeType === 1 ? "1px solid #FB5E04" : "1px solid #000000" };
        border-right: ${props => props.activeType === 1 ? "5px solid #FB5E04": "1px solid #000000" };
    }
    .wallet {
        border: ${props => props.activeType === 2 ? "1px solid #9C2CF3" : "1px solid #000000"};
        border-right: ${props => props.activeType === 2 ?  "5px solid #9C2CF3" : "1px solid #000000" };
    }
    .transfer {
        border-left: ${props => props.activeType === 1 ? "3px solid #FB5E04": "3px solid #000000"};
        padding-left: 10px;
        min-height: 12px;
        border-radius: 2px;
    }
    .switcha {
        border-left: ${props => props.activeType === 2 ? "3px solid #9C2CF3" : "3px solid #000000"};
        padding-left: 10px;
        min-height: 12px;
        border-radius: 2px;
    }
    .purchase-type {
        font-weight: 700;
        font-size: 14px;
        color: #090A0B;
    }
    .purchase-amount {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        color: #090A0B;
    }
    .orange {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;
        color: #FB5E04;
        display: flex;
        justify-content: flex-end;
    }

    .disabled {
        opacity: 0.7;
        pointer-events: none;
    }
`;
