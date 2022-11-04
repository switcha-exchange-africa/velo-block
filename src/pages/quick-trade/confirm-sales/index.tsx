import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import PaymentMethodComponent from '../../../components/quick-trade/PaymentMethodComponent'
import appAlert from '../../../helpers/appAlert'
import { useAppDispatch, useAppSelector } from '../../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import { setOrderPayload } from '../../../redux/features/quick-trade/quickTradeSlice'
import { useQuickTradeMutation } from '../../../redux/services/quick-trade.service'
import Currency from 'react-currency-formatter';
import { GetServerSideProps } from 'next'
import { checkValidToken } from '../../../helpers/functions/checkValidToken'

const ConfirmSales = () => {
    const router = useRouter()
    const { amount, cash, coin, creditCoinAmount, fee, rate } = useAppSelector((state) => state.quickTrade)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        // alert(`${amount}, ${cash}, ${coin}, ${creditCoinAmount}, ${fee}`)
    }, [amount, cash, coin, creditCoinAmount, fee, rate])

    const [quickTrade, { isLoading }] = useQuickTradeMutation()

    const handleSubmit = async () => {
        try {

            const response: any = await quickTrade({
                amount: amount,
                cash: cash,
                coin: coin,
                method: "bank",
                type: "sell"
            })
            if (response?.data?.status == 200) {
                // alert(JSON.stringify(response?.data?.data))
                appAlert.success('order created successfully')
                dispatch(setOrderPayload({ order: response?.data?.data }))
                const orderId = response?.data?.data?.order?.orderId
                router.push(`/quick-trade/${orderId}`)

            } else if (response?.data?.status == 401) {

                appAlert.error(`${response?.error?.data?.message}`)
                // alert(JSON.stringify(res))
                router.replace('/signin')
            } else {

                appAlert.error(`${response?.error?.data?.message ?? 'An error Occured'}`)
            }
        } catch (error) {

            console.log(error)
        }
    }
    return (
        <DashboardLayout title='Confirm Sales'>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box bg={'appWhiteColor'} p={'4'}>
                    <Flex flexDirection={'column'}>
                        <Flex alignItems={'center'} pb={'4'}>
                            <ChevronLeftIcon onClick={() => { router.replace({ pathname: '/quick-trade', query: { type: 'sell' } }) }} />
                            <Text fontSize='lg' as='p' fontWeight={'light'} py={'2'} w={'full'} align={'center'} >Confirm Sales</Text>
                        </Flex>
                        <Text fontSize='2xl' as='b' w={'full'} align={'center'} >{amount} {coin}</Text>
                        <Text fontSize='xs' as='p' fontWeight={'light'} w={'full'} align={'center'} >I will receive <Currency
                            quantity={creditCoinAmount}
                            currency={cash}
                        /></Text>
                        <Text fontSize='xs' as='p' fontWeight={'semibold'} color={'textLightColor'} w={'full'} align={'left'} pt={'8'} pb={'1'}>Select payment method</Text>
                        <PaymentMethodComponent borderColor={'primaryColor.900'} label={'Bank Transfer'} rate={'550.67'} />
                        <Box py={'2'}></Box>
                        <PaymentMethodComponent borderColor={'paymentMethodColor2'} label={'Switch NG Wallet'} rate={'550.67'} disabled />
                        <Box p={'12'}></Box>
                        <MainAppButton isLoading={isLoading} onClick={() => handleSubmit()} backgroundColor={'secondary2Color.900'} >
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
export default ConfirmSales