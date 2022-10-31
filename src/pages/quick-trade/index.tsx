import { Box, Flex, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import QuickBuyComponent from '../../components/quick-trade/QuickBuyComponent';
import QuickSellComponent from '../../components/quick-trade/QuickSellComponent';
import { checkValidToken } from '../../helpers/functions/checkValidToken';
import DashboardLayout from '../../layouts/dashboard/DashboardLayout';


const QuickTrade = () => {
    const router = useRouter()
    const { isBuySelectedProps } = router.query

    const [isBuySelected, setIsBuySelected] = useState(!isBuySelectedProps == true ? false : !isBuySelectedProps == false ? true : true)
    React.useEffect(() => {
        // alert(isBuySelectedProps)
    }, [isBuySelectedProps])
    return (
        <DashboardLayout title='quick trade'>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box bg={'appWhiteColor'}>
                    <Flex flexDirection={'column'}>
                        <Flex>
                            <Text fontSize={{ md: '3xl', base: '2xl' }} as='b' py={'4'} w={'full'} align={'center'} bg={isBuySelected == true ? 'appWhiteColor' : 'gray.200'} cursor={'pointer'} onClick={() => setIsBuySelected(true)}>Buy</Text>
                            <Text fontSize={{ md: '3xl', base: '2xl' }} as='b' py={'4'} w={'full'} align={'center'} bg={isBuySelected == false ? 'appWhiteColor' : 'gray.200'} cursor={'pointer'} onClick={() => setIsBuySelected(false)}>Sell</Text>
                        </Flex>
                        {isBuySelected ? <QuickBuyComponent /> : <QuickSellComponent />}

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