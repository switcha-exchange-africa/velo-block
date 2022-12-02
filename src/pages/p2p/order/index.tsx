import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Tabs, TabList, Tab} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import Ads from "../../../../public/assets/svgs/ads.svg"
import Orders from "../../../../public/assets/svgs/orders.svg"
import More from "../../../../public/assets/svgs/more.svg"
import UnselectedAds from "../../../../public/assets/svgs/unselectedAds.svg"
import SelectedOrders from "../../../../public/assets/svgs/selectedOrders.svg"
import SelectedMore from "../../../../public/assets/svgs/selectedMenu.svg"
import mobileOrders from "../../../../public/assets/svgs/mobileOrders.svg"
import unselectedMobileOrders from "../../../../public/assets/svgs/unselectedmobileads.svg"
import mobileMore from "../../../../public/assets/svgs/mobileMore.svg"
import P2pOrders from '../../../components/p2p/order/P2pOrders'


const Order = () => {
    const router = useRouter()
    const [tabIndex, setTabIndex] = useState(

    const handleTabIndex = (index: number) => {
        setTabIndex(index)
    }
    
    const handleAdsRoute = () => {
        router.push("/p2p/all-ads")
    }

    return (
        <DashboardLayout title='Orders'>
            <Tabs defaultIndex={tabIndex} variant="unstyled" >
                <TabList  justifyContent="flex-end" gap="63px" pr="250px" display={{ base: "none", md: "flex" }} alignItems="center" position="fixed" bg="black" color="white" zIndex="40" left="200px" py="15px" top="60px" w="100%">
                    <Tab _selected={{color: "#FB5E04",  bg: "transparent"}} onClick={handleAdsRoute} fontWeight="700" fontSize={{ base: "16px", md: "20px" }}  p="0">
                        <Flex alignItems="center" >
                            {tabIndex === 0 ? (
                                <Image height="20px" width="20px" src={Ads} alt="ads icon" />
                            )
                             : (
                                <Image height="20px" width="20px" src={UnselectedAds} alt="ads icon" />
                            )}
                            <Text ml="5px">My Ads</Text>
                        </Flex>
                    </Tab>
                    <Tab _selected={{color: "#FB5E04", bg: "transparent"}} onClick={() => handleTabIndex(1)}  fontWeight="700" fontSize={{ base: "16px", md: "20px" }} p="0">
                        <Flex alignItems="center">
                            {tabIndex === 1 ? (
                                <Image height="20px" width="20px" src={SelectedOrders} alt="orders icon" />
                            
                            )
                            : (
                                <Image height="20px" width="20px" src={Orders} alt="orders icon" />
                            )}
                        
                            <Text ml="5px" cursor="pointer" > Orders</Text>
                        </Flex>
                    </Tab>
                    <Tab isDisabled _selected={{color: "#FB5E04", bg: "transparent"}} fontWeight="700" onClick={() => handleTabIndex(2)} fontSize={{ base: "16px", md: "20px" }} p="0">
                        <Flex alignItems="center">
                            <Flex justifyContent="center" alignItems="center" height="18px" width="18px">
                                <Image src={More} alt="more icon" />
                                <Image  src={SelectedMore} alt="more icon" />
                            </Flex>
                            <Text ml="5px"> More</Text>
                        </Flex>
                    </Tab>
                </TabList>

                {/* for mobile */}
                <TabList display={{base: "flex", md: "none"}}  position="fixed" bg="white" zIndex="40" left="0" px="20px" pb="5px" top="60px" w="100%">
                    <Flex h="25px">
                        <Text onClick={() => router.back()}>P2P</Text>
                        <Divider orientation="vertical" mx="12px" border="1px solid #8E9BAE" />
                        {/* <Text> Express</Text> */}
                    </Flex>

                    <Flex w="100%" justifyContent="space-between">
                        <Tab _selected={{color: "#FB5E04", bg: "transparent"}} onClick={handleAdsRoute} color="black" fontWeight="700"  fontSize={{ base: "16px", md: "20px" }} p="0">
                            <Flex alignItems="center" mt="30px">
                                {tabIndex === 0 ? (
                                    <Image height="20px" width="20px" src={Ads} alt="ads icon" />
                                )
                                : (
                                    <Image height="20px" width="20px" src={unselectedMobileOrders} alt="ads icon" />
                                )}
                                
                                <Text ml="5px" >My Ads</Text>
                            </Flex>
                        </Tab>
                        <Tab ml="5px" _selected={{color: "#FB5E04", bg: "transparent"}} color="black" onClick={() => handleTabIndex(1)} fontWeight="700"  fontSize={{ base: "16px", md: "20px" }} p="0">
                            <Flex alignItems="center" mt="30px">
                                {tabIndex === 1 ? (
                                    <Image height="20px" width="20px" src={SelectedOrders} alt="orders icon" />
                                
                                )
                                : (
                                    <Image height="20px" width="20px" src={mobileOrders} alt="orders icon" />
                                )}
                                
                                <Text ml="5px" cursor="pointer" > Orders</Text>
                            </Flex>
                        </Tab>
                        <Tab ml="5px" isDisabled _selected={{color: "#FB5E04", bg: "transparent"}}  color="black" fontWeight="700" onClick={() => handleTabIndex(2)} fontSize={{ base: "16px", md: "20px" }} p="0">
                            <Flex alignItems="center" mt="30px">
                                <Flex justifyContent="center" alignItems="center" height="18px" width="18px" >
                                    <Image  src={mobileMore} alt="more icon" />
                                </Flex>
                                <Text ml="5px"> More</Text>
                            </Flex>
                        </Tab>
                    </Flex>
                               
                </TabList>


                {/* <TabPanels> */}
                    {tabIndex=== 1 ? (
                        //Orders
                        <>
                            <Button
                                onClick={() => router.back()}
                                leftIcon={<ArrowBackIcon />}
                                colorScheme="transparent"
                                variant="solid"
                                pl={0}
                                ml="35px"
                                mt="20px"
                                py={"3rem"}
                                color={'black'}
                                display={{ base: 'none', md: 'block' }}
                                mb={{base: "100px", md: "30px"}}
                            >
                                Back
                            </Button>
                            <Box  mt={{base: "100px", md: "30px"}}>
                                <P2pOrders/>
                            </Box>    
                            
                        </>

                    ): "" }


            </Tabs>
            
            
            
            
            
        </DashboardLayout>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return checkValidToken(context)
}

export default Order