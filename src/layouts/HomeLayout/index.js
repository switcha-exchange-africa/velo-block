import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Outlet } from "react-router";
import Sidebar from "../../components/ReusableComponents/SideBar/Sidebar";
import Modal from "../../components/Modals/Modal";
import SwapSuccessModal from "../../components/Modals/SwapSuccessModal";
import { showSwapSuccessModal } from "../../redux/swap/actions";
//import ConfirmSuccessPaymentModal from "../../components/Modals/ConfirmSuccessPaymentModal";
import DepositModal from "../../components/Modals/DepositModal";
import { getUsersWallets, fetchUsersTransactions } from "../../redux/sigup/actions";
import OnboardingNavBar from "../../components/NavBars/OnboardingNavBar";

import Cookies from "js-cookie";
import WithdrawModal from "../../components/Modals/WithdrawModal";

export default function HomeLayout() {
    const dispatch = useDispatch();
    const {showSuccessModal, fromAmount, toAmount, showDepositModal, showWithdrawModal} = useSelector(state => state.swapState);
    const {fetchWallets, fetchTransactions} = useSelector(state => state.accountState);
    const hideSwapSuccessModal = () => {
        const payload = {
            showModal: false
        }
        dispatch(showSwapSuccessModal(payload))
        
    }
    const getAllRequiredData= async()=> {
        const token = Cookies.get("switchaAppToken")
        if( fetchTransactions === "idle" ){
            dispatch(fetchUsersTransactions(token))
        }
        if (fetchWallets === "idle") {
            dispatch(getUsersWallets(token))
        }
        
    }

    useEffect(()=>{
        if(
            fetchTransactions === "idle" 
            || fetchWallets === "idle"
        ){
            getAllRequiredData()
        }
        
    },[])
    return (
        <HomeLayoutView>
            <OnboardingNavBar/> 
            <Sidebar/>
            <MainView>
                <div className="inner-container">
                    <Outlet/>
                </div>
            </MainView>
            <Modal showModal={showSuccessModal} setShowModal={hideSwapSuccessModal}>
                <SwapSuccessModal fromAmount={fromAmount} toAmount={toAmount}/>
            </Modal>
            {/* <Modal showModal={true} setShowModal={hideSwapSuccessModal} width={"596px"} height={"717px"} padding={"0"}>
                <ConfirmSuccessPaymentModal/>
            </Modal> */}
            <Modal showModal={showDepositModal} setShowModal={hideSwapSuccessModal} width={"596px"} height={"717px"}>
                <DepositModal/>
            </Modal>
            <Modal showModal={showWithdrawModal} setShowModal={hideSwapSuccessModal} width={"596px"} height={"717px"}>
                <WithdrawModal/>
            </Modal>
        </HomeLayoutView>
    );
};

const HomeLayoutView = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 70px;
`;
const MainView = styled.div`
    margin-left: 15%;
    background: #ffffff;
    .inner-container {
        margin: 20px;
        border-radius: 20px;
        background: #F8FAFC;;;
        min-height: 100vh;
        padding: 44px 34px;
    }
    @media (max-width: 900px) {
        margin-left: 0;
        .inner-container {
            padding: 0px;
        }
    }
`;
