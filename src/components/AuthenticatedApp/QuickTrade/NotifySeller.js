import React, { useState } from "react";
import styled from "styled-components";

function NotifySeller() {
    const [activeStep, setActiveStep] = useState(1);
    return (
        <NotifySellerView>
            <OrderDetails>
                <div className="flex justify-between align-center">
                    <p className="heading"> Buy USDT from Olu4mide</p>
                    <div>
                        <span className="key mr-2">Order number:</span>
                        <span className="value">20943993943943493949</span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex align-center">
                        <p className="sm-text mr-4">The order is created please wait for system confirmation</p>
                        <span className="time flex justify-center align-center">
                            <p>15:00</p>
                        </span>
                    </div>
                    <div>
                        <span className="key mr-2">Time Created:</span>
                        <span className="value">2022-03-06 16:11:23</span>
                    </div>

                </div>
                

            </OrderDetails>
            <OrderProcess>
                <div className="width-70">
                    <div className="steps flex space-between steps width-100 justify-between">
                        <div className="step">
                        <Step steps={1} activeStep={activeStep}> 1 </Step> 
                        </div>
                        <div className="step">
                        <Step steps={2} activeStep={activeStep}> 2 </Step> 
                        </div>
                        <div className="step"> 
                        <Step steps={3} activeStep={activeStep}> 3 </Step>
                        </div>

                    </div>
                    <OrderStage>
                        <p>Transfer payment to Seller</p>
                        <p>Pending Seller to Release Cryptos</p>
                        <p>Completed</p>
                    </OrderStage>
                    <div className="order-section mt-3">
                        <FlowGuide>
                            <div className="flex width-70">
                                <div className="mini-circle mr-3 mt-1"></div>
                                <div className="order-info-section">
                                    <p className="light-header">Confirm order info</p>
                                    <div className="flex justify-between">
                                        <span className="order-table-heading"> Fiat Amount </span>
                                        <span className="order-table-heading"> Price </span>
                                        <span className="order-table-heading"> Crypto Amount</span>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="order-table-content orange"> 10,000.00 NGN </span>
                                        <span className="order-table-content"> 580.30 NGN </span>
                                        <span className="order-table-content"> 17.23 USDT </span>
                                    </div>
                                </div>

                            </div>
                            <div className="flex width-70 mt-5">
                                <div className="mini-circle mr-3 mt-1"></div>
                                <div className="order-info-section width-100">
                                    <p className="light-header">Transfer the funds to the seller's account provided below</p>
                                    <p className="order-table-heading"> Account name </p>
                                    <p  className="order-table-heading orange"> Bank Transfer</p>
                                    <div className="flex justify-between">
                                        <span className="order-table-heading"> Account name </span>
                                        <span className="order-table-heading"> Account Number </span>
                                        <span className="order-table-heading"> Bank Name</span>
                                    </div>
                                    <div className="flex justify-between mt-2">
                                        <span className="order-table-content orange"> Olumide Oyeleye</span>
                                        <span className="order-table-content"> 20128382882</span>
                                        <span className="order-table-content"> Kuda </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex width-70 mt-5">
                                <div className="mini-circle mr-3 mt-1"></div>
                                <div className="order-info-section width-100">
                                    <p className="light-header">After transfering the funds, click on the “Transferred, notify seller” button</p>
                                </div>
                            </div>
                            <button className="ml-4 notify-seller-btn">
                                Transferred, notify seller
                            </button>
                            {/* <div className="mini-circle"></div>
                            <div className="mx-2 steps">---------------------------------------</div>
                            <div className="mini-circle"></div>
                            <div className="mx-2 steps">---------------------------------------</div>
                            <div className="mini-circle"></div> */}
                        </FlowGuide>
                    
                        

                    </div>
                </div>
                <div className="width-30"></div>
            </OrderProcess>
           


        </NotifySellerView>
    )
}

export default NotifySeller;

const NotifySellerView = styled.div`
`
const OrderDetails = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 5px; 
    .heading {
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 36px;
        color: #060A1D;
    }
    .time {
        width: 94px;
        height: 34px;
        background: #FB5E04;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 27px;
        color: #FFFFFF;
    }
    .sm-text {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 36px;
        color: #060A1D;
    }
    .key {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 36px;
        color: #64748B;
    }
    .value {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 36px;
        color: #10192D;
    }
`;

const OrderProcess = styled.div`
    display: flex;
    width: 100%;
    margin-top: 57px;
    .width-70 {
        width: 70%;
    }
    .width-30 {
        width: 30%;
    }
    .steps {
        font-size: 25px;
        color: #8E9BAE;
        display: flex;
        align-items: center;
    }
    .step {
        :before, :after{
        content:'';
        position:relative;
        display:block;
        top:50%;
        height:1px;
        width: 500px;
        background:#000;
        left:50%;
        z-index:1;
        transform:translateX(-50%);
        -webkit-transform:translateX(-50%);
    }
    }
    .mini-circle {
        height: 10px;
        width: 10px;
        border: 2px solid #FB5E04;
    }
    .order-section {
        min-height: 600px;
        position: relative;
    }
    .light-header {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #060A1D;
        margin-top: 0px;
    }
`;

const Step = styled.div`
    height: 36px;
    width: 36px;
    border-radius: 100%;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 36px;
    display: flex;
    justify-content: center;
    color: ${props => props.activeStep >= props.steps ? "#ffffff" : "#8E9BAE "};
    background:  ${props => props.activeStep >= props.steps ? " #FB5E04 " : "#E2E8F0"} ;

`;

const OrderStage = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: #060A1D;
    justify-content: space-between;
    display: flex;
`;

const FlowGuide = styled.div`
    align-items: center;
    width: 100%;
    .steps {
        font-size: 20px;
        color: #8E9BAE;
        display: flex;
        align-items: center;
    }
    .mini-circle {
        height: 12px;
        width: 12px;
        border: 2px solid #FB5E04;
        border-radius: 100%;
    }
    .order-table-content {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 25px;
        color: #000000;
        width: 162px;
    }
    .orange {
        color: #FB5E04 !important;
    }
    .order-table-heading {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #8E9BAE;
        width: 162px;
    }
    .notify-seller-btn {
        width: 239px;
        height: 42px;
        background: #FB5E04;
        border-radius: 5px;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #FFFFFF;
        border: none;
    }
`;