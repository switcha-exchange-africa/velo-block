import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import { Button, Show} from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import RenderCoinComponent from '../../../components/dashboard/wallet/RenderCoinComponent'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'
import { useAppSelector } from '../../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import { useGetP2pOrderForClientsQuery, useGetP2pOrderForMerchantsQuery } from '../../../redux/services/p2p.service'


const Orders = () => {
    const [orderType, setOrderType] = useState(`Buy/Sell`)
    const { isClientSelected } = useAppSelector((state) => state.quickTrade)
    const [coinType, setCoinType] = useState(`All Coins`)
    const [statusType, setStatusType] = useState(`All Status`)
    const clientOrders = useGetP2pOrderForClientsQuery()
    const merchantOrders = useGetP2pOrderForMerchantsQuery()


    return (
        <DashboardLayout title='Orders'>
             <Tabs variant='unstyled'>
                <TabList left={["0%", "0", "12%"]} py={["7px", "7px", "10px"]} top={"60px"} bg={"white"} w={["100%", "100%", "100%"]}  position={"fixed"} pl={["15px", "15px", "90px"]} zIndex="10">
                    <Tab _selected={{ color: '#fb5e04' }}>
                        <Text fontSize={["18px", "20px", "20px"]} fontWeight={"600"}>All Orders</Text>
                    </Tab>
                    <Tab _selected={{ color: '#fb5e04'}}>            
                        <Text fontSize={["18px", "20px", "20px"]} fontWeight={"600"}>Pending</Text>
                    </Tab>
                    <Tab _selected={{ color: '#fb5e04' }}>
                        <Text fontSize={["18px", "20px", "20px"]} fontWeight={"600"}>Completed</Text>
                    </Tab>
                </TabList>

                <TabPanels>
                    {/* Tab one */}
                    <TabPanel  p="0"> 
                        <Flex flexDirection={'column'} mt="100px" p={{ base: '0px', md: '' }}>
                            <Flex gap="24px" cursor="pointer">
                                <Flex flexDirection={'column'}  fontSize={{ base: 'sm', md: 'md' }}>
                                    <Text fontWeight={'medium'} color={'#64748B'}>Coins</Text>
                                    <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={coinType} onChange={(e) => {
                                        setCoinType(e.target.value);
                                    }}>
                                        <option value={'buy'}>All Coins</option>
                                    </Select>

                                </Flex>

                                <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }} cursor="pointer" >
                                    <Text fontWeight={'medium'} color={'#64748B'}>Order Type</Text>
                                    
                                    <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={orderType} onChange={(e) => {
                                        setOrderType(e.target.value);
                                    }}>
                                        <option value={'buy'}>Buy/Sell</option>
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
                            {/* <Flex bg={'gray.300'} mt={'4'} justifyContent={'space-evenly'}>
                                <Heading w={'full'} textAlign={'center'} cursor={'pointer'} bg={isClientSelected ? 'white' : ''} as={'h6'} py={{ base: '2', lg: '4' }} onClick={() => { setIsClientSelected(true) }}>Client</Heading>
                                <Heading w={'full'} textAlign={'center'} cursor={'pointer'} bg={!isClientSelected ? 'white' : ''} as={'h6'} py={{ base: '2', lg: '4' }} onClick={() => { setIsClientSelected(false) }}>Merchant</Heading>
                            </Flex> */}
                            
                            
                            {clientOrders?.data && merchantOrders?.data && <RenderOrderComponent data={isClientSelected ? clientOrders?.data?.data : merchantOrders?.data?.data} />}

                        </Flex>
                        
                    </TabPanel>

                    <TabPanel>
                        <Text mt="100px">Pending</Text>
                    </TabPanel>

                    <TabPanel>
                        <Text mt="100px">Completed</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            
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
            <Show above='md'>
                <Flex justifyContent={'space-between'} pt={'12'} pb={'6'} px={'4'} w="95%">
                    <Text fontWeight={'medium'} color={'#64748B'}>Asset Type</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Amount</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Price & Quantity</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Counterparty</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Status</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Actions</Text>
                </Flex>
            </Show>

            {data.length !== 0 ? data.map((order: any,) => {
                return (
                    <Flex key={order?._id} flexDirection={'column'} pt={{ base: '6', md: '1' }} mb="24px">
                        <Flex alignItems={'center'} px={{ md: '4', base: '1' }}>
                            <Text fontWeight={'medium'} color={order?.ad[0]?.type != 'buy' ? 'rgba(34, 195, 107, 1)' : 'red'} fontSize={{ base: 'sm', md: 'md' }}>{order?.ad[0]?.type != 'buy' ? 'BUY' : 'Sell'}</Text>
                            <Divider orientation='vertical' mx={'2'} h={'4'} color={'#8E9BAE'} borderWidth={'thin'} />
                            <Text fontSize={{ base: 'sm', md: 'md' }}>{order?.orderId}</Text>
                            <Divider orientation='vertical' mx={'2'} h={'4'} color={'#8E9BAE'} borderWidth={'thin'} />
                            <Text color={'#64748B'} fontSize={{ base: 'sm', md: 'md' }}>{moment(order?.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
                        </Flex>
                        <Show above='md'>
                            <Flex justifyContent={'space-between'} mt={'3'} bg={'white'} px={{ lg: '4', base: '1.5' }} pt={'4'} pb={'12'} boxShadow={'sm'} borderRadius={'sm'}>
                                <Flex alignItems={'center'}>
                                    <RenderCoinComponent coin={order?.ad[0]?.coin} />
                                    <Text pl={'1.5'} fontSize={{ base: 'sm', lg: 'md' }}>{order?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : order?.ad[0]?.coin}</Text>
                                </Flex>
                                
                                <Text   fontWeight={'bold'} mt={'2.5'} fontSize={{ base: 'sm', lg: 'md' }}>{order?.totalAmount?.toLocaleString()}</Text>
                                
                                <Flex  flexDirection={'column'} mt={'2.5'}>
                                    <Flex fontSize={{ base: 'sm', lg: 'md' }}>
                                        <Text fontWeight={'medium'} pr={'4'} color={'#64748B'}>Price</Text>
                                        <Text fontWeight={'medium'} fontSize="14px" >{order?.price?.toLocaleString()} / {order?.ad[0]?.coin}</Text>
                                    </Flex>
                                    <Flex fontSize={{ base: 'sm', lg: 'md' }} >
                                        <Text fontWeight={'medium'} pr={'4'} color={'#64748B'}>Quantity</Text>
                                        <Text fontWeight={'medium'} fontSize="14px" >{order?.quantity?.toLocaleString()} {order?.ad[0]?.coin}</Text>
                                    </Flex>
                                </Flex>
                                
                                <Text  fontWeight={'medium'} mt={'2.5'} color={'#64748B'}>ANNULAR</Text>
                                
                                <Flex  flexDirection={'column'} mt={'2.5'}>
                                    <Text fontWeight={'medium'}  >{order?.status}</Text>
                                    <Text fontWeight={'medium'} color={'#64748B'} cursor={'pointer'} fontSize={'xs'}>Detail</Text>
                                </Flex>
                                
                                <Button p="9px 22px"  bg="#FB5E04" onClick={() => handleClick(order?.orderId)} borderRadius="5px" color="white" _hover={{bg: "#f35f09"}} fontSize="14px">Open Trade</Button>
            

                            </Flex>
                        </Show>

                        
                        <Show below='sm'>
                            <Flex justifyContent={'space-between'} my={'2'} p={'3'} bg={'white'} boxShadow={'md'} borderRadius={'sm'}>
                                <Flex flexDirection={'column'}>
                                    <Flex fontSize={{ base: 'sm', md: 'md' }}>
                                        <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Asset Type</Text>
                                        <Flex alignItems={'center'}>
                                            <RenderCoinComponent coin={order?.ad[0]?.coin} />
                                            <Text pl={'1.5'} fontSize={{ base: 'sm', md: 'md' }}>{order?.ad[0]?.coin == 'USDT_TRON' ? 'USDT-TRON' : order?.ad[0]?.coin}</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex fontSize={{ base: 'sm', md: 'md' }} py={'2'}>
                                        <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Price</Text>
                                        <Text fontWeight={'medium'} >{order?.price?.toLocaleString()} / {order?.ad[0]?.coin}</Text>
                                    </Flex>
                                    <Flex fontSize={{ base: 'sm', md: 'md' }}>
                                        <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Quantity</Text>
                                        <Text fontWeight={'medium'} >{order?.quantity?.toLocaleString()} {order?.ad[0]?.coin}</Text>
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
                                        {/* <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Actions</Text> */}
                                        {/* <Button>
                                            Open Trade
                                        </Button> */}

                                    </Flex>
                                </Flex>
                            </Flex>
                        </Show>

                    </Flex>
                )
            }) : <Text mt="50px" py="20px" textAlign="center" fontSize="20px" color="grey">You Dont Have Any Order Yet</Text>}

            
        </Box>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    return checkValidToken(context)

}

export default Orders