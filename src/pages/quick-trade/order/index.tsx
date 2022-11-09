import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout'
import { Show } from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import moment from 'moment'
import { GetServerSideProps } from 'next'

import React from 'react'
import RenderCoinComponent from '../../../components/dashboard/wallet/RenderCoinComponent'

import { checkValidToken } from '../../../helpers/functions/checkValidToken'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import { useGetP2pOrderForClientsQuery, useGetP2pOrderForMerchantsQuery } from '../../../redux/services/p2p.service'



const Orders = () => {
    const [orderType, setOrderType] = React.useState(`Buy`)

    const clientOrders = useGetP2pOrderForClientsQuery()
    const merchantOrders = useGetP2pOrderForMerchantsQuery()


    const [isClientSelected, setIsClientSelected] = React.useState(true)


    // .reverse()
    return (
        <DashboardLayout title='Orders'>
            <Flex flexDirection={'column'} p={{ base: '2', md: '' }}>
                <Flex >
                    <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }}>
                        <Text fontWeight={'medium'} color={'#64748B'}>Coins</Text>
                        <Select mt={'2'} value={orderType} onChange={(e) => {
                            setOrderType(e.target.value);
                        }}>
                            <option value={'buy'}>Buy</option>
                            <option value={'sell'}>Sell</option>
                        </Select>
                    </Flex>
                    <Flex flexDirection={'column'} px={'8'} fontSize={{ base: 'sm', md: 'md' }}>
                        <Text fontWeight={'medium'} color={'#64748B'}>Order Type</Text>
                        <Select mt={'2'} value={orderType} onChange={(e) => {
                            setOrderType(e.target.value);
                        }}>
                            <option value={'buy'}>Buy</option>
                            <option value={'sell'}>Sell</option>
                        </Select>

                    </Flex>
                    <Flex flexDirection={'column'} fontSize={{ base: 'sm', md: 'md' }}>
                        <Text fontWeight={'medium'} color={'#64748B'}>Status</Text>
                        <Select mt={'2'} value={orderType} onChange={(e) => {
                            setOrderType(e.target.value);
                        }}>
                            <option value={'buy'}>Buy</option>
                            <option value={'sell'}>Sell</option>
                        </Select>
                    </Flex>
                </Flex>
                <Flex bg={'gray.300'} mt={'4'} justifyContent={'space-evenly'}>
                    <Heading w={'full'} textAlign={'center'} cursor={'pointer'} bg={isClientSelected ? 'white' : ''} as={'h6'} py={{ base: '2', lg: '4' }} onClick={() => { setIsClientSelected(true) }}>Client</Heading>
                    <Heading w={'full'} textAlign={'center'} cursor={'pointer'} bg={!isClientSelected ? 'white' : ''} as={'h6'} py={{ base: '2', lg: '4' }} onClick={() => { setIsClientSelected(false) }}>Merchant</Heading>
                </Flex>
                {clientOrders?.data && merchantOrders?.data && <RenderOrderComponent data={isClientSelected ? clientOrders?.data?.data : merchantOrders?.data?.data} />}

            </Flex>
        </DashboardLayout>
    )
}



export const RenderOrderComponent = ({ data }: any) => {
    // alert(JSON.stringify(data))
    return (
        <Box>
            <Show above='md'>
                <Flex justifyContent={'space-between'} pt={'12'} pb={'6'} px={'4'}>
                    <Text fontWeight={'medium'} color={'#64748B'}>Asset Type</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Amount</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Price & Quantity</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Counterparty</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Status</Text>
                    <Text fontWeight={'medium'} color={'#64748B'}>Actions</Text>
                </Flex>
            </Show>

            {data && data.map((order: any,) => {
                return (
                    <Flex key={order._id} flexDirection={'column'} pt={{ base: '6', md: '1' }}>
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
                                <Text fontWeight={'bold'} mt={'2.5'} fontSize={{ base: 'sm', lg: 'md' }}>{order?.totalAmount?.toLocaleString()}</Text>
                                <Flex flexDirection={'column'} mt={'2.5'}>
                                    <Flex fontSize={{ base: 'sm', lg: 'md' }}>
                                        <Text fontWeight={'medium'} pr={'4'} color={'#64748B'}>Price</Text>
                                        <Text fontWeight={'medium'} >{order?.price?.toLocaleString()} / {order?.ad[0]?.coin}</Text>
                                    </Flex>
                                    <Flex fontSize={{ base: 'sm', lg: 'md' }} >
                                        <Text fontWeight={'medium'} pr={'4'} color={'#64748B'}>Quantity</Text>
                                        <Text fontWeight={'medium'} >{order?.quantity?.toLocaleString()} {order?.ad[0]?.coin}</Text>
                                    </Flex>
                                </Flex>
                                <Text fontWeight={'medium'} mt={'2.5'} color={'#64748B'}>ANNULAR</Text>
                                <Flex flexDirection={'column'} mt={'2.5'}>
                                    <Text fontWeight={'medium'}  >{order?.status}</Text>
                                    <Text fontWeight={'medium'} color={'#64748B'} cursor={'pointer'} fontSize={'xs'}>Detail</Text>
                                </Flex>
                                <Text mt={'2.5'} fontWeight={'medium'} color={'transparent'}>Action</Text>
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
                                            <Text fontWeight={'medium'}  >{order?.status}</Text>
                                            <Text fontWeight={'medium'} color={'#64748B'} cursor={'pointer'} fontSize={'xs'}>Detail</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Show>

                    </Flex>
                )
            })}

        </Box>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {

    return checkValidToken(context)

}

export default Orders