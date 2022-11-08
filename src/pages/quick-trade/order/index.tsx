import { Divider, Flex, Text } from '@chakra-ui/layout'
import { Show } from '@chakra-ui/react'
import { Select } from '@chakra-ui/select'
import { GetServerSideProps } from 'next'
import React from 'react'
import RenderCoinComponent from '../../../components/dashboard/wallet/RenderCoinComponent'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'

const Orders = () => {
    const [orderType, setOrderType] = React.useState(`Buy`)
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


                <Flex flexDirection={'column'} pt={{ base: '6', md: '1' }}>
                    <Flex alignItems={'center'} px={{ md: '4', base: '1' }}>
                        <Text fontWeight={'medium'} color={'rgba(34, 195, 107, 1)'} fontSize={{ base: 'sm', md: 'md' }}>BUY</Text>
                        <Divider orientation='vertical' mx={'2'} h={'4'} color={'#8E9BAE'} borderWidth={'thin'} />
                        <Text fontSize={{ base: 'sm', md: 'md' }}>12345678909876543212</Text>
                        <Divider orientation='vertical' mx={'2'} h={'4'} color={'#8E9BAE'} borderWidth={'thin'} />
                        <Text color={'#64748B'} fontSize={{ base: 'sm', md: 'md' }}>2022-03-06 16:11:23</Text>
                    </Flex>
                    <Show above='md'>
                        <Flex justifyContent={'space-between'} mt={'3'} bg={'white'} px={{ lg: '4', base: '1.5' }} pt={'4'} pb={'12'} boxShadow={'sm'} borderRadius={'sm'}>
                            <Flex alignItems={'center'}>
                                <RenderCoinComponent coin={'BTC'} />
                                <Text pl={'1.5'} fontSize={{ base: 'sm', lg: 'md' }}>BTC</Text>
                            </Flex>
                            <Text fontWeight={'bold'} mt={'2.5'} fontSize={{ base: 'sm', lg: 'md' }}>442,500.00</Text>
                            <Flex flexDirection={'column'} mt={'2.5'}>
                                <Flex fontSize={{ base: 'sm', lg: 'md' }}>
                                    <Text fontWeight={'medium'} pr={'4'} color={'#64748B'}>Price</Text>
                                    <Text fontWeight={'medium'} >590 / USDT</Text>
                                </Flex>
                                <Flex fontSize={{ base: 'sm', lg: 'md' }} >
                                    <Text fontWeight={'medium'} pr={'4'} color={'#64748B'}>Quantity</Text>
                                    <Text fontWeight={'medium'} >750 USDT</Text>
                                </Flex>
                            </Flex>
                            <Text fontWeight={'medium'} mt={'2.5'} color={'#64748B'}>ANNULAR</Text>
                            <Flex flexDirection={'column'} mt={'2.5'}>
                                <Text fontWeight={'medium'}  >Completed</Text>
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
                                        <RenderCoinComponent coin={'BTC'} />
                                        <Text pl={'1.5'} fontSize={{ base: 'sm', md: 'md' }}>BTC</Text>
                                    </Flex>
                                </Flex>
                                <Flex fontSize={{ base: 'sm', md: 'md' }} py={'2'}>
                                    <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Price</Text>
                                    <Text fontWeight={'medium'} >590 / USDT</Text>
                                </Flex>
                                <Flex fontSize={{ base: 'sm', md: 'md' }}>
                                    <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Quantity</Text>
                                    <Text fontWeight={'medium'} >750 USDT</Text>
                                </Flex>
                            </Flex>

                            <Flex flexDirection={'column'}>
                                <Flex fontSize={{ base: 'sm', md: 'md' }}>
                                    <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Amount</Text>
                                    <Text fontWeight={'bold'} >442,500.00</Text>
                                </Flex>
                                <Flex fontSize={{ base: 'sm', md: 'md' }} py={'2'}>
                                    <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Counterparty</Text>
                                    <Text fontWeight={'medium'} color={'#64748B'} >ANNULAR</Text>
                                </Flex>
                                <Flex fontSize={{ base: 'sm', md: 'md' }}>
                                    <Text fontWeight={'medium'} pr={'2'} color={'#64748B'}>Status</Text>
                                    <Flex flexDirection={'column'}>
                                        <Text fontWeight={'medium'}  >Completed</Text>
                                        <Text fontWeight={'medium'} color={'#64748B'} cursor={'pointer'} fontSize={'xs'}>Detail</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Show>

                </Flex>
            </Flex>
        </DashboardLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    return checkValidToken(context)

}

export default Orders