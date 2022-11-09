import React from "react";

import {
  VStack,
  chakra,
  Flex,
  Img,
  Heading,
  HStack,
  Grid,
  GridItem,
  Text,
  Divider,
  Show,
} from "@chakra-ui/react";
import DashBoardSidBarOptionComponent from "../../components/dashboard/DashBoardSidBarOptionComponent";
import { useRouter } from "next/router";
// import { useAppDispatch, useAppSelector } from "../../helpers/hooks/reduxHooks";
// import { getTokenFromLocalStorage } from "../../redux/features/auth/authSlice";
// import LoginPage from "../../pages/signin";
// import { useGetUserQuery } from "../../redux/services/auth.service";
// import appAlert from "../../helpers/appAlert";
// import RenderSwitchaLogo from "../../components/dashboard/RenderSwitchaLogo";
import { useAppDispatch } from "../../helpers/hooks/reduxHooks";
import { removeTokenFromLocalStorage } from "../../redux/features/auth/authSlice";
import Head from "next/head";


interface DashboardLayoutProps {
  children: any;
  title: string
}

const DashboardLayout = ({ children, title }: DashboardLayoutProps) => {
  const router = useRouter()
  // const { token } = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch();
  // const getUser: any = useGetUserQuery(undefined, { refetchOnFocus: true, refetchOnReconnect: true })
  // const checkForToken = () => {
  //   dispatch(getTokenFromLocalStorage())
  //   // getUser.isFetching
  //   // alert(token)
  //   // if (!token) {
  //   //   router.replace('/signin')
  //   // }
  // }

  // useEffect(() => {
  //   checkForToken()
  // }, [])

  // if (getUser?.isFetching) {
  //   return (<Flex w={'full'} h={'100vh'} alignItems={'center'} justifyContent={'center'} color={'rgba(100, 116, 139, 1)'}><RenderSwitchaLogo /></Flex>)
  // }

  // if (getUser?.error?.data?.status == 401) {
  //   // appAlert.warning('Session Expired, please sign in again')
  //   return (<LoginPage />)
  // }

  // if (!token) {
  //   return (<LoginPage />)
  // }



  // React.useEffect(() => {
  //   if (getUser?.error?.data?.status == 401) {
  //     // alert(JSON.stringify(getUser))
  //     router.push('/signin')
  //   }
  //   if (getUser?.isFetching) {
  //     router.push('/dashboard')
  //   }
  // }, [getUser, getUser?.error?.data?.status, router])

  return (
    <Flex
      // align="stretch"
      // maxH={["100vh", "100vh", "100vh", "100vh"]}
      flexDirection={'column'}
      h={{ lg: "100vh", md: "100vh", sm: "100vh", base: "100vh" }}
      // h={["100vh"]}
      bg="mainBGColor"
      width={["100%", "100%", "unset", "unset"]}
    // justify="stretch"
    // overflowY={'scroll'}

    >
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/svgs/logo-single.svg" />
      </Head>
      <chakra.header id="header">
        <Flex w="100%" bg="#000" px={{ md: "8", base: '4' }} >
          <Img src="/assets/svgs/Logo.svg" alt="" w={'32'} py='4' cursor={'pointer'} onClick={() => router.push('/dashboard')} />
          <HStack
            display={["none", "none", "flex", "flex"]}
            marginLeft="28"
            gap="6"
          >
            <Heading as="h4" size="md" color={'appWhiteColor'} cursor={'pointer'}>
              Trade
            </Heading>
            <Heading as="h4" size="md" color={'appWhiteColor'} cursor={'pointer'} onClick={() => router.push('/wallet')}>
              Wallet
            </Heading>
            <Heading as="h4" size="md" color={'appWhiteColor'} cursor={'pointer'} onClick={() => router.push('/swap')}>
              Swap
            </Heading>
            <Heading as="h4" size="md" color={router.pathname.includes('order') ? 'primaryColor.900' : 'appWhiteColor'} cursor={'pointer'} onClick={() => router.push('/quick-trade/order')}>
              All Orders
            </Heading>
          </HStack>
          <HStack marginLeft="auto">
            <Img
              src="/assets/svgs/UserAvatar.svg"
              alt=""
              objectFit="contain"
              boxSize=""
              mr={{ md: 8, base: 0 }}
            />
            <Heading
              display={["none", "none", "none", "unset"]}
              as="h4"
              size="md"
              color={'appWhiteColor'}
            >
              English | NGN
            </Heading>

          </HStack>
        </Flex>
      </chakra.header>
      <Show below="sm">
        {router.pathname.includes('trade') && <chakra.header>
          <Flex boxShadow={'md'} w={'100%'} bg={'#ffffff'} px={'4'}>
            <Text py={'4'} fontWeight={'medium'} size="md" cursor={'pointer'} onClick={() => router.push('/quick-trade/order')}>
              All Orders
              {router.pathname.includes('order') && <Divider borderColor={'primaryColor.900'} />}
            </Text>
          </Flex>
        </chakra.header>}
      </Show>
      {/* <Flex color="black">{children}</Flex> */}
      <Grid
        templateColumns={[
          "unset",
          "unset",
          "repeat(12, 1fr)",
          "repeat(12, 1fr)",
        ]}
        templateRows={["repeat(12, 1fr)", "repeat(12, 1fr)", "unset", "unset"]}
        h="full"
        display={["flex", "flex", "", ""]}
        flexDirection={["column-reverse", "column-reverse", "unset", "unset"]}
        overflowY={'scroll'}
      >
        <GridItem colSpan={[0, 0, 2, 2]} color={"black"} rowSpan={[2, 2, 0, 0]}>
          <VStack
            bg="#FFFFFF"
            justifyContent={["", "", "space-between", "space-between"]}
            flexDirection={["row", "row", "column", "column"]}
            h={"100%"}
            // py={["20px", "20px", "10px", "5px"]}
            py={{ base: '5px', md: '8' }}
            boxShadow={["dark-lg", "dark-lg", "unset", "unset"]}
            borderRadius={["30px 30px 0 0", "30px 30px 0 0", "unset", "unset"]}
          >
            <DashBoardSidBarOptionComponent label="Home" route="dashboard" onClick={() => router.push('/dashboard')}>
              <Show above="md">
                {router.pathname.includes('dashboard') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/Home.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/desktop/unselected/Home.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}

              </Show>
              <Show below="sm">
                {router.pathname.includes('dashboard') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/Home.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/mobile/unselected/Home.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>

            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="Quick Trade" route="trade" onClick={() => router.push('/quick-trade')}>
              <Show above="md">
                {router.pathname.includes('trade') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/QuickTrade.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/desktop/unselected/QuickTrade.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}

              </Show>
              <Show below="sm">
                {router.pathname.includes('trade') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/QuickTrade.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/mobile/unselected/QuickTrade.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}

              </Show>

            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="P2P" route="p2p" onClick={() => router.push('/p2p')}>
              <Show above="md">
                {router.pathname.includes('p2p') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/P2P.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/desktop/unselected/P2P.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>
              <Show below="sm">
                {router.pathname.includes('p2p') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/P2P.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/mobile/unselected/P2P.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>

            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="Swap" route="swap" onClick={() => router.push('/swap')}>
              <Show above="md">
                {router.pathname.includes('swap') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/Swap.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/desktop/unselected/Swap.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>
              <Show below="sm">
                {router.pathname.includes('swap') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/Swap.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/mobile/unselected/Swap.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>

            </DashBoardSidBarOptionComponent>


            <DashBoardSidBarOptionComponent label="Wallet" route="wallet" onClick={() => router.push('/wallet')}>
              <Show above="md">
                {router.pathname.includes('wallet') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/Wallet.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/desktop/unselected/Wallet.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>
              <Show below="sm">
                {router.pathname.includes('wallet') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/Wallet.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/mobile/unselected/Wallet.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>

            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="FAQs" route="faq" >
              <Show above="md">
                {router.pathname.includes('faq') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/FAQS.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/desktop/unselected/FAQS.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>
              <Show below="sm">
                {router.pathname.includes('faq') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/FAQS.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/mobile/unselected/FAQS.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>

            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="Settings" route="setting" onClick={() => router.push('/settings')}>
              <Show above="md">
                {router.pathname.includes('setting') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/SETTINGS.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/desktop/unselected/SETTINGS.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>
              <Show below="sm">
                {router.pathname.includes('setting') ? <Img
                  src="/assets/svgs/dashboard/desktop/selected/SETTINGS.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                /> : <Img
                  src="/assets/svgs/dashboard/mobile/unselected/SETTINGS.svg"
                  alt=""
                  objectFit="contain"
                  boxSize=""
                />}
              </Show>

            </DashBoardSidBarOptionComponent>

            <Divider bg={"black"} display={["none", "none", "flex", "flex"]} />
            <HStack
              justifyContent={"center"}
              py={4}
              width={"100%"}
              marginTop={"auto"}
              display={["none", "none", "flex", "flex"]}
              cursor={'pointer'}
              onClick={() => { dispatch(removeTokenFromLocalStorage()); router.reload() }}
            >
              <Img
                src="/assets/svgs/dashboard/LogOut.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text fontSize={"lg"}>Log Out</Text>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem
          colSpan={[0, 0, 10, 10]}
          rowSpan={[10, 10, 0, 0]}
          color={"black"}
          flex={[1, 1, "", ""]}
          overflow={'scroll'}
          padding={{ lg: '8', base: '10px' }}
          sx={
            {
              '::-webkit-scrollbar': {
                display: 'none'
              }
            }
          }
        >
          {children}
        </GridItem>
      </Grid>
    </Flex>
  );
};


export default DashboardLayout;
