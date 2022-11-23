import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex, Text, HStack } from '@chakra-ui/layout'
import { Tabs, TabPanels,  TabPanel , Table, TableContainer, Thead, Tbody, Tr, Th, Td, Input} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import RenderCoinComponent from '../../components/dashboard/wallet/RenderCoinComponent'
import { checkValidToken } from '../../helpers/functions/checkValidToken'
import { useAppSelector } from '../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../layouts/dashboard/DashboardLayout'
import { useGetP2pOrderForClientsQuery, useGetP2pOrderForMerchantsQuery } from '../../redux/services/p2p.service'


const AllAds = () => {
    const router = useRouter()
    const [orderType, setOrderType] = useState(`Buy/Sell`)
    const { isClientSelected } = useAppSelector((state) => state.quickTrade)
    const [coinType, setCoinType] = useState(`All Assets`)
    const [statusType, setStatusType] = useState(`All Status`)
    const clientOrders = useGetP2pOrderForClientsQuery()
    const merchantOrders = useGetP2pOrderForMerchantsQuery()

    console.log("merchant Orders ", merchantOrders.data)

    return (
        <DashboardLayout title='All Ads'>
            <Button
                onClick={() => router.back()}
                leftIcon={<ArrowBackIcon />}
                colorScheme="transparent"
                variant="solid"
                pl={0}
                ml="35px"
                py={"3rem"}
                color={'black'}
            >
                Back
            </Button>
            <Flex  flexDirection={'column'} mt='20px' p={{ base: '0px', md: '' }} >
                
                <Flex gap="24px" ml="35px" cursor="pointer" alignItems="center">
                    <Flex flexDirection={'column'}  fontSize={{ base: 'sm', md: 'md' }}>
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

                    <form>
                        <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: '14px' }}>
                            <Text fontWeight={'medium'} color={'#64748B'}>Created Time</Text>
                            
                            <Flex mt={'3'} alignItems="center">
                                <Input  fontSize={{ base: '12px', md: 'md' }} type="date" />
                                <Button mx="25px" color="#FB5e04" bg="transparent" _hover={{ bg: "transparent"}} border="1px solid #FB5E04">Filter</Button>
                                <Button bg="transparent" _hover={{ bg: "transparent"}}>Reset</Button >
                            </Flex>
                        </Flex>
                    </form>


                    <Text mt="25px" flex="1" textAlign="right" color="#FB5E04" fontWeight="600" fontSize="14px">Ad History</Text>
                </Flex>
                {/* <Flex bg={'gray.300'} mt={'4'} justifyContent={'space-evenly'}>
                    <Heading w={'full'} textAlign={'center'} cursor={'pointer'} bg={isClientSelected ? 'white' : ''} as={'h6'} py={{ base: '2', lg: '4' }} onClick={() => { setIsClientSelected(true) }}>Client</Heading>
                    <Heading w={'full'} textAlign={'center'} cursor={'pointer'} bg={!isClientSelected ? 'white' : ''} as={'h6'} py={{ base: '2', lg: '4' }} onClick={() => { setIsClientSelected(false) }}>Merchant</Heading>
                </Flex> */}
                
                
                {clientOrders?.data && merchantOrders?.data && <RenderOrderComponent data={isClientSelected ? clientOrders?.data?.data : merchantOrders?.data?.data} />}

            </Flex>

            
        </DashboardLayout>
    )
}



export const RenderOrderComponent = ({ data }: any) => {
    const router = useRouter()

    const handleClick = (orderId: string) => {
        router.push('/quick-trade/order/'+orderId)
    }
    
    return (
        <Box>

            <TableContainer display={{base: "none", md: "block"}} key="" mt="60px" position="relative" w="100%">
                <Table >
                    <Thead borderBottomColor={"transparent"} >
                        <Tr >
                            <Th textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Text>Ad Number</Text>
                                <Text>Type</Text>
                                <Text>Asset/Fiat</Text>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Text>Available Amount</Text>
                                <Text>Completed Trade QTY</Text>
                                <Text>Limit</Text>
                            </Th>
                            <Th pl="0" textAlign={"left"}  fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Text mt="-20px">Price</Text>
                                <Text>Exchange Rate</Text>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Text mt="-28px">Payment Method</Text>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Text mt="-25px">Last Updated</Text>
                                <Text>Create Time</Text>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Text mt="-28px">Status</Text>
                            </Th>
                            <Th pl="0" textAlign={"left"} fontWeight={'medium'} color="#8E9BAE" fontSize="14px">
                                <Text mt="-28px">Actions</Text>
                            </Th>
                        </Tr>
                    </Thead>

                    <Tbody bg="white" mt="20px" >
                        <Tr w="100%" height="24px"></Tr>
                        <Tr>

                            <Td fontSize="14px" color="#000000" fontWeight="600">
                                <Flex direction="column">
                                    <Text mb="11px">63721b6901c848d9c9a7dc2a</Text>
                                    <Text mb="11px">BUY</Text>
                                    <Text mb="11px">USDT / NGN</Text>
                                </Flex>
                            </Td>

                            <Td pl="0" fontSize="14px" color="#000000" pt="0" pb="0" fontWeight="600">
                                <Flex direction="column" height="100%" >
                                    <Text mb="11px">2000.00</Text>
                                    <Text mb="11px">0.00</Text>
                                    <Text mb="11px">50,000.00-2,000,000.00 NGN</Text>
                                </Flex>
                            </Td>

                            <Td pl="0" fontSize="14px" color="#000000" fontWeight="600" pt="0" pb="0">
                                <Flex  direction="column" mt="-25px">
                                    <Text mb="11px">484.85 (-0.03%)</Text>
                                    <Text mb="11px">--</Text>
                                </Flex>
                            </Td>

                            <Td pl="0" fontSize="12px">
                                <Flex direction="column" mt="-25px">
                                    <Text mb="11px" >Bank Transfer</Text>
                                    <Text mb="11px">Kuda Bank</Text>    
                                </Flex>
                                
                            </Td>

                            <Td pl="0" fontSize="12px" >
                                <Flex mt="-25px" direction="column">
                                    <Text mb="11px" >2021-01-18 08-59:17</Text>
                                    <Text mb="11px">2021-01-18 08-59:17</Text>
                                </Flex>
                            </Td>

                            <Td pl="0" color="#22C36B" fontSize="14px" fontWeight="600">
                                <Flex mt="-45px" direction="column">
                                    <Text mb="11px">Published</Text>
                                </Flex>
                            </Td>

                            <Td pl="0"  fontSize="14px" color="#000000" fontWeight="600">
                                <Text mb="11px" >Download</Text>
                                <Text mb="11px">Edit</Text>
                                <Text mb="11px" color="#FF1F00">Delete</Text>
                            </Td>
                        </Tr>
                        <Tr w="100%" height="24px"></Tr>
                        <Tr>

                            <Td fontSize="14px" color="#000000" fontWeight="600">
                                <Flex direction="column">
                                    <Text mb="11px">63721b6901c848d9c9a7dc2a</Text>
                                    <Text mb="11px">BUY</Text>
                                    <Text mb="11px">USDT / NGN</Text>
                                </Flex>
                            </Td>

                            <Td pl="0" fontSize="14px" color="#000000" pt="0" pb="0" fontWeight="600">
                                <Flex direction="column" height="100%" >
                                    <Text mb="11px">2000.00</Text>
                                    <Text mb="11px">0.00</Text>
                                    <Text mb="11px">50,000.00-2,000,000.00 NGN</Text>
                                </Flex>
                            </Td>

                            <Td pl="0" fontSize="14px" color="#000000" fontWeight="600" pt="0" pb="0">
                                <Flex  direction="column" mt="-25px">
                                    <Text mb="11px">484.85 (-0.03%)</Text>
                                    <Text mb="11px">--</Text>
                                </Flex>
                            </Td>

                            <Td pl="0" fontSize="12px">
                                <Flex direction="column" mt="-25px">
                                    <Text mb="11px" >Bank Transfer</Text>
                                    <Text mb="11px">Kuda Bank</Text>    
                                </Flex>
                                
                            </Td>

                            <Td pl="0" fontSize="12px" >
                                <Flex mt="-25px" direction="column">
                                    <Text mb="11px" >2021-01-18 08-59:17</Text>
                                    <Text mb="11px">2021-01-18 08-59:17</Text>
                                </Flex>
                            </Td>

                            <Td pl="0" color="#22C36B" fontSize="14px" fontWeight="600">
                                <Flex mt="-45px" direction="column">
                                    <Text mb="11px">Published</Text>
                                </Flex>
                            </Td>

                            <Td pl="0"  fontSize="14px" color="#000000" fontWeight="600">
                                <Text mb="11px" >Download</Text>
                                <Text mb="11px">Edit</Text>
                                <Text mb="11px" color="#FF1F00">Delete</Text>
                            </Td>
                        </Tr>
                    </Tbody>





                    {/* {data.length !== 0 ? data.map((order: any) => (
                        <>
                            
                            <Tbody my={'20px'}  px={{ lg: '4', base: '1.5' }} pt={'4'} pb={'12'}  borderRadius={'sm'} bg="white" borderBottomColor="transparent" boxShadow="sm" >
                                <Tr>
                                    <Td >
                                        <Flex alignItems={'center'} p="80px 0 0px" >
                                            <RenderCoinComponent coin={order?.ad[0]?.coin} />
                                            <Text pl={'1.5'} fontSize={{ base: 'sm', lg: 'md' }}>{order?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : order?.ad[0]?.coin}</Text>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Text p="80px 0 0px" fontWeight={'bold'} mt={'2.5'} fontSize={{ base: 'sm', lg: 'md' }}>{order?.totalAmount?.toLocaleString()}</Text>
                                    </Td>
                                    <Td>
                                        <Flex p="80px 0 0px" flexDirection={'column'} mt={'2.5'}>
                                            <Flex fontSize={{ base: 'sm', lg: 'md' }}>
                                                <Text fontWeight={'medium'} pr={'4'} color={'#64748B'}>Price</Text>
                                                <Text fontWeight={'medium'} fontSize="14px" >{order?.price?.toLocaleString()} / {order?.ad[0]?.coin=== "USDT_TRON" ? "USDT-TRON" : order?.ad[0]?.coin}</Text>
                                            </Flex>
                                            <Flex fontSize={{ base: 'sm', lg: 'md' }} >
                                                <Text fontWeight={'medium'} pr={'4'} color={'#64748B'}>Quantity</Text>
                                                <Text fontWeight={'medium'} fontSize="14px" >{order?.quantity?.toLocaleString()} {order?.ad[0]?.coin=== "USDT_TRON" ? "USDT-TRON" : order?.ad[0]?.coin}</Text>
                                            </Flex>
                                        </Flex>            
                                    </Td>

                                    <Td>
                                        <Text  p="80px 0 0px" fontWeight={'medium'} mt={'2.5'} color={'#64748B'}>ANNULAR</Text>
                                    </Td>
                                    <Td>
                                        <Flex p="80px 0 0px" flexDirection={'column'} mt={'2.5'}>
                                            <Text fontWeight={'medium'} textTransform="capitalize">{order?.status}</Text>
                                            <Text fontWeight={'medium'} color={'#64748B'} cursor={'pointer'} fontSize={'xs'}>Detail</Text>
                                        </Flex>
                                    </Td>
                                    <Td>
                                        <Flex p="80px 0 0px">
                                            <Button p="9px 22px"   bg="#FB5E04" onClick={() => handleClick(order?.orderId)} borderRadius="5px" color="white" _hover={{bg: "#f35f09"}} fontSize="14px">Open Trade</Button>
                                        </Flex>
                                    </Td>
                                </Tr>
                            </Tbody> 
                        </>
                    )) : "You Don't Have Any Order Yet"} */}
                </Table>
            </TableContainer>

        
            {/* mobile */}
            {data.length !== 0 ? data.map((order: any) => (
            // <Show below='sm' key="">
                <Flex key=""  display={{base: "flex", md: "none"}} justifyContent={'space-between'} my={'25px'} p={'3'} bg={'white'} boxShadow={'md'} borderRadius={'sm'}>
                    <Flex flexDirection={'column'}>
                        <Flex fontSize={{ base: 'sm', md: 'md' }}>
                            <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Asset Type</Text>
                            <Flex alignItems={'center'}>
                                <RenderCoinComponent coin={order?.ad[0]?.coin} />
                                <Text pl={'1.5'} fontSize={{ base: 'sm', md: 'md' }}>{order?.ad[0]?.coin === 'USDT_TRON' ? 'USDT-TRON' : order?.ad[0]?.coin}</Text>
                            </Flex>
                        </Flex>
                        <Flex fontSize={{ base: 'sm', md: 'md' }} py={'2'}>
                            <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Price</Text>
                            <Text fontWeight={'medium'} >{order?.price?.toLocaleString()} / {order?.ad[0]?.coin === 'USDT_TRON' ? 'USDT-TRON' : order?.ad[0]?.coin}</Text>
                        </Flex>
                        <Flex fontSize={{ base: 'sm', md: 'md' }}>
                            <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Quantity</Text>
                            <Text fontWeight={'medium'} >{order?.quantity?.toLocaleString()} {order?.ad[0]?.coin === 'USDT_TRON' ? 'USDT-TRON' : order?.ad[0]?.coin}</Text>
                        </Flex>
                    </Flex>

                    <Flex flexDirection={'column'}>
                        <Flex fontSize={{ base: 'sm', md: 'md' }}>
                            <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Amount</Text>
                            <Text fontWeight={'bold'} >{order?.totalAmount?.toLocaleString()}</Text>
                        </Flex>
                        <Flex fontSize={{ base: 'sm', md: 'md' }} py={'2'}>
                            <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Counterparty</Text>
                            <Text fontWeight={'medium'} color={'#64748B'} >ANNULAR</Text>
                        </Flex>
                        <Flex fontSize={{ base: 'sm', md: 'md' }}>
                            <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Status</Text>
                            <Flex flexDirection={'column'}>
                                <Text fontWeight={'medium'}>{order?.status}</Text>
                                <Text fontWeight={'medium'} color={'#64748B'} cursor={'pointer'} fontSize={'xs'}>Detail</Text>
                            </Flex>
                        </Flex>

                        <Flex fontSize={{ base: 'sm', md: 'md' }}>
                            <Text color="#FB5E04" onClick={() => handleClick(order?.orderId)} borderRadius="5px"  fontSize="14px">Open Trade</Text>
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