import { Box, Button, Flex, HStack, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
// import StepComponent from '../../../components/p2p/steps';
import DashboardLayout from "../../../layouts/dashboard/DashboardLayout";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useState } from 'react';

const BuyAds = () => {
    const [asset, setAsset] = useState('1')
    const [cash, setCash] = useState("1")
    
    return (
        <DashboardLayout title="P2P Buy Ads">
            <Box left="13%" py={"24px"} top={"62px"} bg={"white"} w={"85%"} position={"fixed"} pl={"90px"}>
                <Text fontSize={"32px"} fontWeight={"600"}>Post Normal Ads</Text>
            </Box>

            {/* <StepComponent/> */}

            <Box mt="100px" bg="#FFFFFF" mx="20px" fontFamily={"Open Sans"}>
                <Tabs variant='unstyled' w="100%" >
                    <TabList >
                        <Tab _selected={{ color: '#000000', bg: '#F5f5f5' }} width="50%" py={"24px"} fontSize={"16px"}>I want to Buy</Tab>
                        <Tab _selected={{ color: '#000000', bg: '#F5F5F5' }} width="50%" fontSize={"16px"}>I want to Sell</Tab>
                   </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Box>
                                <Text>Asset</Text>
                                <RadioGroup onChange={setAsset} value={asset} mt="12px" mb="48px">
                                    <HStack direction='row' justifyContent={"space-between" } w={"87%"}>
                                        <Radio colorScheme="#FB5E04" value='1' defaultChecked>USDT</Radio>
                                        <Radio colorScheme="#FB5E04" value='2'>BTC</Radio>
                                        <Radio colorScheme="#FB5E04" value='3'>BUSD</Radio>
                                        <Radio colorScheme="#FB5E04" value='4'>BNB</Radio>
                                        <Radio colorScheme="#FB5E04" value='5'>ETH</Radio>
                                        <Radio colorScheme="#FB5E04" value='6'>DAI</Radio>
                                        <Radio colorScheme="#FB5E04" value='7'>NGN</Radio>
                                    </HStack>
                                </RadioGroup>
                            </Box>

                            {/* with Cash */}
                            <Box>
                                <Text>With Cash</Text>
                                <RadioGroup onChange={setCash} value={cash} mt="12px">
                                    <HStack direction='row' justifyContent={"space-between"} w={"88%"}>
                                        <Radio colorScheme="red" value='1' defaultChecked>USD</Radio>
                                        <Radio colorScheme="#FB5E04" value='2'>NGN</Radio>
                                        <Radio colorScheme="#FB5E04" value='3'>ZAR</Radio>
                                        <Radio colorScheme="#FB5E04" value='4'>KES</Radio>
                                        <Radio colorScheme="#FB5E04" value='5'>GHS</Radio>
                                        <Radio colorScheme="#FB5E04" value='6'>UGX</Radio>
                                        <Radio colorScheme="#FB5E04" value='7'>XDF</Radio>
                                    </HStack>
                                    <Stack direction='row' spacing={"75px"} mt="15px">
                                        <Radio  colorScheme="#FB5E04" value='8'>RWF</Radio>
                                        <Radio colorScheme="#FB5E04" value='9'>TZF</Radio>
                                    </Stack>
                                </RadioGroup>
                            </Box>

                        </TabPanel>





                        <TabPanel>
                            I want to sell Tab
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            
            <Flex justifyContent={"flex-end"} left={"17%"} bottom={"0px"} p={"24px"} w={"82%"} bg="#FFFFFF" position="fixed" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"}>
                <Button borderRadius={"5px"} bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"}>
                    Next
                </Button>
            </Flex>
        </DashboardLayout>
    )
}

export default BuyAds