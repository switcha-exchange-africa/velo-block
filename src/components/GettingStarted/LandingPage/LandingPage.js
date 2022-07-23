import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import {ReactComponent as SwitchaLogoHeader} from '../../../assets/Icons/SwitchaHeaderLogo.svg'
import {ReactComponent as AfricanMap}from '../../../assets/Icons/AfricanMap.svg';
import PhoneIcon from '../../../assets/Img/PhoneIconImg.png';
import {ReactComponent as FireIcon} from '../../../assets/Icons/Waterdrop.svg';
import  {ReactComponent as SwitchaPayIcon} from '../../../assets/Icons/SwichaPayIcon.svg';
import SwitchaWalletImg from '../../../assets/Img/SwitchaWalletImage.png';
import SwitchaCardImage from '../../../assets/Img/SwitchaCardImage.png';

function LandingPage() {
    const navigate = useNavigate();
    const List =[
        {
            id: 1,
            heading: 'Quick Trade',
            subText: 'Instantly buy and sell crypto, on Switcha; and withdraw your funds within minutes to your own bank account. '
        },
        {
            id: 2,
            heading: 'P2P',
            subText: 'Turn your coins into cash today by finding a trustworthy trader with a preferential review system.'
        },
        {
            id: 3,
            heading: 'Convert',
            subText: 'Swap between crypto coins instantly  '
        },
        {
            id: 1,
            heading: 'Low Fees',
            subText: 'Trade with fees as low as 0.1% '
        },
    ]
    const goToLogin = () => navigate("/login");
    const goToSignup = () => navigate("/signup")


    return (
        <LandingPageStyle>
            <Header>
                <div className="icon">
                    <SwitchaLogoHeader/>
                </div>
                <div className="flex align-center">
                    <p className="text-sm mr-5 cursor-pointer" onClick={goToLogin}>Login</p>
                    <button className="btn" onClick={goToSignup}>Sign Up</button>
                </div>
            </Header>
            <Body>
                <div className="section-1 responsive-flex justify-between">
                    <div className="flex-column width-50">
                        <p className="text-xl">
                            Reliable Crypto Exchange with <span className="orange"> Low Fees</span>
                        </p>
                        <p className="text-sm">
                            Trade easily on a secure exchange with low fees and support both crypto, and local fiat payments.
                        </p>
                        <button className="btn cursor-pointer" onClick={goToSignup}>Get Started</button>
                    </div>
                    <div className="align-center justify-center flex width-50">
                        <AfricanMap/>
                    </div>
                </div>
                <div className="section-2 responsive-flex justify-between">
                    <div className="align-center justify-center flex width-50 phone-image">
                        <img src={PhoneIcon} alt="switcha phone image"/>
                    </div>
                    <div className="align-center justify-center flex-column width-50 mt-5">
                        <div class="mt-5">
                            <p className="orange text-sm m-1"> Why use SwitchaX</p>
                            <p className="heading mt-1">SwitchaX</p>
                        </div>
                        <div className="flex-column mt-5">
                            <div className="responsive-flex quality-list justify-between">
                                <div className="quality-card  flex-column">
                                    <div className="justify-between flex">
                                        <div className="card-heading">Quick Trade</div>
                                        <div className="flex align-center justify-center"><FireIcon/></div>
                                    </div>
                                    <div className="text-xs">Instantly buy and sell crypto, on Switcha; and withdraw your funds within minutes to your own bank account. </div>
                                    
                                </div>

                                <div className="quality-card  flex-column">
                                    <div className="justify-between flex">
                                        <div className="card-heading">P2P</div>
                                        <div className="flex align-center justify-center"><FireIcon/></div>
                                    </div>
                                    <div className="text-xs">Turn your coins into cash today by finding a trustworthy trader with a preferential review system.</div>
                                    
                                </div>
                                
                            </div>
                            <div className="responsive-flex quality-list mt-4 justify-between">
                                <div className="quality-card flex-column">
                                    <div className="justify-between flex">
                                        <div className="card-heading">Convert</div>
                                        <div className="flex align-center justify-center"><FireIcon/></div>
                                    </div>
                                    <div className="text-xs">Swap between crypto coins instantly</div>
                                    
                                </div>

                                <div className="quality-card flex-column">
                                    <div className="justify-between flex">
                                        <div className="card-heading">Low Fees</div>
                                        <div className="flex align-center justify-center"><FireIcon/></div>
                                    </div>
                                    <div className="text-xs">Trade with fees as low as 0.1% </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        <p className="text-sm orange cursor-pointer mt-5" onClick={goToSignup}>Get Started</p>
                    </div>
                </div>
                <div className="section-3">
                    <div className="lending-section ">
                        <div className="flex">
                            <p className="heading white">Lending</p>
                            <div className="flex align-center"> <FireIcon/></div>
                            
                        </div>
                        <div className="mt-3 text-sm width-50 white">
                            If you are looking to accept payments online locally or globally, do so with Switcha Lending. You can collect cryptocurrencies such as Bitcoin, Ethereum and others as payment from customers around the world.
                        </div>
                        <p className="text-sm orange cursor-pointer mt-5">Coming Soon</p>

                    </div>
                </div>
                <div className="section-4">
                    <div className="pay-section responsive-flex">
                        <div className="width-50">
                            <div className="flex">
                                <p className="heading ">Switcha Pay</p>
                                <div className="flex align-center"> <FireIcon/></div>
                                
                            </div>
                            <div className="mt-3 text-sm">
                            If you are looking to accept payments online locally or globally, do so with Switcha Pay. You can collect cryptocurrencies such as Bitcoin, Ethereum and others as payment from customers around the world.
                            </div>
                            <p className="text-sm orange cursor-pointer mt-5">Coming Soon</p>
                        </div>
                        <div className="width-50 flex align-center justify-center">
                            <SwitchaPayIcon/>
                        </div>
                    </div>
                </div>

                <div className="section-5">
                    <div className="wallet-section responsive-flex">
                        <div className="width-50">
                            <div className="flex">
                                <p className="heading white">Switcha Wallet</p>
                                <div className="flex align-center"> <FireIcon/></div>
                                
                            </div>
                            <div className="mt-3 text-sm white">
                                If you are looking to accept payments online locally or globally, do so with Switcha Wallet. You can collect cryptocurrencies such as Bitcoin, Ethereum and others as payment from customers around the world.
                            </div>
                            <p className="text-sm orange cursor-pointer mt-5">Coming Soon</p>
                        </div>
                        <div className="width-50 flex align-center justify-center img phone-image">
                            <img src={SwitchaWalletImg} alt="switcha walletimage" />
                        </div>
                    </div>
                </div>

                <div className="section-6">
                    <div className="cards-section responsive-flex">
                        <div className="width-50">
                            <div className="flex">
                                <p className="heading">Switcha Cards</p>
                                <div className="flex align-center"> <FireIcon/></div>
                                
                            </div>
                            <div className="mt-3 text-sm">
                                If you are looking to accept payments online locally or globally, do so with Switcha Wallet. You can collect cryptocurrencies such as Bitcoin, Ethereum and others as payment from customers around the world.
                            </div>
                            <p className="text-sm orange cursor-pointer mt-5">Coming Soon</p>
                        </div>
                        <div className="width-50 flex align-center justify-center img phone-image">
                            <img src={SwitchaCardImage} alt="switcha walletimage" />
                        </div>
                    </div>
                </div>
                <div className="section-7">
                    <h3 className="heading justify-center flex"> Testimonials</h3>
                    <div className="responsive-flex justify-center">
                        <div className="testimony-card">
                            <div className="image"></div>
                            <p className="text-xs">If you are looking to accept payments online locally or globally, do so with Switcha Wallet. You can collect cryptocurrencies such as Bitcoin, Ethereum and others as payment from customers around the world.</p>
                            <p className="mini-heading">Akin Taiwo</p>
                            <p className="text-xs"> CEO Earnings</p>
                        </div>

                        <div className="testimony-card">
                            <div className="image"></div>
                            <p className="text-xs">If you are looking to accept payments online locally or globally, do so with Switcha Wallet. You can collect cryptocurrencies such as Bitcoin, Ethereum and others as payment from customers around the world.</p>
                            <p className="mini-heading">Akin Taiwo</p>
                            <p className="text-xs"> CEO Earnings</p>
                        </div>
                    </div>    
                </div>
                <div className="section-8">
                    <div className="get-started-card flex-column justify-center">
                        <p className="heading flex justify-center">Get Started With Switcha</p>
                        <p className="text-xs flex justify-center max-width-568 mt-3 text-center">If you are looking to accept payments online locally or globally, do so with Switcha Pay. You can collect cryptocurrencies such as Bitcoin, Ethereum and others as payment from customers around the world.</p>
                        <div className="justify-center align-center flex mt-5">
                            <button className="btn cursor-pointer" onClick={goToSignup}>Get Started</button>
                        </div>
                    </div>
                    <div className="footer-section responsive-flex justify-between">
                        <div className="width-50 flex-column">
                            <div className="flex">
                                <SwitchaLogoHeader/>
                            </div>
                            <div className="flex">
                                
                            </div>
                            <div className="flex align-center">
                                <p className="text-sm width-50 white cursor-pointer mt-5">
                                Techub Spaces, Lateef Jakande Road,Agindigbi, Ikeja, Lagos State, Nigeria.
                                </p>

                            </div>
                            
                        </div>
                        <div className="width-50 flex align-center justify-center">
                            <div className="flex-column footer-items mr-3">
                                <p className="text-sm white">Company</p>
                                <p className="text-xs white">About Us</p>
                                <p className="text-xs white">Careers</p>
                                <p className="text-xs white">Blog</p>
                            </div>
                            <div className="flex-column footer-items ml-3">
                                <p className="text-sm white">Products</p>
                                <p className="text-xs white">Switch Pay</p>
                                <p className="text-xs white">Switch Wallet</p>
                                <p className="text-xs white">Switch Cards</p>
                                <p className="text-xs white">Lending</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Body>

        </LandingPageStyle>
    )
  
}

export default LandingPage;

const LandingPageStyle = styled.div`
    .text-xs {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
    .text-sm {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
    .btn {
        flex-direction: row;
        align-items: flex-start;
        width: 160px;
        height: 46px;
        background: #FB5E04;
        border-radius: 5px;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
        border: none;
        cursor: pointer;
    }
    .text-xl {
        font-style: normal;
        font-weight: 900;
        font-size: 68px;
        line-height: 84px;
        color: #10192D;
        margin-bottom: 10px;
    }
    .orange {
        color: #FB5E04 !important;
    }
    .heading {
        font-style: normal;
        font-weight: 800;
        font-size: 36px;
        color: #060A1D;
        margin: 0px
    }
    .card-heading {
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        color: #000000;
    }
    .quality-card{
        width: 45%;
    }
    .white {
        color: #FAFAFA;
    }
    .testimony-card {
        max-width: 498px;
        min-height: 294px;
        background: #FFFFFF;
        box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        margin: 30px;
        padding: 25px;
    }
    .image {
        height: 34px;
        width: 34px;
        border-radius: 100%;
        background: grey;
    }
    .mini-heading {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #060A1D;
    }
    .footer-items {
        min-height: 300px;
    }
    .get-started-card {
        width: 898px;
        min-height: 342px;
        top: 146px;
        position: relative;
        background: #FFEFE6;
        border-radius: 10px;
        margin: auto;
        padding: 48px;
    }
    .max-width-568 {
        max-width: 568px;
        margin: auto;
    }
    @media (max-width: 900px) {
        .text-xl {
            font-style: normal;
            font-weight: 900;
            font-size: 38px;
            line-height: 38px;
            color: #10192D;
            margin-bottom: 10px;
        }
        .phone-image {
            img {
                width: 100%;
            }
        }
        .quality-card{
            width: 100%;
            margin-top: 10px;
        }
        .heading {
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            margin: 0px
        }
        .text-sm {
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 22px;
        }
        .card-heading {
            font-style: normal;
            font-weight: 800;
            font-size: 20px;
            color: #060A1D;
            margin: 0px
        }
        .text-xs {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            color: #000000;
        }
        .get-started-card {
            padding: 48px 20px 20px;
        }

    }
`;

const Header = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    padding: 10px 91px;
    background: linear-gradient(82.85deg, #FFF8F3 5.57%, #FFF5EF 86.67%);
    .icon {
        path{
           fill: #FB5E04;

        }
    }
    @media (max-width: 900px) {
        padding: 20px;

    }

`;

const Body = styled.div`
    padding-top: 50px;
    .section-1 {
        padding: 100px 91px 50px 91px;
        background: linear-gradient(82.85deg, #FFF8F3 5.57%, #FFF5EF 86.67%);
    }
    .responsive-flex {
        display: flex;
    }
    .section-2 {
        padding: 100px 91px 50px 91px;
    }
    .section-4 {
        background: #10192D;
    }
    .section-5 {
        background: #FFF8F3;
    }
    .section-6 {
        background: #10192D;
    }
    .lending-section {
        padding: 100px 91px 50px 91px;
        display: flex;
        flex-direction: column;
        background: #10192D;
        border-radius: 50px 50px 0px 0px;
    }
    .pay-section {
        padding: 100px 91px 100px 91px;
        display: flex;
        background: #FFF8F3;
        border-radius: 50px 50px 0px 0px;
    }
    .wallet-section {
        padding: 100px 91px 50px 91px;
        display: flex;
        background: #10192D;
        border-radius: 50px 50px 0px 0px;
        max-height: 418px;
        overflow-y: hidden;
        .img {
            position: relative;
            top: 57px;
        }
    }
    .cards-section {
        padding: 100px 91px 100px 91px;
        display: flex;
        background: #ffffff;
        border-radius: 50px 50px 0px 0px;
    }
    .footer-section {
        padding: 200px 91px 50px 91px;
        display: flex;
        background: #10192D;
        border-radius: 50px 50px 0px 0px;
    }
    @media (max-width: 900px) {
        padding-top: 80px;
        .responsive-flex {
            flex-direction: column;
        }
        .width-50 {
            width: 100% !important;
        }
        .section-1 {
            padding: 20px !important;
        }
        .section-2 {
            padding: 20px !important;
        }
        .lending-section {
            padding-top: 50px !important;
            padding: 20px;
        }
        .pay-section {
            padding-top: 50px !important;
            padding: 20px;
        }
        .wallet-section {
            padding-top: 50px !important;
            padding: 20px;
            max-height: 700px;
        }
        .footer-section {
            padding: 20px !important;
        }
        .cards-section {
            padding-top: 50px !important;
            padding: 20px;
        }
        .get-started-card{
            width: auto;
        }

    }

`;