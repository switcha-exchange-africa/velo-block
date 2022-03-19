import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as PeopleIcon} from "../../../assets/Icons/PeopleIcon.svg";
import {ReactComponent as CardIcon} from "../../../assets/Icons/CardIcons.svg";
import {ReactComponent as BtcWelcomeIcon} from  "../../../assets/Icons/BtcWelcomeIcon.svg";
import {ReactComponent as EthWelcomeIcon} from  "../../../assets/Icons/EthWelcomeIcon.svg";
import {ReactComponent as LtcWelcomeIcon} from  "../../../assets/Icons/LtcWelcomeIcon.svg";
import DottedCircles from '../../ReusableComponents/DottedCircles/DottedCircles';
import Button from '../../ReusableComponents/Button/Button';

function WelcomeScreen() {
    const navigate = useNavigate();
    const [page, setPage]=useState(1);
    const goToTheSecond=()=> setPage(2);
    const goToTheThird=()=> setPage(3);
    const goToLogin=()=> navigate("/login");
    const goToSignup=()=> navigate("/signup");


    return (
        <WelcomeScreenView>
            {page === 1 && (
                <div className="flex-column justify-center">
                    <div className="flex justify-center align-center mt-5 mb-5">
                        <PeopleIcon/>
                    </div>
                    
                    <div className="heading pt-5">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className="sub-heading mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at elit nisi. Quisque quis libero nec nisi elementum ultrices
                    </div>
                    <DottedCircles position={1} onClick={goToTheSecond}/>

                    <div className="flex justify-between width-100 mt-5">
                        <Button inverted small text={"skip"} onClick={goToSignup}/>
                        <Button small text={"Next"} onClick={goToTheSecond}/>
                    </div>
                </div>
            )}

            {page === 2 && (
                <div className="flex-column justify-center">
                    <div className="flex justify-center align-center card-icon">
                    <CardIcon/>
                    </div>
                    
                    <div className="heading pt-5">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className="sub-heading mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at elit nisi. Quisque quis libero nec nisi elementum ultrices
                    </div>
                    <DottedCircles position={2} onClick={goToTheThird}/>

                    <div className="flex justify-between width-100 mt-5">
                        <Button inverted small text={"skip"}  onClick={goToSignup}/>
                        <Button small text={"Next"} onClick={goToTheThird}/>
                    </div>
                </div>
            )}

            {page === 3 && (
                <div className="flex-column justify-center flex">
                    <div className="justify-center align-center">
                        <BtcWelcomeIcon/>
                        <EthWelcomeIcon/>
                        <LtcWelcomeIcon/>
                    </div>
                    
                    <div className="heading">
                        Lorem ipsum dolor sit amet
                    </div>
                    <div className="sub-heading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at elit nisi. Quisque quis libero nec nisi elementum ultrices
                    </div>
                    <DottedCircles position={3} onClick={goToTheThird}/>

                    <div className="justify-center align-center mt-5">
                        <Button text={"Get Started"} className={"mb-2"}  onClick={goToSignup}/>
                        <Button noBorder inverted text={"Login"} onClick={goToLogin}/>
                    </div>
                </div>
            )}

        </WelcomeScreenView>
    
    )
}

export default WelcomeScreen;

const WelcomeScreenView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    flex-direction: column;
    padding: 24px 44px;
    .heading{
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 140%;
        text-align: center;
        color: #10192D;
        max-width: 250px;
        margin: auto;
    }
    .sub-heading{
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #8E9BAE;
        margin-top:16px !important;
        text-align: center;
        max-width: 300px;
        margin: auto;
    }
    .card-icon{
        max-width: 230px;
        max-height: 330px;
        margin: auto;
    }
`;