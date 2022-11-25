import { Box, Divider, Flex, Text } from '@chakra-ui/layout'
import { Tabs, TabPanels,  TabPanel , Table, TableContainer, Thead, Tbody, Tr, Th, Td} from "@chakra-ui/react"
import { Button} from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import moment from 'moment'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import RenderCoinComponent from '../../../components/dashboard/wallet/RenderCoinComponent'
import RenderCoinsDropdown from '../../../components/select/RenderCoinsDropdown'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'
import { useAppSelector } from '../../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import { useGetCoinsByTypeQuery } from '../../../redux/services/buy-sell.service'
import { useGetP2pOrderFilterForClientQuery, useGetP2pOrderFilterForMerchantQuery } from '../../../redux/services/p2p.service'


const Orders = () => {
    const [orderType, setOrderType] = useState(`Buy/Sell`)
    const { isClientSelected, coin } = useAppSelector((state) => state.quickTrade)
    const [statusType, setStatusType] = useState(`All Status`)
    const coinsByTypeCrypto: any = useGetCoinsByTypeQuery('crypto')
    const [creditCoin, setCreditCoin] = useState(coin ?? `USDT`)
    const filterClientOrderByTypeAndStatus = useGetP2pOrderFilterForClientQuery({type:(orderType==="Buy/Sell" ? "" : orderType), status:(statusType==="All Status" ? "" : statusType), coin: creditCoin})
    const filterMerchantOrderByTypeAndStatus = useGetP2pOrderFilterForMerchantQuery({type:(orderType==="Buy/Sell" ? "" : orderType), status:(statusType==="All Status" ? "" : statusType), coin: creditCoin})


    // const [coinType, setCoinType] = useState(`All Coins`)
    // const clientOrders = useGetP2pOrderForClientsQuery()
    // const merchantOrders = useGetP2pOrderForMerchantsQuery()
    // const { amount, cash, coin, creditCoinAmount} = useAppSelector((state) => state.quickTrade
    // // useGetFilterForMerchantQuery
    // console.log("chekc this data out bro ", filterClientOrderByTypeAndStatus)


    return (
        <DashboardLayout title='Orders'>
             <Tabs variant='unstyled'>
                <TabPanels>
                    {/* Tab one */}
                    <TabPanel p="0"> 
                        <Flex flexDirection={'column'} mt='20px' p={{ base: '0px', md: '' }}>
                            <Flex gap="24px" cursor="pointer">
                                <Flex flexDirection={'column'}  fontSize={{ base: 'sm', md: 'md' }}>
                                    <Text fontWeight={'medium'} color={'#64748B'}>Coins</Text>
                                    <Flex mt={'2'} fontSize={{ base: '12px', md: 'md' }} border="1px solid #8B94A5" borderRadius="5px">
                                        {coinsByTypeCrypto?.data?.data && <RenderCoinsDropdown items={coinsByTypeCrypto?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />}
                                    </Flex>
                                    
                                </Flex>

                                <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }} cursor="pointer" >
                                    <Text fontWeight={'medium'} color={'#64748B'}>Order Type</Text>
                                    
                                    <Select mt={'2'} fontSize={{ base: '12px', md: 'md' }} value={orderType} border="1px solid #8B94A5" onChange={(e) => {
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
                                        <option value={'processing'}>Processing</option>
                                        <option value={'completed'}>Completed</option>
                                        <option value={'expired'}>Expired</option>
                                    </Select>
                                </Flex>
                            </Flex>
                            
                            {filterClientOrderByTypeAndStatus?.data && filterMerchantOrderByTypeAndStatus?.data && <RenderOrderComponent data={isClientSelected ? filterClientOrderByTypeAndStatus?.data?.data : filterMerchantOrderByTypeAndStatus?.data?.data} />}

                        </Flex>
                        
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
            {data.length !== 0 ? (
                <TableContainerComponent data={data} handleClick={handleClick} />
            ) : (
                <Flex bg="white" w="100%" boxShadow="sm" alignItems="center" justifyContent="center" mt="50px" py="50px">
                    <Text fontSize="20px" fontWeight="700">You Don't Have Any Orders Yet</Text>
                </Flex>
            )}
        </Box>
    )
}

export const TableContainerComponent = ({ data, handleClick }: any) => {
    return (
        <>
            <TableContainer display={{base: "none", md: "block"}} key="" mt="60px" position="relative" w={{
                sm: '100px',
                md: '1000px',
                lg: '1000px',
                xl: '1300px',
                '2xl': '80%'
            }}>
                <Table>
                    <Thead borderBottomColor={"transparent"}>
                        <Tr>
                            <Th textAlign={"left"} fontWeight={'medium'}  color={'#64748B'}>Asset Type</Th>
                            <Th textAlign={"left"} fontWeight={'medium'}  color={'#64748B'}>Amount</Th>
                            <Th textAlign={"left"} fontWeight={'medium'}  color={'#64748B'}> Price & Quantity</Th>
                            <Th textAlign={"left"} fontWeight={'medium'}  color={'#64748B'}>Counterparty</Th>
                            <Th textAlign={"left"} fontWeight={'medium'}  color={'#64748B'}>Status</Th>
                            <Th textAlign={"left"} fontWeight={'medium'}  color={'#64748B'}>Actions</Th>
                        </Tr>
                    </Thead>
                    {data.map((order: any) => (
                        <>
                            <Flex key={order?._id} bg="#F8FAFC" w="100%" py='10px'  position="absolute" alignItems={'center'} px={{ md: '4', base: '1' }} my="14px">
                                <Text fontWeight={'medium'} color={order?.type === 'buy' ? 'rgba(34, 195, 107, 1)' : 'red'} fontSize={{ base: 'sm', md: 'md' }}>{order?.type === 'buy' ? 'BUY' : 'SELL'}</Text>
                                <Divider orientation='vertical' mx={'2'} h={'4'} color={'#8E9BAE'} borderWidth={'thin'} />
                                <Text fontSize={{ base: 'sm', md: 'md' }}>{order?.orderId}</Text>
                                <Divider orientation='vertical' mx={'2'} h={'4'} color={'#8E9BAE'} borderWidth={'thin'} />
                                <Text color={'#64748B'} fontSize={{ base: 'sm', md: 'md' }}>{moment(order?.createdAt).format('YYYY-MM-DD HH:mm')}</Text>
                            </Flex>
                            
                            <Tbody my={'20px'}  px={{ lg: '4', base: '1.5' }} pt={'4'} pb={'12'}  borderRadius={'sm'} bg="white" borderBottomColor="transparent" boxShadow="sm" >
                                <Tr>
                                    <Td >
                                        <Flex alignItems={'center'} p="80px 0 0px" >
                                            <RenderCoinComponent coin={order?.coin ? order?.coin : ""} />
                                            <Text pl={'1.5'} fontSize={{ base: 'sm', lg: 'md' }}>{(order?.coin == 'USDT_TRON' ? 'USDT-TRON' : order?.coin) ? (order?.coin == 'USDT_TRON' ? 'USDT-TRON' : order?.coin) : null}</Text>
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
                    )) }
                </Table>
            </TableContainer>

            {/* mobile */}
            {data?.map((order: any) => (
                <Flex key={order?._id}  display={{base: "flex", md: "none"}} justifyContent={'space-between'} my={'25px'} p={'3'} bg={'white'} boxShadow={'md'} borderRadius={'sm'}>
                    <Flex flexDirection={'column'}>
                        <Flex fontSize={{ base: 'sm', md: 'md' }}>
                            <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Asset Type</Text>
                            
                            <Flex alignItems={'center'}>
                                <RenderCoinComponent coin={order?.coin ? order?.coin : ""} />
                                <Text pl={'1.5'} fontSize={{ base: 'sm', lg: 'md' }}>{(order?.coin == 'USDT_TRON' ? 'USDT-TRON' : order?.coin) ? (order?.coin == 'USDT_TRON' ? 'USDT-TRON' : order?.coin) : null}</Text>
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
            ))}
        </>
        
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    return checkValidToken(context)
}

export default Orders