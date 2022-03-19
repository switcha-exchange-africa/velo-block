import React,{useState} from 'react';
import styled from 'styled-components';
import { LoginPageView } from '../Login/loginPage';
import Pin from '../../ReusableComponents/Pin/Pin';
import {ReactComponent as BackArrowIcon} from  "../../../assets/Icons/BackArrowIcon.svg";
import Button from '../../ReusableComponents/Button/Button';

function LoginVerificationPage() {
    const [currentPin, setCurrentPin] =useState("")
    function handleCurrentPinChange(value) {
        setCurrentPin(value);
    }
  return (
    <LoginVerificationPageView>
        <div className="width-100">
            <BackArrowIcon/>
            <div className="heading mt-2">
                Enter verification code
            </div>
            <div className="normal-text mt-3">
                Enter the 4-Digit code we sent to your email address <span className="bold">abc@xyz.com</span>
            </div>
            <Pin
                type={2}
                name="currentPin"
                onChange={handleCurrentPinChange}
                size={4}
            />
            <div className="normal-text justify-center flex"> Resend code in <span className="orange pl-2"> 09:58</span></div>
            <div className="mt-5">
                <Button text={"Verify"} className={"mb-4 "}/>
            </div>
        </div>
    </LoginVerificationPageView>
  )
}

export default LoginVerificationPage;

const LoginVerificationPageView =styled(LoginPageView)`

`