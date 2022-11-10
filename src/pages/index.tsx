import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
// import { checkValidToken } from "../helpers/functions/checkValidToken";
import { useAppDispatch, useAppSelector } from "../helpers/hooks/reduxHooks";
import { getTokenFromLocalStorage } from "../redux/features/auth/authSlice";
import DashboardPage from "./dashboard";
import SignUpPage from "./signup/index";

const Home: NextPage = () => {
  const { token } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch();
  console.log("HOME PAGE")

  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker.register('../helpers/sw.ts', {
  //     scope: '../helpers/',
  //   });
  // }

  useEffect(() => {
    const checkForToken = () => {
      dispatch(getTokenFromLocalStorage())
      // alert(token)
      // if (!token) {
      //   router.replace('/signin')
      // }
    }
    checkForToken()
  }, [dispatch])
  return (
    <div>
      <Head>
        <title>Switcha</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/svgs/logo-single.svg" />
      </Head>
      {!token ? <SignUpPage /> : <DashboardPage />}

    </div>
  );
};

// export const getServerSideProps: GetServerSideProps = async (context) => {

//   return checkValidToken(context)

// }

export default Home;
