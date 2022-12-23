import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Input, Tabs, TabList, Tab, HStack} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import Ads from "../../../../public/assets/svgs/ads.svg"
import Orders from "../../../../public/assets/svgs/orders.svg"
import More from "../../../../public/assets/svgs/more.svg"
import SelectedMore from "../../../../public/assets/svgs/selectedMenu.svg"
import mobileOrders from "../../../../public/assets/svgs/mobileOrders.svg"
import mobileMore from "../../../../public/assets/svgs/mobileMore.svg"
import {   useGetP2pAllAdsFilterQuery } from '../../../redux/services/p2p-ads.service'
import { useAppSelector } from '../../../helpers/hooks/reduxHooks'
import { P2pAds } from '../../../components/p2p/ads/P2pAds'
import { useGetCoinsByTypeQuery } from '../../../redux/services/buy-sell.service'
import uuid from "react-uuid"

const AllAds = () => {
    const router = useRouter()
    const [orderType, setOrderType] = useState(`buy/sell`)
    const [coinType, setCoinType] = useState(`All Assets`)
    const [statusType, setStatusType] = useState(`All Status`)
    const [date, setDate] = useState("")

    const { user } = useAppSelector((state) => state.auth)
    const [pageNumber, setPageNumber] = useState(1)
    
    const coinsByTypeCrypto: any = useGetCoinsByTypeQuery('crypto')
    
    // const data = {
    //     coinType: coinType,
    //     statusType: statusType,
    //     orderType: orderType,
    //     date: date
    // }
    // console.log("this is the data ", data)
    // const getAllAdss = useGetP2pAllAdsQuery({userId: user?._id, pageNumber: pageNumber})
    const getAllAds = useGetP2pAllAdsFilterQuery({userId: user?._id, pageNumber: pageNumber, type:(orderType==="buy/sell" ? "" : orderType), status:(statusType==="All Status" ? "" : statusType), coin:(coinType==="All Assets" ? "" : coinType), createdAt: date})
    console.log("this is the getallAds ", getAllAds)
    const handleReset = () => {
        setOrderType(`buy/sell`)
        setCoinType(`All Assets`)
        setStatusType(`All Status`)
        setDate("")
    }

    const handlePreviousPage = () => {
        setPageNumber(pageNumber - 1)
    }

    const handleNextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const [tabIndex, setTabIndex] = useState(0)

    const handleTabIndex = (index: number) => {
        setTabIndex(index)
    }

    const handleOrderRoute = () => {
        router.push("/p2p/order")
    }
    

    return (
        <DashboardLayout title='All Ads'>
            <Tabs defaultIndex={tabIndex} variant="unstyled" >
                <TabList  justifyContent="flex-end" gap="63px" pr="250px" display={{ base: "none", md: "flex" }} alignItems="center" position="fixed" bg="black" color="white" zIndex="40" left="200px" py="15px" top="60px" w="100%">
                    <Tab color="#FB5E04"  fontWeight="700" fontSize={{ base: "16px", md: "20px" }}  p="0">
                        <Flex alignItems="center" >
                            <Image height="20px" width="20px" src={Ads} alt="ads icon" />
                            <Text ml="5px">My Ads</Text>
                        </Flex>
                    </Tab>
                    <Tab onClick={handleOrderRoute}  fontWeight="700" fontSize={{ base: "16px", md: "20px" }} p="0">
                        <Flex alignItems="center">
                            <Image height="20px" width="20px" src={Orders} alt="orders icon" />
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
                        <Tab fontWeight="700"  fontSize={{ base: "16px", md: "20px" }} p="0">
                            <Flex alignItems="center" mt="30px">
                                <Image height="20px" width="20px" src={Ads} alt="ads icon" />
                                <Text ml="5px" color="#FB5E04">My Ads</Text>
                            </Flex>
                        </Tab>
                        <Tab ml="5px" color="black" onClick={handleOrderRoute} fontWeight="700"  fontSize={{ base: "16px", md: "20px" }} p="0">
                            <Flex alignItems="center" mt="30px">
                                
                                <Image height="20px" width="20px" src={mobileOrders} alt="orders icon" />
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
                
                {/* Tab panels */}
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
                >
                    Back
                </Button>
                <Flex  flexDirection={'column'} mt={{base: "100px", md: "30px"}} p={{ base: '0px', md: '' }}>
                    <Flex gap="24px" ml={{ base: '0px', md: '35px' }} direction={{base: 'column', md: 'row'}} cursor="pointer" alignItems="center" mb={{base: "20px", md: "0"}} >
                        <Flex gap="24px">
                            <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }}>
                                <Text fontWeight={'medium'} color={'#64748B'}>Asset/Type</Text>
                                <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={coinType} onChange={(e) => {
                                    setCoinType(e.target.value);
                                }}>
                                    <option value={'All Assets'}>All Assets</option>
                                    {coinsByTypeCrypto?.data?.data?.map((item:any) => {
                                        return <option key={uuid()} value={item?.coin}>{item?.coin==="USDT_TRON" ? "USDT-TRON" : item?.coin}</option>
                                    })}
                                </Select>

                            </Flex>

                            <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }} cursor="pointer" >
                                <Text fontWeight={'medium'} color={'#64748B'}>Order Type</Text>
                                
                                <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={orderType} onChange={(e) => {
                                    setOrderType(e.target.value);
                                }}>
                                    <option value={'buy/sell'}>Buy/Sell</option>
                                    <option value={'buy'}>Buy</option>
                                    <option value={'sell'}>Sell</option>
                                </Select>
                            </Flex>
                            
                            <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }}>
                                <Text fontWeight={'medium'} color={'#64748B'}>Status</Text>
                                <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={statusType} onChange={(e) => {
                                    setStatusType(e.target.value);
                                }}>
                                    <option value={'All Status'}>All Status</option>
                                    <option value={'pending'}>Pending</option>
                                    <option value={'partial'}>Partial</option>
                                    <option value={'filled'}>Filled</option>
                                    <option value={'processing'}>Processing</option>
                                    <option value={'completed'}>Completed</option>
                                    <option value={'expired'}>Expired</option>
                                </Select>
                            </Flex>
                        </Flex>
                        
                        <form style={{padding: "0"}}>
                            <Flex  ml={{ base: '-20px', md: '0' }}  flexDirection={'column'} fontSize={{ base: 'sm', md: '14px' }}>
                                <Text fontWeight={'medium'} color={'#64748B'}>Created Time</Text>
                                
                                <Flex mt={'3'} alignItems="center">
                                    <Input  fontSize={{ base: '12px', md: 'md' }} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                                    <Button mx="25px" color="#FB5e04" bg="transparent" _hover={{ bg: "transparent"}} border="1px solid #FB5E04">Filter</Button>
                                    <Button bg="transparent" _hover={{ bg: "transparent"}} onClick={handleReset}>Reset</Button >
                                </Flex>
                            </Flex>
                        </form>


                        <Text  mt={{ base: '0px', md: '25px' }} flex="1" textAlign={{ base: 'left', md: 'right' }} w="100%" color="#FB5E04" fontWeight="600" fontSize="14px" onClick={()=> router.push("/dashboard/recent-transactions")}>Ad History</Text>
        
                    </Flex>
                        
                    {getAllAds?.data?.data.length !== 0 ? (
                        <>
                            <P2pAds data={getAllAds?.data?.data} />
                            {getAllAds?.data?.pagination?.lastPage > 1 ? (
                                <HStack px={["0", "0px", "0px", "0px"]} borderBottom="1px solid #E2E8F0" borderTop="1px solid #E2E8F0" py="20px" mt="35px" justifyContent="space-between">
                                    <HStack >
                                        <Box p="5px 10px" bg="#E2E8F0" borderRadius="7px">
                                            {getAllAds?.data?.pagination?.currentPage}
                                        </Box>
                                        <Text>of</Text>
                                        <Box p="5px 10px" bg="#E2E8F0" borderRadius="7px">
                                            {getAllAds?.data?.pagination?.lastPage}
                                        </Box>
                                    </HStack>

                                    <HStack>
                                        <Button onClick={handlePreviousPage} disabled={getAllAds?.data?.pagination?.currentPage === 1}>
                                            Prev
                                        </Button>
                                        <Button onClick={handleNextPage} disabled={getAllAds?.data?.pagination?.hasNext === false}>
                                            Next
                                        </Button>    
                                    </HStack>
                                </HStack>
                            ) : null}
                        </>
                    ) : (
                        <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="70px" py="100px">
                            <Text fontSize="20px" fontWeight="700" color={'#64748B'}>You Don't Have Any Ads Yet</Text>
                        </Flex>
                    )}

                </Flex>
                    
            </Tabs>
            
        </DashboardLayout>
    )
}




export const getServerSideProps: GetServerSideProps = async (context) => {
    return checkValidToken(context)
}

export default AllAds