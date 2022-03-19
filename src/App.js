import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import './styles/misc.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './components/GettingStarted/welcome/Welcome';
import SignupPage from './components/GettingStarted/Signup/SignupPage';
import LoginPage from './components/GettingStarted/Login/loginPage';
import LoginVerificationPage from './components/GettingStarted/LoginVerification/LoginVerificationPage';
import HomePage from './components/AuthenticatedApp/HomePage/HomePage';
import AddWallet from './components/AuthenticatedApp/AddWallet/AddWallet';
import BuyCoin from './components/AuthenticatedApp/BuyCoin/BuyCoin';
import PreviewOrder from './components/AuthenticatedApp/BuyCoin/PreviewOrder';
import OnboardingNavBar from './components/NavBars/OnboardingNavBar';



function App() {
  const [theme] = useState("light");
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
          {/* <OnboardingNavBar/> */}
          <Routes>

            <Route path="/" element={<Welcome/>} />
            <Route path="signup" element={<SignupPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="verifylogin" element={<LoginVerificationPage/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="add-wallet" element={<AddWallet/>}/>
            <Route path="buy" element={<BuyCoin/>} />
            <Route path="preview" element={<PreviewOrder/>} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
