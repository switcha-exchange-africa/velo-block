import React from "react";
import styled from "styled-components";
import {ReactComponent as SwitchaLogoHeader} from '../../assets/Icons/SwitchaHeaderLogo.svg'

function OnboardingNavBar() {
  return (
    <OnboardingNavbarView>
        <SwitchaLogoHeader/>
    </OnboardingNavbarView>
  )
}

export default OnboardingNavBar;

const OnboardingNavbarView = styled.div`
    min-height: 65px;
    max-height: 65px;
    min-width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 20;
    padding: 15px 71px;
    background: #10192D;
`;