import React from 'react'
import styled from 'styled-components'
import {ReactComponent as SwitchaLogo} from "../../../assets/Icons/SwitchaLogo.svg"

function switchaScreen({onClick}) {
  return (
    <SwitchaScreenView onClick={onClick}>
        <SwitchaLogo/>
    </SwitchaScreenView>
  )
}

export default switchaScreen;

const SwitchaScreenView = styled.div`
    background: #FB5E04;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

`;