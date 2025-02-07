import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import PaymentMethodComponent from '../../../components/quick-trade/PaymentMethodComponent'
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import Currency from 'react-currency-formatter';
import { useQuickTradeMutation } from '../../../redux/services/quick-trade.service'
import appAlert from '../../../helpers/appAlert'
import { setOrderPayload } from '../../../redux/features/quick-trade/quickTradeSlice'
import { GetServerSideProps } from 'next'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'

const ConfirmPurchase = () => {
    const router = useRouter()
    const { amount, cash, coin, creditCoinAmount, fee, rate } = useAppSelector((state) => state.quickTrade)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        // alert(`${amount}, ${cash}, ${coin}, ${creditCoinAmount}, ${fee}`)
    }, [amount, cash, coin, creditCoinAmount, fee, rate])

    const [quickTrade, { isLoading }] = useQuickTradeMutation()

    const handleSubmit = async () => {
        try {
            const data = {
                amount: parseFloat(creditCoinAmount),
                cash: cash,
                coin: coin,
                method: "bank",
                type: "buy"
            }

            const response: any = await quickTrade(data)
            
            if (response?.data?.status == 200) {
                appAlert.success('order created successfully')
                dispatch(setOrderPayload({ order: response?.data?.data }))
                const orderId = response?.data?.data?.order?.orderId
                router.push(`/quick-trade/order/${orderId}`)
            } else if (response?.data?.status == 401) {
                appAlert.error(`${response?.error?.data?.message}`)
                router.replace('/signin')
            } else {
                appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <DashboardLayout title='Confirm Purchase'>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='100%' h={'full'}>
                <Box bg={'appWhiteColor'}  w={["100%", "80%", "390px", "390px"]} px="10px">
                    <Flex flexDirection={'column'}>
                        <Flex alignItems={'center'} pb={'4'}>
                            <ChevronLeftIcon onClick={() => { router.replace({ pathname: '/quick-trade', query: { type: 'buy' } }) }} />
                            <Text fontSize='lg' as='p' fontWeight={'light'} py={'2'} w={'full'} align={'center'} >Confirm Purchase</Text>
                        </Flex>
                        <Text fontSize='2xl' as='b' w={'full'} align={'center'} >
                            <Currency
                                quantity={amount}
                                currency={cash}
                            />
                        </Text>
                        <Text fontSize='xs' as='p' fontWeight={'light'} w={'full'} align={'center'} >I will receive {creditCoinAmount} {coin === 'USDT_TRON' ? 'USDT-TRON' : coin}</Text>
                        <Text fontSize='xs' as='p' fontWeight={'semibold'} color={'textLightColor'} w={'full'} align={'left'} pt={'8'} pb={'1'}>Select payment method</Text>
                        <PaymentMethodComponent width="100%" borderColor={'primaryColor.900'} label={'Bank Transfer'}
                        // rate={
                        //     rate ? parseFloat(rate).toFixed(2) : '0'} 
                        />
                        <Box py={'2'}></Box>
                        {/* <PaymentMethodComponent borderColor={'paymentMethodColor2'} label={'Switch NG Wallet'} disabled /> */}

                        <Box p={'12'}></Box>
                        <MainAppButton isLoading={isLoading} backgroundColor={'secondaryColor.900'} onClick={handleSubmit} >
                            Confirm Purchase
                        </MainAppButton>


                    </Flex>

                </Box>
            </Flex>
        </DashboardLayout>

    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    return checkValidToken(context)

}

export default ConfirmPurchase