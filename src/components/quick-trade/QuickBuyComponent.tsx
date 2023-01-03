import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/reduxHooks';
import { setQuickBuyPayload } from '../../redux/features/quick-trade/quickTradeSlice';
import { useGetCoinsByTypeQuery } from '../../redux/services/buy-sell.service';
import { useCalculateTradeFeesQuery } from '../../redux/services/fees.service';
import { useQuickTradeConvertQuery } from '../../redux/services/new-conversion.service';
// import { useQuickTradeMutation } from '../../redux/services/quick-trade.service';
import MainAppButton from '../buttons/MainAppButton';

import RenderCoinsDropdown from '../select/RenderCoinsDropdown';


const QuickBuyComponent = () => {
    const router = useRouter()
    const { amount, cash, coin, creditCoinAmount} = useAppSelector((state) => state.quickTrade)
    const [creditCoin, setCreditCoin] = useState(coin ?? `BTC`)
    const [debitCoin, setDebitCoin] = useState(cash ?? `NGN`)
    const [amountt, setAmountt] = useState(amount ? `${amount}` : '0')
    const coinsByTypeCrypto: any = useGetCoinsByTypeQuery('crypto')
    const coinsByTypeFiat: any = useGetCoinsByTypeQuery('fiat')

    // const sum = isNaN(calculateConversion(parseFloat(amountt))) ? 0 : calculateConversion(parseFloat(amountt)).toLocaleString() ?? creditCoinAmount?.toLocaleString() ?? 0
    // console.log(" naim be this o ", sum )
    // const ratePerDollar: any = useConvertToGetEstimatedRateQuery({ amount: '1', source: 'USDC', destination: debitCoin }, { refetchOnMountOrArgChange: true })
    // const convertFromDebitCoin: any = useConvertQuery({ amount: amountt, source: debitCoin, destination: creditCoin }, { skip: amountt == '0', refetchOnMountOrArgChange: true })

    const convertFromDebitCoin: any = useQuickTradeConvertQuery({
        base: debitCoin.toLowerCase(),
        sub: creditCoin.toLowerCase() == 'btc' ? 'bitcoin' : creditCoin.toLowerCase() == 'eth' ? 'ethereum' : 'tether'
    }, { refetchOnMountOrArgChange: true })

    const calculateQuickBuyFees: any = useCalculateTradeFeesQuery({ amount: amountt, operation: 'buy' }, { skip: amountt == '0', refetchOnMountOrArgChange: true })

    const calculateConversion = (numberAmount: number) => {
        return !isNaN(numberAmount) && amountt && amountt != '' ? creditCoin.toLowerCase() == 'btc' ? (numberAmount / convertFromDebitCoin?.data?.data?.bitcoin?.ngn) : creditCoin.toLowerCase() == 'eth' ? (numberAmount / convertFromDebitCoin?.data?.data?.ethereum?.ngn) : (numberAmount / convertFromDebitCoin?.data?.data?.tether?.ngn) : 0
    }

    // const [quickTrade] = useQuickTradeMutation()
    const dispatch = useAppDispatch()

    // console.log(convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount)

    return (
        <Flex flexDirection={'column'} p={'8'}>
            <Formik
                initialValues={{ debitCoinValue: amount ?? '', creditCoinValue: creditCoinAmount ?? '' }}
                
                onSubmit={async () => {
                    const data = {
                        amount: parseFloat(amountt),
                        // creditCoinAmount: convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount,
                        creditCoinAmount: calculateConversion(parseFloat(amountt)).toFixed(8),
                        fee: calculateQuickBuyFees?.data?.data?.fee,
                        cash: debitCoin,
                        coin: creditCoin,
                        rate: 'no rate for now'
                    }
                    dispatch(setQuickBuyPayload(data))
                    router.push('/quick-trade/confirm-purchase')
                }}
                validateOnChange
                validateOnBlur
                validateOnMount
            >
                {({
                    // handleChange,
                    // handleBlur,
                    setFieldValue,
                    handleSubmit,
                    isSubmitting,
                    // values
                    /* and other goodies */
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
                                                // alert(amount)
                                                // setFieldValue('creditCoinValue', e.target.value) 
                                                // !(convertFromDebitCoin.isFetching) && convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount && setFieldValue('creditCoinValue', convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount)

                                                !(convertFromDebitCoin.isFetching) && convertFromDebitCoin?.data?.data && setFieldValue('creditCoinValue', calculateConversion(parseFloat(e.target.value)).toLocaleString())

                                            }} onKeyDown={(e) => { ['-', '+'].includes(e.key) && e.preventDefault(); }} />
                                            <InputRightElement width={{ md: '52', base: '36' }}  >
                                                <Flex w={'full'} justifyContent={'flex-end'}>
                                                    {coinsByTypeFiat?.data?.data && <RenderCoinsDropdown items={coinsByTypeFiat?.data?.data} onChange={(selectedValue) => setDebitCoin(selectedValue)} value={debitCoin} />}
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
                                            {/* {convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount?.toLocaleString() ?? creditCoinAmount?.toLocaleString() ?? 0} */}
                                            {isNaN(calculateConversion(parseFloat(amountt))) ? 0 : calculateConversion(parseFloat(amountt)).toLocaleString() ?? creditCoinAmount?.toLocaleString() ?? 0}
                                        </Text>
                                            {coinsByTypeCrypto?.data?.data && <RenderCoinsDropdown items={coinsByTypeCrypto?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />}
                                        </Flex>

                                        <FormErrorMessage>{form.errors.creditCoinValue}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>Fee : 0.5%  </Text>
                            {/* <Text fontSize={'xs'} color={'textLightColor'} pb={'2'}>Rate per dollar {rate ? parseFloat(rate).toFixed(2) : parseFloat(ratePerDollar?.data?.data?.destinationAmount?.rate).toFixed(2)} {debitCoin}</Text> */}

                            <Box py={'1'}></Box>
                            <MainAppButton isLoading={isSubmitting} onClick={handleSubmit} backgroundColor={'secondaryColor.900'} >
                                Buy
                            </MainAppButton>

                        </VStack>
                    </Form>


                )}

            </Formik>
        </Flex>
    )
}

export default QuickBuyComponent