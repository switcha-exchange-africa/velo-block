import Cookies from "js-cookie";
import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import InputField from '../../ReusableComponents/InputField/InputField';
import Button from '../../ReusableComponents/Button/Button';
import { SignupPageView } from '../Signup/SignupPage';
import { OnboardingFormView } from '../Signup/SignupPage';
import Pin from '../../ReusableComponents/Pin/Pin';
import {ReactComponent as OnboardingImage} from '../../../assets/Icons/OnboardingImage.svg';
import {ReactComponent as SuccessIcon} from '../../../assets/Icons/SuccessIcon.svg';
import { loginUser } from "../../../redux/sigup/actions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function LoginPage() {
  const dispatch = useDispatch()
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const [step, setStep] = useState(1);
  const [buttonActive, setButtonActive] = useState(false);
  const [currentPin, setCurrentPin] = useState("");
  const [stepTwoCheck, setStepTwoCheck] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const gotoDashboard = ()=> navigate("/dashboard")
  const goToSignup = () => navigate("/signup")

  toast.configure()

  const handleChange = (e)=> {
    const {name,value} = e.target
    setInputValues({
        ...inputValues,
        [name]: value
    })
  }

  const handleSubmit = async () => {
    setLoading(true)
    const {status, response, token} = await dispatch (loginUser(inputValues))
    setLoading(false)
    if(status){
      Cookies.set("switchaAppToken", token)
      gotoDashboard()
    }else{
      toast.warn(response || "Sorry an error occurred", {
          className: 'dark-theme',
          bodyClassName: "grow-font-size",
          progressClassName: 'fancy-progress-bar',
          autoClose:8000
      })
  }

   
  }
  
  function handleCurrentPinChange(value) {
    setCurrentPin(value);
  }

  useEffect(()=>{
    const {email, password} = inputValues
    if(!email || !password){
      setButtonActive(false)
    }else{
      setButtonActive(true)
    }
  },[inputValues]);

  useEffect(()=>{
    if(currentPin.length < 6) {
        setStepTwoCheck(false)
    }else {
        setStepTwoCheck(true)
    }
  },[currentPin]);
  return (
    <LoginPageView>
      <div className="flex justify-center align-center width-100">
            <div className="onboarding-img width-50 flex justify-center align-center -100 desktop-view">
                <OnboardingImage/>
            </div>
            <div className="width-50 flex justify-center align-center">
              {step === 1 && (
                <OnboardingFormView>
                  <div className="heading mb-4">
                    Login to your account
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
                  <Button text={"Login"} className={`${loading && " form-loading"} mt-5`} inActive={!buttonActive} onClick={handleSubmit} />
                  <div className=" align-center mt-4">
                    <div className="normal-text cursor-pointer">Forgot your password?</div>
                    <div className="normal-text mt-2">New to switcha?  <span className="orange cursor-pointer" onClick={goToSignup}> Create an account </span> </div>
                  </div>
                </OnboardingFormView>
              )}
              {step === 2 && (
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
                  <div className="normal-text orange ">Resend code</div>
                  
                  <Button text={"Verify"} className={"mt-5"} inActive={!stepTwoCheck} onClick={()=> setStep(3)}/>
                </OnboardingFormView>
              )}
              {step === 3 && (
                <OnboardingFormView>
                    <div className="flex flex-column justify-center align-center">
                        <SuccessIcon/>
                        <div className="heading mb-2 mt-3">
                            You’re Verified!
                        </div>
                        <div className=" flex justify-center align-center mt-2">
                            <div className="faded-text">You have been successfully verified </div>  
                        </div>
                        <Button text={"Done"} className={"mt-5"} inActive={!stepTwoCheck} onClick={handleSubmit}/>
                    </div>
                </OnboardingFormView>
              )}
            </div>
      </div>
      {/* <div className="width-100">
        <BackArrowIcon/>
        <div className="heading mt-2">
          Welcome Back!
        </div>
        <div className="normal-text mt-3">
          You have been missed!
        </div>
        <div className="flex mt-3">
          <InputField
              className= "formInput"
              placeholder="Email Address"
              type="text"
          // onChange={handleChange}
              //value = {tournamentValues.name}
              min={2}
              label= {"Name"}
              bodyClass={"mr-2 align-start mt-3 mr-2 "}
              name={"name"} 
          />
        </div>
        <div className="flex">
          <InputField
              className= "formInput"
              placeholder="Password"
              type="text"
          // onChange={handleChange}
              //value = {tournamentValues.name}
              min={2}
              label= {"Name"}
              bodyClass={"mr-2 align-start mt-3 mr-2 "}
              name={"name"}
          />
        </div>
        <div className="Normal-text orange align-left mt-3"> Forgot Password?</div>
        <div className="mt-5">
          <Button text={"Sign Up"} className={"mb-4 "}/>
          <GoogleButton text={"Continue With Google"}/>
        </div>
        <div className="flex justify-center align-center mt-5 bottom" >
          <div className="normal-text">Don't have an account?  <span className="orange"> Sign Up </span> </div>
        </div>
      </div> */}
    </LoginPageView>
  )
}

export default LoginPage;

export const LoginPageView =styled(SignupPageView)`
    
`;

