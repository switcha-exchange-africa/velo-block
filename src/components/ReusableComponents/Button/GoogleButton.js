import React from 'react';
import styled from 'styled-components';
import {ReactComponent as GoogleIcon} from "../../../assets/Icons/GoogleIcon.svg"

function GoogleButton({ text, onClick, className}) {
    return (
        <GoogleButtonView onClick={onClick} className={className}> 
            <span className="mr-2 justify-center align-center flex"> <GoogleIcon/></span>
            {text}
        </GoogleButtonView>
    )
}
export default GoogleButton;

const GoogleButtonView=styled.div`
    width: "327px";
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    border-radius: 16px;
    border: 1px solid #E2E8F0;
    color: #000000;
    background: "#ffffff" ;
    margin: auto;
`;