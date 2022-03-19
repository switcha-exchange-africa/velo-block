import React from 'react';
import styled from 'styled-components';
import {ReactComponent as OnboardingImage} from '../../../assets/Icons/OnboardingImage.svg';
import {ReactComponent as BackArrowIcon} from  "../../../assets/Icons/BackArrowIcon.svg";
import InputField from '../../ReusableComponents/InputField/InputField';
import Button from '../../ReusableComponents/Button/Button';
import GoogleButton from '../../ReusableComponents/Button/GoogleButton';
import OnboardingNavBar from '../../NavBars/OnboardingNavBar';

function SignupPage() {
  
  return (
    <SignupPageView>
        {/* <OnboardingNavBar/> */}
        <div className="flex justify-center align-center width-100">

            <div className="onboarding-img width-50 flex justify-center align-center -100">
                <OnboardingImage/>
            </div>
            <div className="width-50">
                hi
            </div>
        </div>
        {/* <div>
            <BackArrowIcon/>
            <div className="heading mt-2">
                Sign Up
            </div>
            <div className="normal-text mt-3">
                It only takes a minute to create your account
            </div>
            <div className="flex space-between mt-3">
                <InputField
                    className= "formInput"
                    placeholder="First Name"
                    type="text"
                // onChange={handleChange}
                    //value = {tournamentValues.name}
                    min={2}
                    label= {"Name"}
                    bodyClass={"mr-2 align-start mt-3 mr-2"}
                    name={"name"}
                    small={true}
                    
                />

                <InputField
                    className= "formInput"
                    placeholder="last Name"
                    type="text"
                // onChange={handleChange}
                    //value = {tournamentValues.name}
                    min={2}
                    label= {"Name"}
                    bodyClass={"mr-2 align-start mt-3 ml-2"}
                    name={"name"}
                    small={true}
                    
                />
                
            </div>
            <div className="flex">
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
            <div className="flex mt-5">
                <div className="check-box mr-2"></div>
                <div className="normal-text">I agree the Cryptoline <span className="orange"> Terms of Services </span> and <span  className="orange">Privacy Policy</span></div>
            </div>
            <div className="mt-3">
                <Button text={"Sign Up"} className={"mb-4 mt-5"}/>
                <GoogleButton text={"Continue With Google"}/>
            </div>
            <div className="flex justify-center align-center mt-5">
                <div className="normal-text">Already registered?  <span className="orange"> Sign In </span> </div>
            </div>

        </div> */}
    </SignupPageView>
  )
}

export default SignupPage

const SignupPageView = styled.div`
    background: #F8FAFC;
    min-width: 100vw;
    display: flex;
    .onboarding-img {
        >svg {
            height: 578px;
            width: 578px;
        }
    }
    /* .heading{
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 120%;
        color: #10192D;
    }
    .normal-text{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 140%;
        /* identical to box height, or 20px */
        color: #64748B;
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
    }  */
`;