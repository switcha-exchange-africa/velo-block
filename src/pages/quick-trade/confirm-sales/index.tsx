import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import PaymentMethodComponent from '../../../components/quick-trade/PaymentMethodComponent'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'

const ConfirmSales = () => {
    const router = useRouter()
    return (
        <DashboardLayout>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box bg={'appWhiteColor'} p={'4'}>
                    <Flex flexDirection={'column'}>
                        <Flex alignItems={'center'} pb={'4'}>
                            <ChevronLeftIcon onClick={() => { router.back() }} />
                            <Text fontSize='lg' as='p' fontWeight={'light'} py={'2'} w={'full'} align={'center'} >Confirm Sales</Text>
                        </Flex>
                        <Text fontSize='2xl' as='b' w={'full'} align={'center'} >N10,000.00</Text>
                        <Text fontSize='xs' as='p' fontWeight={'light'} w={'full'} align={'center'} >I will receive 18.18 USDT</Text>
                        <Text fontSize='xs' as='p' fontWeight={'semibold'} color={'textLightColor'} w={'full'} align={'left'} pt={'8'} pb={'1'}>Select payment method</Text>
                        <PaymentMethodComponent borderColor={'primaryColor.900'} label={'Bank Transfer'} rate={'550.67'} />
                        <PaymentMethodComponent borderColor={'paymentMethodColor2'} label={'Switch NG Wallet'} rate={'550.67'} />
                        <Box p={'8'}></Box>
                        <MainAppButton isLoading={false} backgroundColor={'secondary2Color.900'} >
                            Confirm Purchase
                        </MainAppButton>


                    </Flex>

                </Box>
            </Flex>
        </DashboardLayout>

    )
}

export default ConfirmSales