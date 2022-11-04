import { Box, Button, Flex, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack  } from '@chakra-ui/react';
import Asset from '../radioGroup/Asset';
import InputCounter from '../radioGroup/Counter';
import PriceType from '../radioGroup/PriceType';
import WithCash from '../radioGroup/WithCash';

interface BuyStepProps {
    handleNextStep: () => void
}


const BuyStepOne = ({handleNextStep}: BuyStepProps) => {
    return (
        <Box position="relative">
            <Box mt="50px" fontFamily={"Open Sans"} bg="white" mx="10px">
            <Tabs variant='unstyled' w="100%">
                <TabList px={["15px", "10px", "0px"]}>
                    <HStack w="100%" alignItems="center" justifyContent="center">
                        <Tab _selected={{ color: '#000000', bg: '#F5f5f5' }} width="50%" py={"24px"} fontSize={"16px"} fontWeight={"600"}>I want to Buy</Tab>
                            <Tab _selected={{ color: '#000000', bg: '#F5F5F5' }} width="50%" py={"24px"} fontSize={"16px"} fontWeight={"600"}>I want to Sell</Tab>
                    </HStack>
                </TabList>
                <TabPanels>
                    <TabPanel px={["15px", "10px", "60px"]} pb="70px">

                        {/* asset radio group imported here*/}
                        <Asset />
                        {/* with Cash group imported here */}
                        <WithCash/>

                        <HStack my="20px" gap={"50px"}>
                            <VStack alignItems={"flex-start"}>
                                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Your Price</Text>
                                <Text fontSize="24px" fontWeight={"600"} fontFamily={"Open Sans"}>₦550.47</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Highest Order Price</Text>
                                <Text fontSize="24px" fontWeight={"600"} fontFamily={"Open Sans"}>₦570.47</Text>
                            </VStack>
                        </HStack>

                        {/* Price type radio group imported here */}
                        <PriceType/>                            

                        {/* Floating Price Margin */}
                        <InputCounter />

                        <Flex  bottom={"0px"} p={"12px"} w={"100%"} bg="white" mt="50px" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} display={["flex", "flex", "none"]}>
                            <Button borderRadius={"5px"} bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} flex="1" onClick={handleNextStep}>
                                Next
                            </Button>
                        </Flex>
                        
                    </TabPanel>



                    <TabPanel>
                        I want to sell Tab
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Box>
            <Flex justifyContent={"flex-end"} left={"17%"} bottom={"0px"} p={"24px"} w={"82%"} bg="#FFFFFF" position="fixed" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["none", "none", "flex"]}>
                <Button borderRadius={"5px"} bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} onClick={handleNextStep}>
                    Next
                </Button>
            </Flex> 
        </Box>
    )
}

export default BuyStepOne