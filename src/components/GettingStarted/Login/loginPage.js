import React from 'react'
import styled from 'styled-components';
import {ReactComponent as BackArrowIcon} from  "../../../assets/Icons/BackArrowIcon.svg";
import InputField from '../../ReusableComponents/InputField/InputField';
import Button from '../../ReusableComponents/Button/Button';
import GoogleButton from '../../ReusableComponents/Button/GoogleButton';

function LoginPage() {
  //const history = useHistory()
  return (
    <LoginPageView>
      <div className="width-100">
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
      </div>
    </LoginPageView>
  )
}

export default LoginPage;

export const LoginPageView =styled.div`
  padding: 24px;
  height: 100vh;
  width: 100vw;
  position: relative;
  .heading{
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
      font-weight: bold;
  } 
  .align-left{
    display: flex;
    justify-content: flex-end;
  }
  .bottom{
    position: relative;
    top: 194px;
  }
  .width-100{
    width: 100% !important;
  }

    
`;

