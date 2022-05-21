import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Outlet } from "react-router";
import Sidebar from "../../components/ReusableComponents/SideBar/Sidebar";
import Modal from "../../components/Modals/Modal";
import SwapSuccessModal from "../../components/Modals/SwapSuccessModal";
import { showSwapSuccessModal } from "../../redux/swap/actions";
import ConfirmSuccessPaymentModal from "../../components/Modals/ConfirmSuccessPaymentModal";

export default function HomeLayout() {
    const dispatch = useDispatch();
    const {showSuccessModal, fromAmount, toAmount} = useSelector(state => state.swapState);
    const hideSwapSuccessModal = () => {
        const payload = {
            showModal: false
        }
        dispatch(showSwapSuccessModal(payload))
    }
    return (
        <HomeLayoutView>
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
`;
