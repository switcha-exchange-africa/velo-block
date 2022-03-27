import { useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/Global";
import './styles/misc.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from './components/GettingStarted/Signup/SignupPage';
import LoginPage from './components/GettingStarted/Login/loginPage';
import OnboardingNavBar from './components/NavBars/OnboardingNavBar';
import PublicRoute from './auth/PublicRoute';
import PrivateRoute from './auth/PrivateRoute';
import MainRoutes from "./components/Routes/Main.routes"



function App() {
  const [theme] = useState("light");
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ theme }}>
        <GlobalStyles />
          <OnboardingNavBar/>
          <Routes>
            <Route path="signup" element={<SignupPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="*" element={<PrivateRoute Component = {MainRoutes}/>} />
            {/* <Route path="verifylogin" element={<LoginVerificationPage/>}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="add-wallet" element={<AddWallet/>}/>
            <Route path="buy" element={<BuyCoin/>} />
            <Route path="preview" element={<PreviewOrder/>} /> */}
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
