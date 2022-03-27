import React from "react";
import styled from "styled-components";
import {ReactComponent as SuccessIcon} from '../../assets/Icons/SuccessIcon.svg';

function SwapSuccessModal({fromAmount, toAmount}) {
  return (
    <SwapSuccessModalView>
      <div className="mt-3">
        <div className="icon flex justify-center align-center">
        <SuccessIcon/>
        </div>
        <div className="success-heading mt-2"> Success!</div>
        <div className="success-sub-heading mt-5">You have successfully Swapped {fromAmount} to {toAmount}</div>
        <div className="orange-text mt-4">View more details</div>
        <div className="mt-3 flex justify-between align-center width-300">
          <div className="view-wallet-btn flex justify-center align-center"> View More</div>
          <div className="view-history-btn flex justify-center align-center"> View More</div>
        </div>

      </div>
    </SwapSuccessModalView>
  )
}

export default SwapSuccessModal;

const SwapSuccessModalView = styled.div`
  display: flex;
  justify-content: center;
  .success-heading {
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 120%;
    text-align: center;
    color: #10192D;
  }
  .success-sub-heading {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #8E9BAE;
    max-width: 318px;
    margin: auto;
  }
  .orange-text {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    color: #FB5E04;
  }
  .icon {
    >svg {
      height: 139px;
      width: 139px;
    }
  }
  .view-wallet-btn {
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 191px;
    height: 56px;
    border: 1px solid #8E9BAE;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .view-history-btn {
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 191px;
    height: 56px;
    background: #FB5E04;
    border-radius: 5px;
    color: #ffffff;
  }
  .width-300 {
    min-width: 400px
  }

`;