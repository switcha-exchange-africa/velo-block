import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as OnboardingImage} from '../../../assets/Icons/OnboardingImage.svg';
import {ReactComponent as NegativeCheck} from '../../../assets/Icons/CancelIcon.svg';
import {ReactComponent as PositiveCheck} from '../../../assets/Icons/PositiveCheckmarkIcon.svg';
import {ReactComponent as SuccessIcon} from '../../../assets/Icons/SuccessIcon.svg';
import InputField from '../../ReusableComponents/InputField/InputField';
import Button from '../../ReusableComponents/Button/Button';
import Pin from '../../ReusableComponents/Pin/Pin';
import { signupUser, verifyCode } from "../../../redux/sigup/actions";
import { toast } from "react-toastify";



function SignupPage() {
    const dispatch = useDispatch()
    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: ""
    });
    const [buttonActive, setButtonActive] = useState(false);
    const [isMin, setIsMin] = useState(false);
    const [isAlphaNum, setIsAlphNum] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isSpecialChar, setIsSpecialChar] = useState(false);
    const [isUpperCase, setIsUpperCase] = useState(false);
    const [step, setStep] = useState(1);
    const [currentPin, setCurrentPin] = useState("");
    const [stepTwoCheck, setStepTwoCheck] = useState(false);
    const [stepThreeCheck, setStepThreeCheck] = useState(false);
    const [stepFourCheck, setStepFourCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const gotoDashboard = ()=> navigate("/dashboard");
    const pushToLogin = () => navigate("/login");
    const [appToken , setAppToken] = useState("");
    toast.configure();
    //const appToken = Cookies.get("switchaAppToken")

    const handleChange = (e)=> {
        const {name,value} = e.target
        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    
    function handleCurrentPinChange(value) {
        setCurrentPin(value);
    }

    const pushToHome = () => {
        // Cookies.set("switchaAppToken")
        gotoDashboard()
    }
    
    const isUpper=(str)=> {
        return /[A-Z]/.test(str);
    }

    const submitInfo = async () => {
        setLoading(true)
        const {email, firstname, lastname, password} = inputValues
        const payload = {

            firstName: firstname,
            lastName: lastname,
            email: email,
            device: "ios",
            password: password,
            agreedToTerms: true
        }
        const {status, response, token} = await dispatch(signupUser(payload))
        setLoading(false)
        if (status){
            Cookies.set("switchaAppToken", token)
            setAppToken(token)
            setStep(4)
        }else{
            toast.warn(response || "Sorry an error occurred", {
                className: 'dark-theme',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                autoClose:8000
            })
        }
    }
    
    const verifyEmail = async() => {
        setLoading(true)
        const {status, response} = await dispatch(verifyCode({code: currentPin}, appToken))

        setLoading(false)
        if (status){
            setStep(5)
        }else{
            toast.warn(response || "Sorry an error occurred", {
                className: 'dark-theme',
                bodyClassName: "grow-font-size",
                progressClassName: 'fancy-progress-bar',
                autoClose:8000
            })
        }
    }
    useEffect(() => {
        const {password} = inputValues
        const reg = /^(?=.*[A-Za-z])(?=.*\d)(.+){8,}$/;
        const specialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
        const specialCharTest = specialChar.test(password);
        const test = reg.test(password);
        const isUpperCase = isUpper(password)
        if (test) {
          setIsAlphNum(true);
        } else {
          setIsAlphNum(false);
        }
        if (password.length < 8) {
          setIsMin(false);
        } else {
          setIsMin(true);
        }
        if(specialCharTest) {
            setIsSpecialChar(true)
        }else {
            setIsSpecialChar(false)
        }
        if(isUpperCase){
            setIsUpperCase(true)
        }else {
            setIsUpperCase(false)
        }
    }, [inputValues]);

    useEffect(() => {
        if (isMin && isAlphaNum && isSpecialChar && isUpperCase) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
    }, [isMin, isAlphaNum, isSpecialChar, isUpperCase]);

    useEffect(()=>{
        const {email} = inputValues
        if(!email || !isAuthorized){
            setButtonActive(false)
        }else{
            setButtonActive(true)
        }
    },[inputValues, isAuthorized]);

    useEffect(()=>{
        const {firstname, lastname} = inputValues;
        if(!firstname || !lastname) {
            setStepTwoCheck(false)
        }else {
            setStepTwoCheck(true)
        }
    },[inputValues]);

    useEffect(()=>{
        const {username} = inputValues;
        if(!username) {
            setStepThreeCheck(false)
        }else {
            setStepThreeCheck(true)
        }
    },[inputValues]);

    useEffect(()=>{
        if(currentPin.length < 6) {
            setStepFourCheck(false)
        }else {
            setStepFourCheck(true)
        }
    },[currentPin]);

  
  return (
    <SignupPageView>
        <div className="flex justify-center align-center width-100">
            <div className="onboarding-img width-50 flex justify-center align-center -100 desktop-view">
                <OnboardingImage/>
            </div>
            <div className="width-50 flex justify-center align-center">
                {step === 1 && (
                    <OnboardingFormView>
                        <div className="heading mb-4">
                            Create your account
                        </div>
                        <InputField
                            className= "formInput"
                            placeholder="Email Address"
                            type="text"
                            onChange={handleChange}
                            value = {inputValues.email}
                            min={2}
                            label= {"Email"}
                            bodyClass={"mr-2 align-start mt-3 mr-2"}
                            name={"email"}
                            small={false}
                            
                        />
                        <InputField
                            className= "formInput"
                            placeholder="Password"
                            type="password"
                            onChange={handleChange}
                            value = {inputValues.password}
                            min={2}
                            label= {"Password"}
                            bodyClass={"mr-2 align-start mt-4 mr-2"}
                            name={"password"}
                            small={false}
                        />
                        <div className="conditions">
                            <div className="conditions-heading mt-3 mb-2">
                                Password must include
                            </div>
                            <div className="mt-2 flex"> {isMin ? <PositiveCheck/> : <NegativeCheck/>} <span className={`check ml-2 ${isMin ? "green": "red"}`}>At least 8 characters</span></div>
                            <div className="mt-2 flex"> {isUpperCase ? <PositiveCheck/> : <NegativeCheck/>} <span className={`check ml-2 ${ isUpperCase ? "green": "red"}`}>At least one upper case</span></div>
                            <div className="mt-2 flex"> {isAlphaNum ? <PositiveCheck/> : <NegativeCheck/>} <span className={`check ml-2 ${isAlphaNum ? "green": "red"}`}>At least one number</span></div>
                            <div className="mt-2 flex"> {isSpecialChar ? <PositiveCheck/> : <NegativeCheck/>} <span className={`check ml-2 ${isSpecialChar ? "green": "red"}`}>At least one number or special character (!@#&$)</span></div>
                        </div>
                        <Button text={"Create Account"} className={"mt-5"} inActive={!buttonActive} onClick={()=> setStep(2)}/>
                        <div className="flex align-center mt-4">
                            <div className="normal-text">Already registered?  <span className="orange cursor-pointer" onClick={pushToLogin}> Sign In </span> </div>
                        </div>
                        
                    </OnboardingFormView>
                )}
                {step === 2 && (
                    <OnboardingFormView>
                        <div className="heading mb-4">
                            Personal Information
                        </div>
                        <div className="flex justify-between align-center mt-2">
                            <div className="normal-text">{inputValues.email}</div>  <div className="orange cursor-pointer" onClick={()=> setStep(1)}> change email </div>
                        </div>
                        <InputField
                            className= "formInput"
                            placeholder="Enter your first name"
                            type="text"
                            onChange={handleChange}
                            value = {inputValues.firstname}
                            min={2}
                            label= {"Firstname"}
                            bodyClass={"mr-2 align-start mt-3 mr-2"}
                            name={"firstname"}
                            small={false}
                            
                        />
                        <InputField
                            className= "formInput"
                            placeholder="Enter your last name"
                            type="text"
                            onChange={handleChange}
                            value = {inputValues.lastname}
                            min={2}
                            label= {"Lastname"}
                            bodyClass={"mr-2 align-start mt-3 mr-2"}
                            name={"lastname"}
                            small={false} 
                        />
                         <Button text={"Next"} className={"mt-5"} inActive={!stepTwoCheck} onClick={()=> setStep(3)}/>
                    </OnboardingFormView>
                )}
                {step === 3 && (
                    <OnboardingFormView>
                        <div className="heading mb-4">
                            Personal Information
                        </div>
                        <div className="flex justify-between align-center mt-2">
                            <div className="normal-text">{`${inputValues.firstname} ${inputValues.lastname}`}</div>  <div className="orange cursor-pointer" onClick={()=> setStep(1)}> change legal name </div>
                        </div>
                        <InputField
                            className= "formInput"
                            placeholder="Enter your user name"
                            type="text"
                            onChange={handleChange}
                            value = {inputValues.username}
                            min={2}
                            label= {"Username"}
                            bodyClass={"mr-2 align-start mt-3 mr-2"}
                            name={"username"}
                            small={false}
                            
                        />
                         <Button text={"Next"} className={`${loading && "form-loading "} mt-5`} inActive={!stepThreeCheck} onClick={submitInfo}/>
                    </OnboardingFormView>
                )}
                {step === 4 && (
                    <OnboardingFormView>
                        <div className="heading mb-4">
                            Enter verification code
                        </div>
                        <div className=" align-center mt-2">
                            <div className="faded-text">Enter the 6-Digit code we sent to your email address </div>  
                            <div className="bold cursor-pointer"> {inputValues.email} </div>
                        </div>
                        <Pin
                            type={2}
                            name="currentPin"
                            onChange={handleCurrentPinChange}
                            size={6}
                        />
                        {/* <div className="flex justify-center align-center">
                            <div className="faded-text">Resend code in  <span className="orange cursor-pointer normal-text">09:45</span> </div>
                        </div> */}
                        <Button text={"Verify"} className={` ${loading && "form-loading "} mt-5`} inActive={!stepFourCheck} onClick={()=> verifyEmail()}/>
                    </OnboardingFormView>
                )}
                {step === 5 && (
                    <OnboardingFormView>
                        <div className="flex flex-column justify-center align-center">
                            <SuccessIcon/>
                            <div className="heading mb-2 mt-3">
                                You’re Verified!
                            </div>
                            <div className=" flex justify-center align-center mt-2">
                                <div className="faded-text">You have been successfully verified </div>  
                            </div>
                            <Button text={"Done"} className={"mt-5"} inActive={!stepFourCheck} onClick={()=> pushToHome()}/>
                        </div>
                    </OnboardingFormView>
                )}
            </div>
        </div>
    </SignupPageView>
  )
}

export default SignupPage

export const SignupPageView = styled.div`
    background: #F8FAFC;
    min-width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    margin-top: 95px;
    .onboarding-img {
        >svg {
            height: 578px;
            width: 578px;
        }
    }
    .normal-text{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #334155;
    }
    .check-box{
        min-height: 24px;
        max-height: 24px;
        min-width: 24px;
        max-width: 24px;
        background: #FFFFFF;
        border: 1.5px solid #E2E8F0;
        box-sizing: border-box;
        border-radius: 8px;
    }
    .orange{
        color: #FB5E04 !important;
    }
    @media (max-width: 950px) {
        .desktop-view {
            display: none !important;
        }
        .width-50 {
            width: 94% !important;
        }
    }
`;
export const OnboardingFormView = styled.div `
    display: flex;
    flex-direction: column;
    padding: 96px 72px;
    width: 494px;
    min-height: 400px;
    background: #FFFFFF;
    .heading {
        font-style: normal;
        font-weight: 800;
        font-size: 26px;
        line-height: 36px;
        text-align: start;
        color: #060A1D;
    }
    .conditions-heading {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #64748B;
    }
    .check {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: flex-end;
    }
    .green {
        color: #22C36B;
    }
    .red {
        color: #E95455;
    }
    .bold {
        font-weight: 700;
    }
    .faded-text {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        color: #334155;
    }
    @media (max-width: 950px) {
        padding: 37px 22px;
        min-width: 94%;
        width: auto;
    }
`