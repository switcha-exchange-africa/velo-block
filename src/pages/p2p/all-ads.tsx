import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Input, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { checkValidToken } from '../../helpers/functions/checkValidToken'
import { useAppDispatch } from '../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import {  useGetP2pOrderForMerchantsQuery } from '../../redux/services/p2p.service'
import Ads from "../../../public/assets/svgs/ads.svg"
import Orders from "../../../public/assets/svgs/orders.svg"
import More from "../../../public/assets/svgs/more.svg"
import UnselectedAds from "../../../public/assets/svgs/unselectedAds.svg"
import SelectedOrders from "../../../public/assets/svgs/selectedOrders.svg"
import SelectedMore from "../../../public/assets/svgs/selectedMenu.svg"

import mobileOrders from "../../../public/assets/svgs/mobileOrders.svg"
import mobileMore from "../../../public/assets/svgs/mobileMore.svg"
import P2pOrders from '../../components/p2p/allAds/P2pOrders'


const AllAds = () => {
    const router = useRouter()
    // const dispatch = useAppDispatch()
    const [orderType, setOrderType] = useState(`Buy/Sell`)
    const [coinType, setCoinType] = useState(`All Assets`)
    const [statusType, setStatusType] = useState(`All Status`)
    const merchantOrders = useGetP2pOrderForMerchantsQuery()

    const handleMerchantOrderRoute = () => {
        // dispatch(setIsClientSelected({isClientSelected: false}))
        // router.push("/quick-trade/order")    
    }

    const [tabIndex, setTabIndex] = useState(0)

    const handleTabIndex = (index: number) => {
        setTabIndex(index)
    }
    
    const color = tabIndex && "#FB5E04"

    return (
        <DashboardLayout title='All Ads'>
            <Tabs defaultIndex={tabIndex} variant="unstyled" >
                <TabList  justifyContent="flex-end" gap="63px" pr="250px" display={{ base: "none", md: "flex" }} alignItems="center" position="fixed" bg="black" color="white" zIndex="40" left="200px" py="15px" top="60px" w="100%">
                    <Tab _selected={{color: "#FB5E04",  bg: "transparent"}} onClick={() => handleTabIndex(0)} fontWeight="700" fontSize={{ base: "16px", md: "20px" }}  p="0">
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
                        <Text> Express</Text>
                    </Flex>

                    <Flex w="100%" justifyContent="space-between">
                        <Tab _selected={{color: "#FB5E04", bg: "transparent"}} onClick={() => handleTabIndex(0)} color="black" fontWeight="700"  fontSize={{ base: "16px", md: "20px" }} p="0">
                            <Flex alignItems="center" mt="30px">
                                <Image height="20px" width="20px" src={Ads} alt="ads icon" />
                                <Text ml="5px" >My Ads</Text>
                            </Flex>
                        </Tab>
                        <Tab ml="5px" _selected={{color: "#FB5E04", bg: "transparent"}} color="black" onClick={() => handleTabIndex(1)} fontWeight="700"  fontSize={{ base: "16px", md: "20px" }} p="0">
                            <Flex alignItems="center" mt="30px">
                                <Image height="20px" width="20px" src={mobileOrders} alt="orders icon" />
                                <Text ml="5px" cursor="pointer" onClick={handleMerchantOrderRoute}> Orders</Text>
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
                    {tabIndex=== 0 ? (
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
                                                <option value={'buy'}>All Assets</option>
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
                                                <option value={'buy'}>All Status</option>
                                            </Select>
                                        </Flex>
                                    </Flex>
                                    
                                    <form style={{padding: "0"}}>
                                        <Flex  ml={{ base: '-20px', md: '0' }}  flexDirection={'column'} fontSize={{ base: 'sm', md: '14px' }}>
                                            <Text fontWeight={'medium'} color={'#64748B'}>Created Time</Text>
                                            
                                            <Flex mt={'3'} alignItems="center">
                                                <Input  fontSize={{ base: '12px', md: 'md' }} type="date" />
                                                <Button mx="25px" color="#FB5e04" bg="transparent" _hover={{ bg: "transparent"}} border="1px solid #FB5E04">Filter</Button>
                                                <Button bg="transparent" _hover={{ bg: "transparent"}}>Reset</Button >
                                            </Flex>
                                        </Flex>
                                    </form>


                                    <Text  mt={{ base: '0px', md: '25px' }} flex="1" textAlign={{ base: 'left', md: 'right' }} w="100%" color="#FB5E04" fontWeight="600" fontSize="14px">Ad History</Text>
                    
                                </Flex>
                                
                                {merchantOrders?.data && <RenderOrderComponent data={merchantOrders?.data?.data} />}

                            </Flex>
                        </>
                    ) : (
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
                            
                            <P2pOrders/>
                        </>

                    )}
                    
                    

                {/* </TabPanels> */}



            </Tabs>
            
            
            {/* <Flex direction={{ base: "column", md: "row" }} fontWeight="700" fontSize={{ base: "16px", md: "20px" }} justifyContent="flex-end" gap="63px" pr="250px" display={{ base: "none", md: "flex" }} alignItems="center" position="fixed" bg="black" color="white" zIndex="40" left="200px" py="15px" top="60px" w="100%">
                <Flex alignItems="center">
                    <Image height="20px" width="20px" src={Ads} alt="ads icon" />
                    <Text ml="5px" color="#FB5E04">My Ads</Text>
                </Flex>
                <Flex alignItems="center">
                    <Image height="20px" width="20px" src={Orders} alt="orders icon" />
                    <Text ml="5px" cursor="pointer" onClick={handleMerchantOrderRoute}> Orders</Text>
                </Flex>
                <Flex alignItems="center">
                    <Flex justifyContent="center" alignItems="center" height="18px" width="18px">
                        <Image  src={More} alt="more icon" />
                    </Flex>
                    <Text ml="5px"> More</Text>
                </Flex>
            </Flex> */}
            
            {/* for mobile */}
            {/* <Flex direction={{ base: "column", md: "row" }} display={{base: "flex", md: "none"}}  position="fixed" bg="white" zIndex="40" left="0" px="20px" pb="5px" top="60px" w="100%">
                <Flex h="25px">
                    <Text onClick={() => router.back()}>P2P</Text>
                    <Divider orientation="vertical" mx="12px" border="1px solid #8E9BAE" />
                    <Text> Express</Text>
                </Flex>

                <Flex justifyContent="flex-end" mt="5px" gap="40px" fontWeight="700">
                   <Flex alignItems="center">
                        <Image height="20px" width="20px" src={Ads} alt="ads icon" />
                        <Text ml="5px" color="#FB5E04">My Ads</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Image height="20px" width="20px" src={mobileOrders} alt="orders icon" />
                        <Text ml="5px" cursor="pointer" onClick={handleMerchantOrderRoute}> Orders</Text>
                    </Flex>
                    <Flex alignItems="center">
                        <Flex justifyContent="center" alignItems="center" height="18px" width="18px">
                            <Image  src={mobileMore} alt="more icon" />
                        </Flex>
                        <Text ml="5px"> More</Text>
                    </Flex>
                </Flex>
            </Flex> */}
            
            
            
        </DashboardLayout>
    )
}



export const RenderOrderComponent = ({ data }: any) => {
    
    return (
        <Box>

            <TableContainer display={{base: "none", md: "block"}} key="" mt="60px" position="relative" w="100%">
                <Table >
                    <Thead borderBottomColor={"transparent"} >
                        <Tr >
                            <Th textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px" >
                                <Flex direction="column" height="50px">
                                    <Text>Ad Number</Text>
                                    <Text>Type</Text>
                                    <Text>Asset/Fiat</Text>
                                </Flex>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column"  height="50px">
                                    <Text>Available Amount</Text>
                                    <Text>Completed Trade QTY</Text>
                                    <Text>Limit</Text>
                                </Flex>
                            </Th>
                            <Th pl="0" textAlign={"left"}  fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column"  height="50px">
                                    <Text>Price</Text>
                                </Flex>
                                {/* <Text>Exchange Rate</Text> */}
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column"  height="50px">
                                    <Text>Payment Method</Text>
                                </Flex>
                                
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                               <Flex direction="column"  height="50px">
                                    <Text>Last Updated</Text>
                                    <Text>Create Time</Text>    
                                </Flex>
                                
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column" height="50px">
                                    <Text>Status</Text>  
                                </Flex>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Flex direction="column"  height="50px">
                                    <Text>Actions</Text>    
                                </Flex>
                                
                            </Th>
                        </Tr>
                    </Thead>

                    
                    <Tbody bg="white" mt="20px" >
                        {data.map((ad: any) => (
                            <>
                                <Tr w="100%" height="24px" key={ad?._id}></Tr>
                                    <Tr>
                                        <Td fontSize="14px" color="#000000" fontWeight="600" >
                                            <Flex direction="column" h="100px">
                                                <Text mb="11px">{ad?.adId}</Text>
                                                <Text mb="11px" textTransform="uppercase" color={ad?.ad[0]?.type === 'buy' ? 'rgba(34, 195, 107, 1)' : 'red'}>{ad?.ad[0]?.type}</Text>
                                                <Text mb="11px">{ad?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.ad[0]?.coin} / {ad?.ad[0]?.cash}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="14px" color="#000000" pt="0" pb="0" fontWeight="600" >
                                            <Flex direction="column" height="100px"  justifyContent="flex-start" alignItems="flex-start">
                                                <Text mb="11px">{ad?.ad[0]?.totalAmount?.toLocaleString()} {ad?.ad[0]?.cash}</Text>
                                                <Text mb="11px">{ad?.quantity.toLocaleString()} {ad?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.ad[0]?.coin}</Text>
                                                <Text mb="11px">{ad?.ad[0]?.minLimit.toLocaleString()} - {ad?.ad[0]?.maxLimit.toLocaleString()} {ad?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.ad[0]?.coin}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="14px" color="#000000" fontWeight="600" pt="0" pb="0">
                                            <Flex  height="100px"  direction="column" >
                                                <Text mb="11px">{ad?.ad[0]?.price.toLocaleString()} {ad?.ad[0]?.cash}</Text>
                                                <Text mb="11px">--</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="12px">
                                            <Flex direction="column" height="100px" >
                                                <Text mb="11px">Bank Transfer</Text>
                                                <Text >{ad?.ad[0]?.bank[0]?.name}</Text>
                                                <Text>{ad?.ad[0]?.bank[1]?.name}</Text>
                                            </Flex>
                                            
                                        </Td>

                                        <Td pl="0" fontSize="12px" >
                                            <Flex height="100px"  direction="column">
                                                <Text mb="11px">{moment(ad?.ad[0]?.bank[1]?.updatedAt).format('YYYY-MM-DD HH:mm')}</Text>
                                                <Text mb="11px">{moment(ad?.ad[0]?.bank[1]?.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
                                            </Flex>
                                        </Td>

                                        <Td pl="0" fontSize="14px" fontWeight="600">
                                            <Flex height="100px"  direction="column">
                                                <Text mb="11px" textTransform="capitalize">{ad?.ad[0]?.status}</Text>
                                            </Flex>
                                        </Td>

                                    <Td pl="0" fontSize="14px" color="#000000" fontWeight="600">
                                        <Flex height="100px"  direction="column">
                                            <Text mb="11px" cursor="pointer">Download</Text>
                                            <Text mb="11px" cursor="pointer">Edit</Text>
                                            <Text mb="11px" cursor="pointer" color="#FF1F00">Delete</Text>
                                        </Flex>
                                            
                                    </Td>
                                </Tr>
                            </>
                            
                        ))}
                    </Tbody>
                    
                </Table>
            </TableContainer>

        
            {/* mobile */}
            {data.length !== 0 ? data.map((ad: any) => (
            // <Show below='sm' key="">
                <Flex key={ad?._id} direction="column"  display={{base: "flex", md: "none"}} justifyContent={'space-between'} my={'25px'} p={'3'} bg={'white'} boxShadow={'md'} borderRadius={'sm'}>
                    <Flex justifyContent="space-between">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Ad Number</Text>
                            <Text>Type</Text>
                            <Text mb="11px">Asset/Fiat</Text>

                            <Flex direction="column" h="100px" fontSize="14px" color="#000000" fontWeight="600">
                                <Text  mb="8px">{ad?.adId}</Text>
                                <Text mb="8px" textTransform="uppercase" color={ad?.ad[0]?.type === 'buy' ? 'rgba(34, 195, 107, 1)' : 'red'}>{ad?.ad[0]?.type}</Text>
                                <Text mb="8px">{ad?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.ad[0]?.coin} / {ad?.ad[0]?.cash}</Text>
                            </Flex>
                        
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Price</Text>

                            <Flex direction="column" mt="20px"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end" justifyContent="center">
                                <Text mb="8px">{ad?.ad[0]?.price.toLocaleString()} {ad?.ad[0]?.cash}</Text>
                                <Text mb="8px">--</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Divider orientation="horizontal" border="1px solid #8E9BAE" />

                    <Flex justifyContent="space-between" mt="10px">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Available Amount</Text>
                            <Text>Completed Trade QTY</Text>
                            <Text mb="11px">Limit</Text>

                            <Flex direction="column"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-start">
                                <Text mb="8x">{ad?.ad[0]?.totalAmount?.toLocaleString()} {ad?.ad[0]?.cash}</Text>
                                <Text mb="8px">{ad?.quantity.toLocaleString()} {ad?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.ad[0]?.coin}</Text>
                                <Text mb="8px">{ad?.ad[0]?.minLimit.toLocaleString()} - {ad?.ad[0]?.maxLimit.toLocaleString()} {ad?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : ad?.ad[0]?.coin}</Text>
                            </Flex>
                        
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text mb="11px">Payment Method</Text>
                            <Flex direction="column" mt="20px" w="80%" height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end" justifyContent="center">
                                <Text mb="8px">Bank Transfer</Text>
                                <Text >{ad?.ad[0]?.bank[0]?.name}</Text>
                                <Text >{ad?.ad[0]?.bank[1]?.name}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Divider orientation="horizontal" border="1px solid #8E9BAE" />


                    <Flex justifyContent="space-between" mt="10px">
                        <Flex direction="column" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text>Last Updated</Text>
                            <Text mb="11px">Create Time</Text>

                            <Flex direction="column"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-start">
                                <Text mb="8px">{moment(ad?.ad[0]?.bank[1]?.updatedAt).format('YYYY-MM-DD HH:mm')}</Text>
                                <Text mb="8px">{moment(ad?.ad[0]?.bank[1]?.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
                            </Flex>
                        </Flex>

                        <Flex direction="column" alignItems="flex-end" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                            <Text mb="11px">Actions</Text>
                            <Flex direction="column" mt="20px"  height="100px" fontSize="14px" color="#000000" fontWeight="600"  alignItems="flex-end">
                                <Text mb="8px" cursor="pointer">Download</Text>
                                <Text mb="8px" cursor="pointer">Edit</Text>
                                <Text mb="8px" cursor="pointer" color="#FF1F00">Delete</Text>
                            </Flex>
                        </Flex>
                    </Flex>

                </Flex>
            // </Show> 
            )) : "You Don't Have Any Order Yet"}
 
        </Box>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return checkValidToken(context)
}

export default AllAds