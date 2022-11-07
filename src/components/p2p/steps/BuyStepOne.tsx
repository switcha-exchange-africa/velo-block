import { Box, Button, Flex, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack  } from '@chakra-ui/react';
// import { useGetAllCoinsQuery } from '../../../redux/services/buy-sell.service';
import Asset from '../radioGroup/Asset';
import InputCounter from '../radioGroup/Counter';
import PriceType from '../radioGroup/PriceType';
import WithCash from '../radioGroup/WithCash';
import { useState } from 'react'

interface BuyStepProps {
    handleNextStep: () => void
}


const BuyStepOne = ({ handleNextStep }: BuyStepProps) => {
    
    const [value, setValue] = useState('0')
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)
    
    // console.log(value.toLocaleString())

    // const addComa = (value: any) => {
    //     console.log("yo", value.toLocaleString())
    // }

    // addComa(value)

    let num = value
    num = num.toLocaleString()
    console.log("this is the number", num.toLocaleString())
    
    return (
        <Box position="relative"  px="0">
            <Box mt="50px" fontFamily={"Open Sans"} bg="white" >
            <Tabs variant='unstyled' w="100%">
                <TabList px={["15px", "10px", "0px"]}>
                    <HStack w="100%" alignItems="center" >
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
                                <Text fontSize="24px" fontWeight={"600"} fontFamily={"Open Sans"}>₦{value.toLocaleString()}</Text>
                            </VStack>
                            <VStack alignItems={"flex-start"}>
                                <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Highest Order Price</Text>
                                <Text fontSize="24px" fontWeight={"600"} fontFamily={"Open Sans"}>₦570.47</Text>
                            </VStack>
                        </HStack>

                        {/* Price type radio group imported here */}
                        <PriceType/>                            

                        {/* Floating Price Margin */}
                        <InputCounter value={value} handleChange={handleChange } />

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