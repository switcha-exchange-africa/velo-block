import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../helpers/hooks/reduxHooks";
import { getTokenFromLocalStorage } from "../redux/features/auth/authSlice";
import DashboardPage from "./dashboard";
import SignUpPage from "./signup/index";

const Home: NextPage = () => {
  const { token } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch();
  const checkForToken = () => {
    dispatch(getTokenFromLocalStorage())
    // alert(token)
    // if (!token) {
    //   router.replace('/signin')
    // }
  }

  useEffect(() => {
    checkForToken()
  }, [])
  return (
    <div>
      <Head>
        <title>Switcha</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!token ? <SignUpPage /> : <DashboardPage />}

    </div>
  );
};

export default Home;
