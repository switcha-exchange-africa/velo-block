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

interface DashboardLayoutProps {
  children: any;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <VStack
      align="stretch"
      // maxH={["100vh", "100vh", "100vh", "100vh"]}
      h={["100vh"]}
      bg="mainBGColor"
      width={["100vh", "100vh", "unset", "unset"]}
    >
      <chakra.header id="header">
        <Flex w="100%" bg="#000" px="8">
          <Img
            src="/assets/svgs/Logo.svg"
            alt=""
            objectFit="contain"
            boxSize="16"
          />
          <HStack
            display={["none", "none", "flex", "flex"]}
            marginLeft="28"
            gap="6"
          >
            <Heading as="h4" size="md">
              Trade
            </Heading>
            <Heading as="h4" size="md">
              Wallet
            </Heading>
            <Heading as="h4" size="md">
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
            >
              English | NGN
            </Heading>
            <Img
              src="/assets/svgs/ToggleDarkMode.svg"
              alt=""
              objectFit="contain"
              boxSize=""
              display={["none", "none", "none", "unset"]}
            />
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
      >
        <GridItem colSpan={[0, 0, 2, 2]} color={"black"} rowSpan={[2, 2, 0, 0]}>
          <VStack
            justifyContent={["", "", "space-between", "space-between"]}
            flexDirection={["row", "row", "column", "column"]}
            h={"100%"}
            py={["20px", "20px", "unset", "unset"]}
            boxShadow={["dark-lg", "dark-lg", "unset", "unset"]}
            borderRadius={["30px 30px 0 0", "30px 30px 0 0", "unset", "unset"]}
          >
            <HStack
              px={[0, 0, 8, 8]}
              py={[0, 0, 4, 4]}
              width={"100%"}
              flexDirection={["column", "column", "row", "row"]}
              alignItems={["center"]}
            >
              <Img
                src="/assets/svgs/dashboard/Home.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text
                fontSize={["10px", "10px", "lg", "lg"]}
                fontWeight={["700", "700", "", ""]}
                margin={["0"]}
              >
                Home
              </Text>
            </HStack>
            <HStack
              px={[0, 0, 8, 8]}
              py={[0, 0, 4, 4]}
              width={"100%"}
              flexDirection={["column", "column", "row", "row"]}
            >
              <Img
                src="/assets/svgs/dashboard/QuickTrade.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text
                fontSize={["10px", "10px", "lg", "lg"]}
                fontWeight={["700", "700", "", ""]}
              >
                Quick Trade
              </Text>
            </HStack>
            <HStack
              px={[0, 0, 8, 8]}
              py={[0, 0, 4, 4]}
              width={"100%"}
              flexDirection={["column", "column", "row", "row"]}
            >
              <Img
                src="/assets/svgs/dashboard/P2P.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text
                fontSize={["10px", "10px", "lg", "lg"]}
                fontWeight={["700", "700", "", ""]}
              >
                P2P
              </Text>
            </HStack>
            <HStack
              px={[0, 0, 8, 8]}
              py={[0, 0, 4, 4]}
              width={"100%"}
              flexDirection={["column", "column", "row", "row"]}
            >
              <Img
                src="/assets/svgs/dashboard/Swap.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text
                fontSize={["10px", "10px", "lg", "lg"]}
                fontWeight={["700", "700", "", ""]}
              >
                Swap
              </Text>
            </HStack>
            <HStack
              px={[0, 0, 8, 8]}
              py={[0, 0, 4, 4]}
              width={"100%"}
              flexDirection={["column", "column", "row", "row"]}
              display={["flex", "flex", "none", "none"]}
            >
              <Img
                src="/assets/svgs/dashboard/More.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text
                fontSize={["10px", "10px", "lg", "lg"]}
                fontWeight={["700", "700", "", ""]}
              >
                More
              </Text>
            </HStack>
            <HStack
              px={8}
              py={4}
              width={"100%"}
              display={["none", "none", "flex", "flex"]}
            >
              <Img
                src="/assets/svgs/dashboard/QuickTrade.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text fontSize={"lg"}>Wallet</Text>
            </HStack>
            <HStack
              px={8}
              py={4}
              width={"100%"}
              display={["none", "none", "flex", "flex"]}
            >
              <Img
                src="/assets/svgs/dashboard/FAQs.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text fontSize={"lg"}>FAQs</Text>
            </HStack>
            <HStack
              px={8}
              py={4}
              width={"100%"}
              display={["none", "none", "flex", "flex"]}
            >
              <Img
                src="/assets/svgs/dashboard/Settings.svg"
                alt=""
                objectFit="contain"
                boxSize=""
              />
              <Text fontSize={"lg"}>Settings</Text>
            </HStack>
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
        >
          {children}
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default DashboardLayout;
