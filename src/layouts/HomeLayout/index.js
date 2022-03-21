import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router";
import Sidebar from "../../components/ReusableComponents/SideBar/Sidebar";

export default function HomeLayout() {
  return (
    <HomeLayoutView>
        <Sidebar/>
        <MainView>
            <div className="inner-container">
                <Outlet/>
            </div>
        </MainView>
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
        background: #E2E8F0;
        min-height: 100vh;
        padding: 44px 34px;
    }
`;
