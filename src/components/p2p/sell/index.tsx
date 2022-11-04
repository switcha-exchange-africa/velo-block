import React from 'react'
import { CheckCircleIcon } from "@chakra-ui/icons"
import {
  Avatar, Box, Button, Flex, Input,
  InputGroup,
  InputRightAddon,  Modal, ModalBody, ModalCloseButton,
  ModalContent, Tab,
  TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure
} from "@chakra-ui/react"
import { useRouter } from 'next/router';
import P2pTopfilter from '../filter';
import TableComponent from '../../table/TableContainer';
import { useGetSellAdsUSDTQuery } from '../../../redux/services/p2p-ads.service';
import { P2pAdsComponentProps } from '../../../interfaces/p2p-ads/P2pAdsComponent';

const SellP2p = ({pageNumber, handlePreviousPage, handleNextPage}: P2pAdsComponentProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const { data:usdt } = useGetSellAdsUSDTQuery({arg: "USDT" , pageNumber: `${pageNumber}`})
    
    
    return (
        <>
            <Modal  blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalContent
                    maxW={["100%", "100%", "65.2em"]}
                    top={["0", "0", "21rem"]}
                    left={["0", "0", "6rem"]}
                    py="10px"
                >
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex
                            flexDir={["column", "column", "row"]}
                            gap={["20px", "20px", 0]}
                        >
                            <Box flex={1}>
                            <Box
                                display={"flex"}
                                flexDir={["column", "column", "row"]}
                                alignItems={["flex-start", "flex-start", "center"]}
                                gap="5px"
                            >
                                <Avatar
                                    size={"md"}
                                    background={"#FB5E04"}
                                    name="Maximus"
                                ></Avatar>
                                <Box display={"flex"} gap="10px">
                                <Box display={"flex"} alignItems={"center"} gap="3px">
                                    <Text fontSize={"sm"}>Maximus</Text>
                                    <CheckCircleIcon
                                        color={"#22C36B"}
                                        w={"10px"}
                                        h={"10px"}
                                    />
                                </Box>
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap="3px"
                                    fontSize={"xs"}
                                    color="#8E9BAE"
                                >
                                    <Text>1534 orders</Text>|<Text>92.19% completion</Text>
                                </Box>
                                </Box>
                            </Box>
                            <Box
                                fontSize={"xs"}
                                marginLeft={["0px", "0px", "40px"]}
                                width={["auto", "auto", "450px"]}
                            >
                                <Flex
                                    mb={"10px"}
                                    wrap={"wrap"}
                                    flexDir={["column", "column", "row"]}
                                    alignItems={["flex-start", "flex-start", "center"]}
                                    gap={["5px", "5px", "100px"]}
                                >
                                <Box display={"flex"} gap="10px">
                                    <Text color={"#8E9BAE"}>Price</Text>
                                    <Text>580.89NGN</Text>
                                </Box>

                                <Box display={"flex"} gap="10px">
                                    <Text color={"#8E9BAE"}>Available</Text>
                                    <Text>963.16 USDT</Text>
                                </Box>
                                </Flex>
                                <Flex
                                    mb={"10px"}
                                    wrap={"wrap"}
                                    flexDir={["column", "column", "row"]}
                                    alignItems={["flex-start", "flex-start", "center"]}
                                    gap={["5px", "5px", "40px"]}
                                >
                                <Box display={"flex"} gap="10px">
                                    <Text color={"#8E9BAE"}>Payment Time Limit</Text>
                                    <Text>15 mins</Text>
                                </Box>

                                <Box alignItems={"center"} display={"flex"} gap="10px">
                                    <Text color={"#8E9BAE"}>Buyer’s payment method</Text>
                                    <Text
                                        fontSize={"10px"}
                                        textAlign={"center"}
                                        background={"#FFF7F2"}
                                        color={"#FB5E04"}
                                        borderRadius={"3px"}
                                    >
                                        Bank Transfer
                                    </Text>
                                </Box>
                                </Flex>
                                <Box>
                                <Text mt={"10px"} color="#FB5E04">
                                    Terms and Condition
                                </Text>
                                <Text color={"#8E9BAE"}>
                                    Always online making fast payment
                                </Text>
                                </Box>
                            </Box>
                            </Box>
                            <Box flex={1} borderLeft={["0", "0", "1px solid  #E2E8F0"]}>
                            <Box w={["full", "full", "300px"]} margin={"0px auto"}>
                                <Box mb={"10px"}>
                                <Text fontSize={"xs"}>I want to Sell </Text>
                                <InputGroup size="sm">
                                    <Input
                                        borderTopLeftRadius={"5px"}
                                        borderBottomLeftRadius={"5px"}
                                        placeholder="Enter amount NGN"
                                        borderRight={"none"}
                                    />
                                    <InputRightAddon background={"none"} borderLeft="0px">
                                    <Flex gap={"20px"}>
                                        <Text fontSize={"sm"}>All</Text>
                                        <Text fontSize={"sm"}>USDT</Text>
                                    </Flex>
                                    </InputRightAddon>
                                </InputGroup>
                                </Box>
                                <Box mb={"10px"}>
                                <Text fontSize={"xs"}>I will recieve </Text>
                                <InputGroup size="sm">
                                    <Input
                                        borderTopLeftRadius={"5px"}
                                        borderBottomLeftRadius={"5px"}
                                        placeholder="Enter amount NGN"
                                        borderRight={"none"}
                                    />
                                    <InputRightAddon background={"none"} borderLeft="0px">
                                    <Flex gap={"20px"}>
                                        <Text fontSize={"sm"}>All</Text>
                                        <Text fontSize={"sm"}>NGN</Text>
                                    </Flex>
                                    </InputRightAddon>
                                </InputGroup>
                                </Box>
                                <Box>
                                <Text fontSize={"xs"}>Payment Method </Text>
                                <Flex
                                    alignItems={"center"}
                                    justifyContent="space-between"
                                    border={"1px solid #E2E8F0"}
                                    padding="5px 10px"
                                    borderRadius={"5px"}
                                    mb={"10px"}
                                >
                                    <Box display={"flex"} gap="10px" alignItems={"center"}>
                                    <Text
                                        fontSize={"10px"}
                                        textAlign={"center"}
                                        background={"#FFF7F2"}
                                        color={"#FB5E04"}
                                        borderRadius={"3px"}
                                    >
                                        Bank Transfer
                                    </Text>
                                    <Text fontSize={"xs"}>1522574741</Text>
                                    </Box>
                                    <Box>
                                    <Text fontSize={"sm"}>NGN</Text>
                                    </Box>
                                </Flex>
                                </Box>
                                <Box>
                                <Flex gap={"10px"} justifyContent="center">
                                    <Button>Cancel</Button>
                                    <Button
                                    onClick={() => {
                                        router.push("/p2p/sell");
                                    }}
                                        color={"#fff"}
                                        background={"#EB4335"}
                                    >
                                        Sell USDT
                                    </Button>
                                </Flex>
                                </Box>
                            </Box>
                            </Box>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            
            <Tabs variant="unstyled" mt={["20px"]} px={["0", "0px", "28px", "28px"]}>
                <TabList gap={"60px"}>
                    <Tab
                        _selected={{
                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        BTC
                    </Tab>
                    <Tab
                        _selected={{
                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        ETH
                    </Tab>
                    <Tab
                        _selected={{
                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        USDT
                    </Tab>
                    <Tab
                        _selected={{
                            color: "black",
                            borderBottom: "1px solid #FB5E04",
                        }}
                        padding={0}
                        fontSize={"small"}
                    >
                        USDC
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel paddingLeft={0}>
                        
                        <P2pTopfilter routeName='sell-ads'/>
                        <p>BTC</p>
                    </TabPanel>

                    <TabPanel paddingLeft={0}>    
                        <P2pTopfilter routeName='sell-ads'/>
                        <p>ETH</p>
                    </TabPanel>

                    <TabPanel paddingLeft={0}>
                        <P2pTopfilter routeName='sell-ads'/>
                        {usdt?.data?.length !== 0 ? (
                            <TableComponent
                                buttonTitle="SELL USDT"
                                backgroundColor="#EB4335"    
                                apiData={usdt}
                                handlePreviousPage = { handlePreviousPage }
                                handleNextPage={handleNextPage}
                                onClick={onOpen}
                            />      
                        ) : "NO BUY ADS YET"}
                    </TabPanel>
                    
                    <TabPanel paddingLeft={0}>
                        <P2pTopfilter routeName='sell-ads'/>
                        <p>USDC</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default SellP2p



