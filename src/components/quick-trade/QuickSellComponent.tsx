import { Box, Flex, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks/reduxHooks';
import { setQuickBuyPayload } from '../../redux/features/quick-trade/quickTradeSlice';
import { useConvertQuery, useGetCoinsByTypeQuery } from '../../redux/services/buy-sell.service';
import MainAppButton from '../buttons/MainAppButton';
import RenderCoinsDropdown from '../select/RenderCoinsDropdown';



const QuickSellComponent = () => {
    const router = useRouter()
    const { amount, cash, coin, creditCoinAmount, } = useAppSelector((state) => state.quickTrade)
    const [creditCoin, setCreditCoin] = useState(cash ?? `NGN`)
    const [debitCoin, setDebitCoin] = useState(coin ?? `BTC`)
    const [amountt, setAmountt] = useState(amount ? `${amount}` : '0')
    const coinsByTypeCrypto: any = useGetCoinsByTypeQuery('crypto')
    const coinsByTypeFiat: any = useGetCoinsByTypeQuery('fiat')

    const convertFromDebitCoin: any = useConvertQuery({ amount: amountt, source: debitCoin, destination: creditCoin }, { skip: amountt == '0', refetchOnMountOrArgChange: true })

    const dispatch = useAppDispatch()
    return (
        <Flex flexDirection={'column'} p={'8'}>
            <Formik
                initialValues={{ debitCoinValue: amount ?? '', creditCoinValue: creditCoinAmount ?? '' }}

                onSubmit={async (values, { }) => {
                    console.log(values)
                    dispatch(setQuickBuyPayload({ amount: parseFloat(amountt), creditCoinAmount: convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount, fee: '0.5%', cash: creditCoin, coin: debitCoin, rate: 'no rate for now' }))
                    router.push('/quick-trade/confirm-sales')
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
                                            <Input autoComplete='off' variant={'outline'} {...field} onChange={(e) => {
                                                setFieldValue('debitCoinValue', e.target.value);
                                                setAmountt(e.target.value)
                                                // alert(amount)
                                                // setFieldValue('creditCoinValue', e.target.value) 
                                                !(convertFromDebitCoin.isFetching) && convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount && setFieldValue('creditCoinValue', convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount)

                                            }} />
                                            <InputRightElement width='28'  >

                                                {coinsByTypeCrypto?.data?.data && <RenderCoinsDropdown items={coinsByTypeCrypto?.data?.data} onChange={(selectedValue) => setDebitCoin(selectedValue)} value={debitCoin} />}


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
                                        <Flex pl={'4'} w='full' border={'1px'} zIndex={'base'} borderColor={'gray.200'} borderRadius={'8'} justifyContent={'space-between'} alignItems={'center'} ><Text w='full'>{convertFromDebitCoin?.data?.data?.destinationAmount?.destinationAmount?.toLocaleString() ?? creditCoinAmount?.toLocaleString() ?? 0}</Text> {coinsByTypeFiat?.data?.data && <RenderCoinsDropdown items={coinsByTypeFiat?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />}</Flex>
                                        {/* <InputGroup>
                                        <Input disabled autoComplete='off' variant={'outline'} {...field} />
                                        <InputRightElement width={'40'} >
                                            {allCoins?.data?.data && <RenderCoinsDropdown items={allCoins?.data?.data} onChange={(selectedValue) => setCreditCoin(selectedValue)} value={creditCoin} />}
                                        </InputRightElement>
                                    </InputGroup> */}
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