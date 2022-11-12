import { Box, Button, Flex, FormControl, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack  } from '@chakra-ui/react';
import Asset from '../radioGroup/Asset';
import InputCounter from '../radioGroup/Counter';
import PriceType from '../radioGroup/PriceType';
import WithCash from '../radioGroup/WithCash';
import { useState } from 'react'
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface BuyStepProps {
    handleNextStep: () => void
    coin?: string | undefined | any
    setCoin?: React.SetStateAction<string> | undefined | any
    priceType?: string | undefined | any
    setPriceType?: React.SetStateAction<string> | undefined | any
    price?: string |  any
    setPrice?: React.SetStateAction<string> | undefined | any
}


const BuyStepOne = ({ handleNextStep, coin, setCoin, price, setPrice, priceType, setPriceType }: BuyStepProps) => {
    
    const [withCash, setWithCash] = useState('NGN')
 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
    }
    

    const addPrice = () => {
        setPrice(price + 1)
    }

    const  minusPrice = () => {
        setPrice( price - 1)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            coin,
            withCash,
            priceType,
            price
        }

        console.log("first data ", data)
        handleNextStep()   
        
    }
    


    return (
        <form style={{position: "relative"}} onSubmit={handleSubmit}>
            <FormControl isRequired>
                <Box mt="50px" fontFamily={"Open Sans"} bg="white" >
                    <Tabs variant='unstyled' w="100%">
                        <TabList px={["15px", "10px", "0px"]}>
                            <HStack w="100%" alignItems="center" >
                                <Tab _selected={{ color: '#000000', bg: '#F5f5f5' }} width="50%" py={"24px"} fontSize={"16px"} fontWeight={"600"}>I want to Buy</Tab>
                                <Tab _selected={{ color: '#000000', bg: '#F5F5F5' }} width="50%" py={"24px"} fontSize={"16px"} fontWeight={"600"}>I want to Sell</Tab>
                            </HStack>
                        </TabList>
                        <TabPanels>
                            {/* Buy Tab */}
                            <TabPanel px={["15px", "10px", "60px"]} pb="70px">
                                {/* coin radio group imported here*/}
                                    <Asset coin={coin} setCoin={setCoin} />
                                    {/* with Cash group imported here */}
                                    <WithCash withCash={withCash} setWithCash={setWithCash}/>

                                    <HStack my="20px" gap={"50px"}>
                                        <VStack alignItems={"flex-start"}>
                                            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>Your Price</Text>
                                            <Text fontSize="24px" fontWeight={"600"} fontFamily={"Open Sans"}>₦{!price ? 0 : parseInt(price).toLocaleString()}</Text>
                                        </VStack>
                                        <VStack alignItems={"flex-start"}>
                                            <Text color={"#8E9BAE"} fontFamily={"Open Sans"} fontWeight={"600"} fontSize={"14px"}>
                                                Highest Order Price
                                                <InfoOutlineIcon
                                                    ml="5px"
                                                    color={"#8E9BAE"}
                                                    w={"10px"}
                                                    h={"10px"}
                                                />    
                                            </Text>
                                            <Text fontSize="24px" fontWeight={"600"} fontFamily={"Open Sans"}>₦1,000</Text>
                                        </VStack>
                                    </HStack>

                                    {/* Price type radio group imported here */}
                                <PriceType priceType={priceType} setPriceType={setPriceType} />                            

                                {/* Floating Price Margin */}
                                <InputCounter price={price} handleChange={handleChange} addPrice={addPrice} minusPrice={minusPrice} />

                                <Flex  bottom={"0px"} p={"12px"} w={"100%"} bg="white" mt="50px" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} display={["flex", "flex", "none"]}>
                                    <Button borderRadius={"5px"} bg={"#FB5E04"} color={"white"} p={"11px 44px"} type="submit" fontSize={"14px"} flex="1" >
                                        Next
                                    </Button>
                                </Flex>
                                
                            </TabPanel>


                            

                        </TabPanels>
                    </Tabs>
                </Box>
                <Flex justifyContent={"flex-end"} left={"17%"} bottom={"0px"} p={"24px"} w={"82%"} bg="#FFFFFF" position="fixed" boxShadow={"0px -4px 11px rgba(0, 0, 0, 0.05)"} zIndex="20" display={["none", "none", "flex"]}>
                    <Button borderRadius={"5px"} bg={"#FB5E04"} color={"white"} p={"11px 44px"} fontSize={"14px"} type="submit" >
                        Next
                    </Button>
                </Flex>
            </FormControl>
        </form>
    )
}

export default BuyStepOne