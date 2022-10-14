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
} from "@chakra-ui/react";
import DashBoardSidBarOptionComponent from "../../components/dashboard/DashBoardSidBarOptionComponent";
import { useRouter } from "next/router";

interface DashboardLayoutProps {
  children: any;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const router = useRouter()

  return (
    <Flex
      align="stretch"
      // maxH={["100vh", "100vh", "100vh", "100vh"]}
      flexDirection={'column'}
      h={{ lg: "100vh", md: "100vh", sm: "100vh", base: "100vh" }}
      // h={["100vh"]}
      bg="mainBGColor"
      width={["100%", "100%", "unset", "unset"]}
    // overflowY={'scroll'}
    >
      <chakra.header id="header">
        <Flex w="100%" bg="#000" px="8">
          <Img src="/assets/svgs/Logo.svg" alt="" objectFit="cover" py={'4'} />
          <HStack
            display={["none", "none", "flex", "flex"]}
            marginLeft="28"
            gap="6"
          >
            <Heading as="h4" size="md" color={'appWhiteColor'}>
              Trade
            </Heading>
            <Heading as="h4" size="md" color={'appWhiteColor'}>
              Wallet
            </Heading>
            <Heading as="h4" size="md" color={'appWhiteColor'}>
              Swap
            </Heading>
          </HStack>
          <HStack marginLeft="auto">
            <Img
              src="/assets/svgs/UserAvatar.svg"
              alt=""
              objectFit="contain"
              boxSize=""
              mr={8}
            />
            <Heading
              display={["none", "none", "none", "unset"]}
              as="h4"
              size="md"
              color={'appWhiteColor'}
            >
              English | NGN
            </Heading>
            {/* <Img
              src="/assets/svgs/ToggleDarkMode.svg"
              alt=""
              objectFit="contain"
              boxSize=""
              display={["none", "none", "none", "unset"]}
            /> */}
          </HStack>
        </Flex>
      </chakra.header>
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
            justifyContent={["", "", "space-between", "space-between"]}
            flexDirection={["row", "row", "column", "column"]}
            h={"100%"}
            py={["20px", "20px", "10px", "20px"]}
            boxShadow={["dark-lg", "dark-lg", "unset", "unset"]}
            borderRadius={["30px 30px 0 0", "30px 30px 0 0", "unset", "unset"]}
          >
            <DashBoardSidBarOptionComponent label="Home" route="dashboard" onClick={() => router.push('/dashboard')}>
              <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.293 7.70697L7.293 0.706971C7.6835 0.316589 8.3165 0.316589 8.707 0.706971L15.707 7.70697C15.8945 7.89446 16 8.14878 16 8.41397V18C16 18.5523 15.5523 19 15 19H10V12H6V19H1C0.447715 19 0 18.5523 0 18V8.41397C0 8.14878 0.105451 7.89446 0.293 7.70697Z" fill={router.pathname.includes('dashboard') ? 'rgba(251, 94, 4, 1)' : 'white'} />
              </svg>
            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="Quick Trade" route="trade" onClick={() => router.push('/quick-trade')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.85 3.94999V7.74999H13.35V3.94999C13.35 3.67999 13.11 3.54999 12.95 3.54999C12.9 3.54999 12.85 3.55999 12.8 3.57999L4.87 6.56999C4.34 6.76999 4 7.26999 4 7.83999V8.50999C3.09 9.18999 2.5 10.28 2.5 11.51V7.83999C2.5 6.64999 3.23 5.58999 4.34 5.16999L12.28 2.16999C12.5 2.08999 12.73 2.04999 12.95 2.04999C13.95 2.04999 14.85 2.85999 14.85 3.94999Z" fill={router.pathname.includes('trade') ? 'rgba(251, 94, 4, 1)' : 'white'} />
                <path d="M21.4999 14.5V15.5C21.4999 15.77 21.2899 15.99 21.0099 16H19.5499C19.0199 16 18.5399 15.61 18.4999 15.09C18.4699 14.78 18.5899 14.49 18.7899 14.29C18.9699 14.1 19.2199 14 19.4899 14H20.9999C21.2899 14.01 21.4999 14.23 21.4999 14.5Z" fill={router.pathname.includes('trade') ? 'rgba(251, 94, 4, 1)' : 'white'} />
                <path d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill={router.pathname.includes('trade') ? 'rgba(251, 94, 4, 1)' : 'white'} />
              </svg>
            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="P2P" route="p2p" disabled>
              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0H2C0.9 0 0 1.05 0 2.33333V18.6667C0 19.95 0.9 21 2 21H16C17.1 21 18 19.95 18 18.6667V2.33333C18 1.05 17.1 0 16 0ZM10 16.3333H5C4.45 16.3333 4 15.8083 4 15.1667C4 14.525 4.45 14 5 14H10C10.55 14 11 14.525 11 15.1667C11 15.8083 10.55 16.3333 10 16.3333ZM13 11.6667H5C4.45 11.6667 4 11.1417 4 10.5C4 9.85833 4.45 9.33333 5 9.33333H13C13.55 9.33333 14 9.85833 14 10.5C14 11.1417 13.55 11.6667 13 11.6667ZM13 7H5C4.45 7 4 6.475 4 5.83333C4 5.19167 4.45 4.66667 5 4.66667H13C13.55 4.66667 14 5.19167 14 5.83333C14 6.475 13.55 7 13 7Z" fill={router.pathname.toLowerCase().includes('p2p') ? 'rgba(251, 94, 4, 1)' : 'white'} />
              </svg>
            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="Swap" route="swap" onClick={() => router.push('/swap')}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2803 8.5236L19.0002 4.76177L15.2803 1" stroke={router.pathname.toLowerCase().includes('swap') ? 'rgba(251, 94, 4, 1)' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1 4.76172H19" stroke={router.pathname.toLowerCase().includes('swap') ? 'rgba(251, 94, 4, 1)' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.71997 11.6584L1 15.4203L4.71997 19.182" stroke={router.pathname.toLowerCase().includes('swap') ? 'rgba(251, 94, 4, 1)' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 15.4203H1" stroke={router.pathname.toLowerCase().includes('swap') ? 'rgba(251, 94, 4, 1)' : 'white'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </DashBoardSidBarOptionComponent>


            <DashBoardSidBarOptionComponent label="Wallet" route="wallet" onClick={() => router.push('/wallet')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.85 3.94999V7.74999H13.35V3.94999C13.35 3.67999 13.11 3.54999 12.95 3.54999C12.9 3.54999 12.85 3.55999 12.8 3.57999L4.87 6.56999C4.34 6.76999 4 7.26999 4 7.83999V8.50999C3.09 9.18999 2.5 10.28 2.5 11.51V7.83999C2.5 6.64999 3.23 5.58999 4.34 5.16999L12.28 2.16999C12.5 2.08999 12.73 2.04999 12.95 2.04999C13.95 2.04999 14.85 2.85999 14.85 3.94999Z" fill={router.pathname.includes('wallet') ? 'rgba(251, 94, 4, 1)' : 'white'} />
                <path d="M21.4999 14.5V15.5C21.4999 15.77 21.2899 15.99 21.0099 16H19.5499C19.0199 16 18.5399 15.61 18.4999 15.09C18.4699 14.78 18.5899 14.49 18.7899 14.29C18.9699 14.1 19.2199 14 19.4899 14H20.9999C21.2899 14.01 21.4999 14.23 21.4999 14.5Z" fill={router.pathname.includes('wallet') ? 'rgba(251, 94, 4, 1)' : 'white'} />
                <path d="M19.48 12.95H20.5C21.05 12.95 21.5 12.5 21.5 11.95V11.51C21.5 9.44 19.81 7.75 17.74 7.75H6.26C5.41 7.75 4.63 8.03 4 8.51C3.09 9.19 2.5 10.28 2.5 11.51V18.24C2.5 20.31 4.19 22 6.26 22H17.74C19.81 22 21.5 20.31 21.5 18.24V18.05C21.5 17.5 21.05 17.05 20.5 17.05H19.63C18.67 17.05 17.75 16.46 17.5 15.53C17.29 14.77 17.54 14.04 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95ZM14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill={router.pathname.includes('wallet') ? 'rgba(251, 94, 4, 1)' : 'white'} />
              </svg>
            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="FAQs" route="faq" >
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0.682037C5.376 0.682037 0 6.05804 0 12.682C0 19.306 5.376 24.682 12 24.682C18.624 24.682 24 19.306 24 12.682C24 6.05804 18.624 0.682037 12 0.682037ZM12 22.282C6.708 22.282 2.4 17.974 2.4 12.682C2.4 7.39004 6.708 3.08204 12 3.08204C17.292 3.08204 21.6 7.39004 21.6 12.682C21.6 17.974 17.292 22.282 12 22.282ZM10.8 17.482H13.2V19.882H10.8V17.482ZM12.732 5.53004C10.26 5.17004 8.076 6.69404 7.416 8.87804C7.2 9.57404 7.728 10.282 8.46 10.282H8.7C9.192 10.282 9.588 9.93404 9.756 9.47804C10.14 8.41004 11.28 7.67804 12.516 7.94204C13.656 8.18204 14.496 9.29804 14.4 10.462C14.28 12.07 12.456 12.418 11.46 13.918C11.46 13.93 11.448 13.93 11.448 13.942C11.436 13.966 11.424 13.978 11.412 14.002C11.304 14.182 11.196 14.386 11.112 14.602C11.1 14.638 11.076 14.662 11.064 14.698C11.052 14.722 11.052 14.746 11.04 14.782C10.896 15.19 10.8 15.682 10.8 16.282H13.2C13.2 15.778 13.332 15.358 13.536 14.998C13.56 14.962 13.572 14.926 13.596 14.89C13.692 14.722 13.812 14.566 13.932 14.422C13.944 14.41 13.956 14.386 13.968 14.374C14.088 14.23 14.22 14.098 14.364 13.966C15.516 12.874 17.076 11.986 16.752 9.69404C16.464 7.60604 14.82 5.84204 12.732 5.53004Z" fill={router.pathname.includes('faq') ? 'rgba(251, 94, 4, 1)' : 'white'} />
              </svg>
            </DashBoardSidBarOptionComponent>

            <DashBoardSidBarOptionComponent label="Settings" route="setting" onClick={() => router.push('/settings')}>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8199 22.182H10.1799C9.71003 22.182 9.30347 21.855 9.20292 21.396L8.79592 19.512C8.25297 19.2741 7.73814 18.9766 7.26092 18.625L5.42392 19.21C4.97592 19.3529 4.4889 19.1643 4.25392 18.757L2.42992 15.606C2.19751 15.1985 2.27758 14.6845 2.62292 14.367L4.04792 13.067C3.98312 12.4781 3.98312 11.8839 4.04792 11.295L2.62292 9.99801C2.27707 9.68037 2.19697 9.16573 2.42992 8.75801L4.24992 5.60501C4.48491 5.1977 4.97192 5.00914 5.41992 5.15201L7.25692 5.73701C7.50098 5.55616 7.75505 5.38923 8.01792 5.23701C8.27026 5.0947 8.52995 4.96585 8.79592 4.85101L9.20392 2.96901C9.30399 2.50998 9.71011 2.1825 10.1799 2.18201H13.8199C14.2897 2.1825 14.6958 2.50998 14.7959 2.96901L15.2079 4.85201C15.4887 4.97552 15.7622 5.11509 16.0269 5.27001C16.2742 5.41278 16.5132 5.56936 16.7429 5.73901L18.5809 5.15401C19.0286 5.01168 19.515 5.20017 19.7499 5.60701L21.5699 8.76001C21.8023 9.16749 21.7223 9.68152 21.3769 9.99901L19.9519 11.299C20.0167 11.8879 20.0167 12.4821 19.9519 13.071L21.3769 14.371C21.7223 14.6885 21.8023 15.2025 21.5699 15.61L19.7499 18.763C19.515 19.1698 19.0286 19.3583 18.5809 19.216L16.7429 18.631C16.5103 18.8023 16.2687 18.9609 16.0189 19.106C15.7567 19.2579 15.4863 19.3951 15.2089 19.517L14.7959 21.396C14.6954 21.8546 14.2894 22.1816 13.8199 22.182ZM11.9959 8.18201C9.78678 8.18201 7.99592 9.97287 7.99592 12.182C7.99592 14.3911 9.78678 16.182 11.9959 16.182C14.2051 16.182 15.9959 14.3911 15.9959 12.182C15.9959 9.97287 14.2051 8.18201 11.9959 8.18201Z" fill={router.pathname.includes('setting') ? 'rgba(251, 94, 4, 1)' : 'white'} />
              </svg>

            </DashBoardSidBarOptionComponent>

            <Divider bg={"black"} display={["none", "none", "flex", "flex"]} />
            <HStack
              justifyContent={"center"}
              py={4}
              width={"100%"}
              marginTop={"auto"}
              display={["none", "none", "flex", "flex"]}
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
        >
          {children}
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default DashboardLayout;
