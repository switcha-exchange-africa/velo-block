import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import MainAppButton from '../../../components/buttons/MainAppButton'
import PaymentMethodComponent from '../../../components/quick-trade/PaymentMethodComponent'
import { useAppSelector } from '../../../helpers/hooks/reduxHooks'
import DashboardLayout from '../../../layouts/dashboard/DashboardLayout'
import Currency from 'react-currency-formatter';
import { useQuickTradeMutation } from '../../../redux/services/quick-trade.service'
import appAlert from '../../../helpers/appAlert'

const ConfirmPurchase = () => {
    const router = useRouter()
    const { amount, cash, coin, creditCoinAmount, fee, rate } = useAppSelector((state) => state.quickTrade)

    React.useEffect(() => {
        // alert(`${amount}, ${cash}, ${coin}, ${creditCoinAmount}, ${fee}`)
    }, [amount, cash, coin, creditCoinAmount, fee, rate])

    const [quickTrade, { isLoading }] = useQuickTradeMutation()

    const handleSubmit = async () => {
        try {

            const response: any = await quickTrade({
                amount: creditCoinAmount,
                cash: cash,
                coin: coin,
                method: "bank",
                type: "buy"
            })
            if (response?.data?.status == 200) {
                router.push('/quick-trade/notify-seller')
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
        <DashboardLayout title='confirm purchase'>
            <Flex bg={'mainBGColor'} justifyContent={'center'} alignItems='center' w='full' h={'full'}>
                <Box bg={'appWhiteColor'} p={'4'}>
                    <Flex flexDirection={'column'}>
                        <Flex alignItems={'center'} pb={'4'}>
                            <ChevronLeftIcon onClick={() => { router.replace({ pathname: '/quick-trade', query: { isBuySelectedProps: true } }) }} />
                            <Text fontSize='lg' as='p' fontWeight={'light'} py={'2'} w={'full'} align={'center'} >Confirm Purchase</Text>
                        </Flex>
                        <Text fontSize='2xl' as='b' w={'full'} align={'center'} ><Currency
                            quantity={amount}
                            currency={cash}
                        /></Text>
                        <Text fontSize='xs' as='p' fontWeight={'light'} w={'full'} align={'center'} >I will receive {creditCoinAmount} {coin}</Text>
                        <Text fontSize='xs' as='p' fontWeight={'semibold'} color={'textLightColor'} w={'full'} align={'left'} pt={'8'} pb={'1'}>Select payment method</Text>
                        <PaymentMethodComponent borderColor={'primaryColor.900'} label={'Bank Transfer'} rate={rate ? parseFloat(rate).toFixed(2) : '0'} />
                        <Box py={'2'}></Box>
                        <PaymentMethodComponent borderColor={'paymentMethodColor2'} label={'Switch NG Wallet'} rate={'550.67'} disabled />

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

export default ConfirmPurchase