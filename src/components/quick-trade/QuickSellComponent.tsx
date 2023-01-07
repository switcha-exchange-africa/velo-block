import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/reduxHooks';
import { setQuickBuyPayload } from '../../redux/features/quick-trade/quickTradeSlice';
import { useGetCoinsByTypeQuery } from '../../redux/services/buy-sell.service';
import { useQuickTradeConvertQuery, useQuickTradeSellConvertQuery } from '../../redux/services/new-conversion.service';
import MainAppButton from '../buttons/MainAppButton';
import RenderCoinsDropdown from '../select/RenderCoinsDropdown';


const QuickSellComponent = () => {
    const router = useRouter()
    const { amount, cash, coin, creditCoinAmount } = useAppSelector((state) => state.quickTrade)
    const [creditCoin, setCreditCoin] = useState(cash ?? `NGN`)
    const [debitCoin, setDebitCoin] = useState(coin ?? `BTC`)
    const [amountt, setAmountt] = useState(amount ? `${amount}` : '0')
    const coinsByTypeCrypto: any = useGetCoinsByTypeQuery('crypto')
    const coinsByTypeFiat: any = useGetCoinsByTypeQuery('fiat')

    // const convertFromDebitCoin: any = useConvertQuery({ amount: amountt, source: debitCoin, destination: creditCoin }, { skip: amountt == '0', refetchOnMountOrArgChange: true })
    // console.log("this is the amount guy", amountt)
    const convertFromCreditCoin: any = useQuickTradeConvertQuery({ base: creditCoin.toLowerCase(), sub: debitCoin.toLowerCase() == 'btc' ? 'bitcoin' : debitCoin.toLowerCase() == 'eth' ? 'ethereum' : 'tether' }, { refetchOnMountOrArgChange: true })
    const convertUSDTCoin: any = useQuickTradeSellConvertQuery({ amount: amountt, base: creditCoin, sub: (debitCoin) }, { refetchOnMountOrArgChange: true })

    const calculateConversion = (numberAmount: number) => {
        return !isNaN(numberAmount) && amountt && amountt != '' ? debitCoin.toLowerCase() == 'btc' ? (convertFromCreditCoin?.data?.data?.bitcoin?.ngn * numberAmount) : debitCoin.toLowerCase() == 'eth' ? (convertFromCreditCoin?.data?.data?.ethereum?.ngn * numberAmount) : (convertFromCreditCoin?.data?.data?.tether?.ngn * numberAmount) : 0
    }

    const calculateConversionForUSDs = (numberAmount: any) => {
        return !isNaN(numberAmount) && amountt && amountt != '' ? debitCoin == 'USDT' ? (convertUSDTCoin?.data?.data * numberAmount) : debitCoin == 'USDC' ? (convertUSDTCoin?.data?.data * numberAmount) : (convertUSDTCoin?.data?.data * numberAmount) : 0
    }

    // console.log("creditcoin ", debitCoin)

    const convertBasedOnType = () => {
        if (debitCoin === "BTC" || debitCoin === "ETH") {
            return isNaN(calculateConversion(parseFloat(amountt))) ? 0 : calculateConversion(parseFloat(amountt)).toLocaleString() ?? creditCoinAmount?.toLocaleString() ?? 0
        } else {
            return isNaN(calculateConversionForUSDs(parseFloat(amountt))) ? 0 : calculateConversionForUSDs(parseFloat(amountt)).toLocaleString() ?? creditCoinAmount?.toLocaleString() ?? 0
        }
    }


    const dispatch = useAppDispatch()
    return (
        <Flex flexDirection={'column'} p={'8'}>
            <Formik
                initialValues={{ debitCoinValue: amount ?? '', creditCoinValue: creditCoinAmount ?? '' }}

                onSubmit={async () => {
                    
                    dispatch(setQuickBuyPayload({
                        amount: parseFloat(amountt),
                        creditCoinAmount: calculateConversion(parseFloat(amountt)),
                        fee: '0.5%',
                        cash: creditCoin,
                        coin: debitCoin,
                        rate: 'no rate for now',
                    }))

                    router.push('/quick-trade/confirm-sales')
                }}
                validateOnChange
                validateOnBlur
                validateOnMount
            >
                {({
                    setFieldValue,
                    handleSubmit,
                    isSubmitting
                }) => (
                    <Form>
                        <VStack w={{ base: 'xs', lg: 'md' }} align='start'>
                            <Field name='debitCoinValue' >
                                {({ field, form }: any) => (
                                    <FormControl isInvalid={form.errors.debitCoinValue && form.touched.debitCoinValue} pt='4'>
                                        <FormLabel fontSize={'xs'} color={'textLightColor'}>I want to pay</FormLabel>
                                        <InputGroup>
                                            <Input autoComplete='off' type="number" variant={'outline'} {...field} onChange={(e) => {
                                                setFieldValue('debitCoinValue', e.target.value);
                                                setAmountt(e.target.value)
                                                !(convertFromCreditCoin.isFetching) && convertFromCreditCoin?.data?.data && setFieldValue('creditCoinValue', calculateConversion(parseFloat(e.target.value)).toLocaleString())

                                            }} onKeyDown={(e) => { ['-', '+'].includes(e.key) && e.preventDefault(); }} />
                                            <InputRightElement width={{ md: '52', base: '36' }}  >
                                                <Flex w={'full'} justifyContent={'flex-end'}>
                                                    {coinsByTypeCrypto?.data?.data && <RenderCoinsDropdown items={coinsByTypeCrypto?.data?.data} onChange={(selectedValue) => setDebitCoin(selectedValue)} value={debitCoin} />}
                                                </Flex>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>{form.errors.debitCoinValue}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            <Field name='creditCoinValue' >
                                {({ form }: any) => (
                                    <FormControl isInvalid={form.errors.creditCoinValue && form.touched.creditCoinValue} py='4'>
                                        <FormLabel fontSize={'xs'} color={'textLightColor'}>To</FormLabel>
                                        <Flex pl={'4'} w='full' border={'1px'} zIndex={'base'} borderColor={'gray.200'} borderRadius={'8'} justifyContent={'space-between'} alignItems={'center'} ><Text w='full'>
                                            {/* {convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount?.toLocaleString() ?? creditCoinAmount?.toLocaleString() ?? 0}</Text> {coinsByTypeFiat?.data?.data && <RenderCoinsDropdown items={coinsByTypeFiat?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />} */}
                                            {convertBasedOnType()}</Text> {coinsByTypeFiat?.data?.data && <RenderCoinsDropdown items={coinsByTypeFiat?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />}
                                        </Flex>

                                        <FormErrorMessage>{form.errors.creditCoinValue}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>

                            {/* <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>Rate per dollar N550</Text> */}
                            <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>Fee : 0.5%  </Text>
                            <Box py={'2'}></Box>
                            <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} backgroundColor={'secondary2Color.900'}>
                                Sell
                            </MainAppButton>





                        </VStack>
                    </Form>


                )}

            </Formik>
        </Flex>
    )
}

export default QuickSellComponent