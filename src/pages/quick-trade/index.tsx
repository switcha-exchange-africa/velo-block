import { Box, Flex, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import QuickBuyComponent from '../../components/quick-trade/QuickBuyComponent';
import QuickSellComponent from '../../components/quick-trade/QuickSellComponent';
import { checkValidToken } from '../../helpers/functions/checkValidToken';
import DashboardLayout from '../../layouts/dashboard/DashboardLayout';
import OrderIcon from "../../../public/assets/svgs/orderIcon.svg"
import Image from 'next/image';


const QuickTrade = () => {
    const router = useRouter()
    const { type } = router.query

    const [isBuySelected, setIsBuySelected] = useState(type == 'buy' ? true : type == 'sell' ? false : true )  
    
    
    React.useEffect(() => {
        // alert(isBuySelectedProps)
    }, [type])
   
    return (
        <DashboardLayout title='Quick Trade'>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box bg={'appWhiteColor'}>
                    <Flex flexDirection={'column'}>
                        <Flex>
                            <Text fontSize={{ md: '3xl', base: '2xl' }} as='b' py={'4'} w={'full'} align={'center'} bg={isBuySelected == true ? 'appWhiteColor' : '#F1F5F9'} cursor={'pointer'} onClick={() => setIsBuySelected(true)}>Buy</Text>
                            <Text fontSize={{ md: '3xl', base: '2xl' }} as='b' py={'4'} w={'full'} align={'center'} bg={isBuySelected == false ? 'appWhiteColor' : '#F1F5F9'} cursor={'pointer'} onClick={() => setIsBuySelected(false)}>Sell</Text>
                            <Flex py={'4'} w={'full'}bg={'mainBGColor'} alignItems="center"  justifyContent="center" onClick={() => router.push('quick-trade/order')} cursor="pointer">
                                <Box mr="7px">
                                    <Image src={OrderIcon} alt="orders icon"/>
                                </Box>
                                <Text color="#FB5E04" fontSize={{ md: '16px', base: '14px' }} as='b' >Orders</Text>
                            </Flex>

                        </Flex>

                        
                        {isBuySelected ? <QuickBuyComponent /> : <QuickSellComponent /> }

                    </Flex>

                </Box>
            </Flex>
        </DashboardLayout>

    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    return checkValidToken(context)

}

export default QuickTrade