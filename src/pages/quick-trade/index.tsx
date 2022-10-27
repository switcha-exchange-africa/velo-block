import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import QuickBuyComponent from '../../components/quick-trade/QuickBuyComponent';
import QuickSellComponent from '../../components/quick-trade/QuickSellComponent';
import DashboardLayout from '../../layouts/dashboard/DashboardLayout';


const QuickTrade = () => {
    const [isBuySelected, setIsBuySelected] = useState(true)

    return (
        <DashboardLayout title='quick trade'>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box bg={'appWhiteColor'}>
                    <Flex flexDirection={'column'}>
                        <Flex>
                            <Text fontSize='3xl' as='b' py={'4'} w={'full'} align={'center'} bg={isBuySelected == true ? 'appWhiteColor' : 'gray.200'} cursor={'pointer'} onClick={() => setIsBuySelected(true)}>Buy</Text>
                            <Text fontSize='3xl' as='b' py={'4'} w={'full'} align={'center'} bg={isBuySelected == false ? 'appWhiteColor' : 'gray.200'} cursor={'pointer'} onClick={() => setIsBuySelected(false)}>Sell</Text>
                        </Flex>
                        {isBuySelected ? <QuickBuyComponent /> : <QuickSellComponent />}

                    </Flex>

                </Box>
            </Flex>
        </DashboardLayout>

    )
}

export default QuickTrade